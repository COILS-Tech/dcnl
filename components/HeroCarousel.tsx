'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroCarouselProps {
  images: string[]
  autoPlayInterval?: number
}

export default function HeroCarousel({ images, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  if (!images || images.length === 0) {
    return <div className="absolute inset-0 bg-hero-gradient" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Dominion City worship ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
    </div>
  )
}
