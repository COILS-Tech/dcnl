'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import type { InstagramHighlight } from '@/types'

interface InstagramCarouselProps {
  branchName: string
  handle?: string
  highlights?: InstagramHighlight[]
}

function formatMetric(value?: number) {
  if (typeof value !== 'number') return 'Not set'
  return new Intl.NumberFormat('en', { notation: 'compact' }).format(value)
}

function sortHighlights(highlights: InstagramHighlight[]) {
  return [...highlights].sort((a, b) => {
    const views = (b.viewCount ?? 0) - (a.viewCount ?? 0)
    if (views !== 0) return views
    return (b.commentCount ?? 0) - (a.commentCount ?? 0)
  })
}

export default function InstagramCarousel({
  branchName,
  handle,
  highlights = [],
}: InstagramCarouselProps) {
  const rankedHighlights = useMemo(() => sortHighlights(highlights), [highlights])
  const [activeIndex, setActiveIndex] = useState(0)
  const active = rankedHighlights[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? rankedHighlights.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      current === rankedHighlights.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Instagram Highlights</p>
            <h2 className="section-heading">Most Engaged Moments</h2>
            <p className="mt-3 max-w-2xl text-gray-500">
              Photos and videos curated from {branchName}&apos;s Instagram, ranked by the
              view and comment counts maintained in the CMS.
            </p>
          </div>
          {handle && (
            <a
              href={`https://instagram.com/${handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center border-2 border-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-white rounded-full"
            >
              @{handle}
            </a>
          )}
        </div>

        {active ? (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative overflow-hidden bg-primary">
              <div className="relative aspect-[4/5]">
                {active.mediaType === 'video' && active.videoUrl ? (
                  <video
                    src={active.videoUrl}
                    poster={
                      active.thumbnail
                        ? urlFor(active.thumbnail).width(900).height(1125).url()
                        : undefined
                    }
                    controls
                    className="h-full w-full object-cover"
                  />
                ) : active.thumbnail ? (
                  <Image
                    src={urlFor(active.thumbnail).width(900).height(1125).url()}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-hero-gradient px-8 text-center text-white/70">
                    Add a thumbnail in Sanity for this Instagram post.
                  </div>
                )}
              </div>

              <div className="absolute left-4 top-4 bg-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary">
                {active.mediaType === 'video' ? 'Video' : 'Image'}
              </div>

              {rankedHighlights.length > 1 && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Show previous Instagram highlight"
                    className="flex h-10 w-10 items-center justify-center bg-white/90 text-lg font-bold text-primary transition-all hover:bg-accent rounded-full"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Show next Instagram highlight"
                    className="flex h-10 w-10 items-center justify-center bg-white/90 text-lg font-bold text-primary transition-all hover:bg-accent rounded-full"
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Rank #{activeIndex + 1}
              </p>
              <h3 className="mt-2 text-3xl font-bold text-primary">{active.title}</h3>
              {active.caption && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                  {active.caption}
                </p>
              )}

              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-l-4 border-accent bg-gray-50 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Views
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-primary">
                    {formatMetric(active.viewCount)}
                  </dd>
                </div>
                <div className="border-l-4 border-accent bg-gray-50 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Comments
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-primary">
                    {formatMetric(active.commentCount)}
                  </dd>
                </div>
              </dl>

              <a
                href={active.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-primary-light rounded-full"
              >
                Open on Instagram
              </a>

              {rankedHighlights.length > 1 && (
                <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {rankedHighlights.map((highlight, index) => (
                    <button
                      key={highlight._key ?? highlight.instagramUrl}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show Instagram highlight ${index + 1}`}
                      className={`relative aspect-square overflow-hidden border-2 ${
                        index === activeIndex ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      {highlight.thumbnail ? (
                        <Image
                          src={urlFor(highlight.thumbnail).width(220).height(220).url()}
                          alt={highlight.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full items-center justify-center bg-primary text-xs font-semibold text-white/60">
                          #{index + 1}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-bold text-primary">Curate top posts in Sanity</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
              Add Instagram post URLs, thumbnails, views, and comments under this branch.
              The carousel will automatically rank the highest-performing photos and videos.
            </p>
            {handle && (
              <a
                href={`https://instagram.com/${handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wide text-accent hover:underline"
              >
                View @{handle}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
