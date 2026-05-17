import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImage } from '@/types'
import HeroCarousel from './HeroCarousel'

interface HeroBannerProps {
  title: string
  subtitle?: string
  image?: SanityImage
  images?: string[]
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  size?: 'full' | 'medium'
  eyebrow?: string
}

export default function HeroBanner({
  title,
  subtitle,
  image,
  images,
  cta,
  secondaryCta,
  size = 'full',
  eyebrow,
}: HeroBannerProps) {
  const heightClass = size === 'full' ? 'min-h-[90vh]' : 'min-h-[55vh]'

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      {images && images.length > 0 ? (
        <HeroCarousel images={images} />
      ) : image ? (
        <>
          <Image
            src={urlFor(image).width(1600).height(900).url()}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" />
      )}

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 lowercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {cta && (
              <Link
                href={cta.href}
                className="btn-primary"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn-outline"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
