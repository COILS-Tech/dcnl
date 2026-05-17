import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { BranchEvent } from '@/types'

interface EventCardProps {
  event: BranchEvent
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-NL', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatTime(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleTimeString('en-NL', { hour: '2-digit', minute: '2-digit' })
}

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date)
  const isPast = date < new Date()

  return (
    <div className={`bg-white border border-gray-100 overflow-hidden flex flex-col ${isPast ? 'opacity-70' : ''}`}>
      {event.image && (
        <div className="relative h-44 bg-primary-light">
          <Image
            src={urlFor(event.image).width(600).height(350).url()}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Date badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {formatDate(event.date)}
          </div>
          {isPast && (
            <span className="text-xs text-gray-400">Past event</span>
          )}
        </div>

        <h3 className="font-bold text-primary text-lg leading-snug">{event.title}</h3>

        {event.location && (
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
            <span>📍</span>
            {event.location}
          </p>
        )}

        {event.description && (
          <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3 flex-1">
            {event.description}
          </p>
        )}

        {event.registrationUrl && !isPast && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-accent text-sm font-semibold hover:underline"
          >
            Register / More Info →
          </a>
        )}
      </div>
    </div>
  )
}
