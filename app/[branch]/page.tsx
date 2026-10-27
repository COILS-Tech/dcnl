import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import HeroBanner from '@/components/HeroBanner'
import ServiceTimes from '@/components/ServiceTimes'
import BranchPhotoCarousel from '@/components/BranchPhotoCarousel'
import LeaderCard from '@/components/LeaderCard'
import EventCard from '@/components/EventCard'
import SermonCard from '@/components/SermonCard'
import SpecialMeetingAnnouncement from '@/components/SpecialMeetingAnnouncement'
import { sanityFetch } from '@/sanity/lib/client'
import { branchBySlugQuery, allBranchSlugsQuery } from '@/sanity/lib/queries'
import { FALLBACK_BRANCH_MAP } from '@/data/fallbackBranches'
import { AMSTERDAM_SUNDAY_VENUE, AMSTERDAM_TRANSITION_EVENT, isAmsterdamTransitionEvent, withAmsterdamTransition } from '@/data/amsterdamTransition'
import type { Branch } from '@/types'

export const revalidate = 60

function withFallbackBranch(cmsBranch: Branch | null, slug: string): Branch | null {
  const fallback = FALLBACK_BRANCH_MAP[slug]
  if (!cmsBranch) return fallback ?? null
  if (!fallback) return cmsBranch

  return {
    ...fallback,
    ...cmsBranch,
    summary: cmsBranch.summary ?? fallback.summary,
    aboutTitle: cmsBranch.aboutTitle ?? fallback.aboutTitle,
    aboutBody: cmsBranch.aboutBody ?? fallback.aboutBody,
    serviceTimes:
      cmsBranch.serviceTimes && cmsBranch.serviceTimes.length > 0
        ? cmsBranch.serviceTimes
        : fallback.serviceTimes,
    importantDetails:
      cmsBranch.importantDetails && cmsBranch.importantDetails.length > 0
        ? cmsBranch.importantDetails
        : fallback.importantDetails,
    ministryFocus:
      cmsBranch.ministryFocus && cmsBranch.ministryFocus.length > 0
        ? cmsBranch.ministryFocus
        : fallback.ministryFocus,
    instagramHighlights:
      cmsBranch.instagramHighlights && cmsBranch.instagramHighlights.length > 0
        ? cmsBranch.instagramHighlights
        : fallback.instagramHighlights,
  }
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(allBranchSlugsQuery)
  if (!slugs || slugs.length === 0) return [{ branch: 'amsterdam' }, { branch: 'rotterdam' }]
  return slugs.map(({ slug }) => ({ branch: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branch: string }>
}): Promise<Metadata> {
  const { branch: slug } = await params
  const branch = withFallbackBranch(await sanityFetch<Branch>(branchBySlugQuery, { slug }), slug)
  if (!branch) return { title: 'Not Found' }
  return {
    title: `Dominion City ${branch.name}`,
    description: branch.summary ?? branch.tagline ?? `Dominion City ${branch.name} Netherlands`,
  }
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ branch: string }>
}) {
  const { branch: slug } = await params
  const sourceBranch = withFallbackBranch(await sanityFetch<Branch>(branchBySlugQuery, { slug }), slug)

  if (!sourceBranch) notFound()

  const branch = withAmsterdamTransition(sourceBranch)
  const cmsTransitionEvent = branch.events?.find(isAmsterdamTransitionEvent)
  const events = slug === 'amsterdam'
    ? [{ ...AMSTERDAM_TRANSITION_EVENT, ...cmsTransitionEvent }, ...(branch.events ?? []).filter(
        (event) => !isAmsterdamTransitionEvent(event)
      )]
    : branch.events ?? []

  const hasLeaders = (branch.leaders?.length ?? 0) > 0
  const hasEvents = events.length > 0
  const hasSermons = (branch.sermons?.length ?? 0) > 0
  const hasImportantDetails = (branch.importantDetails?.length ?? 0) > 0
  const hasMinistryFocus = (branch.ministryFocus?.length ?? 0) > 0

  // Branch photos
  const branchPhotos = {
    amsterdam: [
      { src: '/branches/amsterdam/worship-1.jpg', alt: 'Worship service at Dominion City Amsterdam' },
      { src: '/branches/amsterdam/community-1.jpg', alt: 'Community gathering in Amsterdam' },
      { src: '/branches/amsterdam/prayer-1.jpg', alt: 'Prayer meeting in Amsterdam' },
      { src: '/branches/amsterdam/conference-1.jpg', alt: 'Conference at Dominion City Amsterdam' },
      { src: '/branches/amsterdam/gathering-1.jpg', alt: 'Branch gathering in Amsterdam' },
      { src: '/branches/amsterdam/instagram/instagram-1.jpg', alt: 'Recent worship moment from Instagram' },
      { src: '/branches/amsterdam/instagram/instagram-2.jpg', alt: 'Community fellowship from Instagram' },
      { src: '/branches/amsterdam/instagram/instagram-3.jpg', alt: 'Teaching moment from Instagram' },
      { src: '/branches/amsterdam/instagram/instagram-4.jpg', alt: 'Prayer gathering from Instagram' },
      { src: '/branches/amsterdam/instagram/instagram-5.jpg', alt: 'Special event from Instagram' },
    ],
    rotterdam: [
      { src: '/branches/rotterdam/worship-1.jpg', alt: 'Worship service at Dominion City Rotterdam' },
      { src: '/branches/rotterdam/community-1.jpg', alt: 'Community gathering in Rotterdam' },
      { src: '/branches/rotterdam/prayer-1.jpg', alt: 'Prayer meeting in Rotterdam' },
      { src: '/branches/rotterdam/conference-1.jpg', alt: 'Conference at Dominion City Rotterdam' },
      { src: '/branches/rotterdam/gathering-1.jpg', alt: 'Branch gathering in Rotterdam' },
      { src: '/branches/rotterdam/instagram/instagram-1.jpg', alt: 'Recent worship moment from Instagram' },
      { src: '/branches/rotterdam/instagram/instagram-2.jpg', alt: 'Community fellowship from Instagram' },
      { src: '/branches/rotterdam/instagram/instagram-3.jpg', alt: 'Teaching moment from Instagram' },
      { src: '/branches/rotterdam/instagram/instagram-4.jpg', alt: 'Prayer gathering from Instagram' },
      { src: '/branches/rotterdam/instagram/instagram-5.jpg', alt: 'Special event from Instagram' },
    ],
  }

  const currentBranchPhotos = branchPhotos[slug as keyof typeof branchPhotos] || []

  return (
    <>
      <HeroBanner
        eyebrow="Dominion City"
        title={branch.name}
        subtitle={branch.tagline}
        images={[
          '/hero/worship-1.jpg',
          '/hero/worship-2.jpg',
          '/hero/worship-3.jpg',
          '/hero/community.jpg',
        ]}
        cta={
          branch.whatsappLink
            ? { label: 'Join WhatsApp Group', href: branch.whatsappLink }
            : undefined
        }
        size="medium"
      />

      {slug === 'amsterdam' && <SpecialMeetingAnnouncement />}

      {currentBranchPhotos.length > 0 && (
        <BranchPhotoCarousel
          branchName={`Dominion City ${branch.name}`}
          photos={currentBranchPhotos}
        />
      )}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
            <div>
              <p className="section-label">Branch Life</p>
              <h2 className="section-heading mb-6">
                {branch.aboutTitle ?? `Dominion City ${branch.name}`}
              </h2>
              {branch.summary && (
                <p className="text-lg font-semibold leading-relaxed text-primary">
                  {branch.summary}
                </p>
              )}
              {branch.aboutBody && (
                <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-600">
                  {branch.aboutBody}
                </p>
              )}

              {hasMinistryFocus && (
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {branch.ministryFocus!.map((focus) => (
                    <div key={focus._key ?? focus.title} className="border-t-2 border-accent bg-white p-5">
                      <h3 className="font-bold text-primary">{focus.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {focus.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {hasImportantDetails && (
              <div className="bg-primary p-6 text-white md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Important Details
                </p>
                <div className="mt-6 space-y-5">
                  {branch.importantDetails!.map((detail) => (
                    <div
                      key={detail._key ?? `${detail.label}-${detail.value}`}
                      className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                        {detail.label}
                      </p>
                      <p className="mt-1 font-semibold text-white">{detail.value}</p>
                      {detail.description && (
                        <p className="mt-2 text-sm leading-relaxed text-white/65">
                          {detail.description}
                        </p>
                      )}
                      {detail.actionUrl && detail.actionLabel && (
                        <a
                          href={detail.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-accent hover:underline"
                        >
                          {detail.actionLabel}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ServiceTimes
        serviceTimes={branch.serviceTimes ?? []}
        address={branch.address}
        mapEmbedUrl={branch.mapEmbedUrl}
        addressLabel={
          slug === 'amsterdam'
            ? AMSTERDAM_SUNDAY_VENUE.label
            : undefined
        }
      />

      {hasLeaders && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="section-label">Our Team</p>
              <h2 className="section-heading">Leadership</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {branch.leaders!.map((leader) => (
                <LeaderCard key={leader._id} leader={leader} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${hasLeaders ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">What&apos;s On</p>
            <h2 className="section-heading">Events &amp; Announcements</h2>
          </div>
          {hasEvents ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p className="text-lg font-medium">No upcoming events at the moment.</p>
              <p className="text-sm mt-2">
                Check back soon or follow us on Instagram for updates.
              </p>
              {branch.instagramHandle && (
                <a
                  href={`https://instagram.com/${branch.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-accent font-medium hover:underline"
                >
                  @{branch.instagramHandle} →
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              Watch &amp; Listen
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">Sermons</h2>
          </div>
          {hasSermons ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branch.sermons!.slice(0, 6).map((sermon) => (
                <SermonCard key={sermon._id} sermon={sermon} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white/50 py-12">
              <p className="text-lg font-medium">Sermons coming soon.</p>
              <p className="text-sm mt-2">Sermons will be added here once available.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-black lowercase text-primary md:text-5xl lg:text-6xl">
              volg ons
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Blijf op de hoogte van alles wat er speelt bij Dominion City {branch.name}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {branch.instagramHandle && (
                <a
                  href={`https://instagram.com/${branch.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Instagram
                </a>
              )}
              {branch.whatsappLink && (
                <a
                  href={branch.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Community
                </a>
              )}
              <a
                href="https://www.dominioncity.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                DC Global
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
