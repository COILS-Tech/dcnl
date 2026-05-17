'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BranchPhotoCarouselProps {
  branchName: string
  photos: {
    src: string
    alt: string
  }[]
}

export default function BranchPhotoCarousel({ branchName, photos }: BranchPhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!photos || photos.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? photos.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === photos.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-label">Our Community</p>
          <h2 className="section-heading">Branch Life</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Glimpses from our worship services, gatherings, and community moments at {branchName}.
          </p>
        </div>

        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-primary">
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              className="object-cover"
              priority={activeIndex === 0}
            />
            
            {/* Overlay gradient for better button visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30" />

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 transition-all hover:scale-110 rounded-full shadow-lg"
                  aria-label="Previous photo"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 transition-all hover:scale-110 rounded-full shadow-lg"
                  aria-label="Next photo"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium rounded-full">
              {activeIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {photos.length > 1 && (
            <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-video overflow-hidden transition-all ${
                    index === activeIndex
                      ? 'ring-4 ring-accent scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
