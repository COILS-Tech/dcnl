import Image from 'next/image'
import Link from 'next/link'
import { AMSTERDAM_TRANSITION } from '@/data/amsterdamTransition'

export function SpecialMeetingNotice() {
  return (
    <Link
      href="#amsterdam-special-meeting"
      className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-accent px-4 py-4 text-center text-sm font-semibold text-primary transition-colors hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary"
    >
      <span className="font-black uppercase tracking-wide">Amsterdam is moving!</span>
      <span>{AMSTERDAM_TRANSITION.meetingName} · 1 November 2026 · {AMSTERDAM_TRANSITION.timeLabel}</span>
      <span className="underline underline-offset-4">View the special meeting →</span>
    </Link>
  )
}

export default function SpecialMeetingAnnouncement() {
  return (
    <section
      id="amsterdam-special-meeting"
      aria-labelledby="amsterdam-special-meeting-title"
      className="scroll-mt-20 bg-primary px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <p className="mb-5 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            Special Meeting · New Venue
          </p>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            Dominion City Amsterdam
          </p>
          <h2
            id="amsterdam-special-meeting-title"
            className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-accent">{AMSTERDAM_TRANSITION.meetingName}</span>
          </h2>
          <p className="mt-4 text-xl font-bold">A new venue. A new chapter together.</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Join Dominion City Amsterdam for a special meeting as we celebrate our move
            to {AMSTERDAM_TRANSITION.venue} — a new space to gather, worship, grow,
            and do life together. Bring your family and friends — everyone is welcome.
          </p>
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Ministering</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-white/90">
              {AMSTERDAM_TRANSITION.ministers.map((minister) => <li key={minister}>{minister}</li>)}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white p-6 text-primary shadow-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/60">
              Our first service at the new venue
            </p>
            <time dateTime={AMSTERDAM_TRANSITION.date} className="mt-3 block">
              <span className="block text-2xl font-black">
                {AMSTERDAM_TRANSITION.dateLabel}
              </span>
              <span className="mt-2 block text-xl font-bold">
                {AMSTERDAM_TRANSITION.timeLabel}
              </span>
            </time>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/60">
                New venue · from 1 November 2026
              </p>
              <address className="mt-3 not-italic leading-relaxed">
                <span className="block text-xl font-bold">{AMSTERDAM_TRANSITION.venue}</span>
                <span className="block text-gray-600">{AMSTERDAM_TRANSITION.street}</span>
                <span className="block text-gray-600">{AMSTERDAM_TRANSITION.city}</span>
              </address>
              <p className="mt-4 font-semibold text-primary">
                All our Sunday meetings will continue here after 1 November 2026.
                <span className="mt-1 block text-sm text-gray-600">Every Sunday at 10:00 AM.</span>
              </p>
            </div>

            <a
              href={AMSTERDAM_TRANSITION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 block text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Get directions →
            </a>
            <p className="mt-6 text-sm text-gray-600">
              For enquiries:{' '}
              <a
                href={`mailto:${AMSTERDAM_TRANSITION.email}`}
                className="break-words font-semibold text-primary underline underline-offset-4 hover:text-primary-light"
              >
                {AMSTERDAM_TRANSITION.email}
              </a>
            </p>
          </div>
        </div>

        <figure className="mx-auto w-full min-w-0 max-w-xl">
          <a
            href={AMSTERDAM_TRANSITION.flyer.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the full Rejoice Amsterdam event flyer"
            className="block overflow-hidden rounded-2xl bg-[#fffcf3] shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              {...AMSTERDAM_TRANSITION.flyer}
              alt={AMSTERDAM_TRANSITION.flyer.alt}
              sizes="(min-width: 1280px) 608px, (min-width: 1024px) 50vw, (min-width: 640px) 576px, 100vw"
              className="h-auto w-full"
            />
          </a>
          <figcaption className="mt-3 text-center text-sm text-white/70">
            Select the flyer to view it in full.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
