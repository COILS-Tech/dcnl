import type { Sermon } from '@/types'

interface SermonCardProps {
  sermon: Sermon
}

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1)
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname === '/watch') return u.searchParams.get('v')
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/embed/')[1]
    }
    return null
  } catch {
    return null
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function SermonCard({ sermon }: SermonCardProps) {
  const videoId = sermon.youtubeUrl ? getYouTubeId(sermon.youtubeUrl) : null
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    : null
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null

  return (
    <div className="bg-white border border-gray-100 overflow-hidden">
      {/* Thumbnail / Embed */}
      {embedUrl ? (
        <div className="relative aspect-video bg-primary-dark">
          <iframe
            src={embedUrl}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : thumbnailUrl ? (
        <div
          className="aspect-video bg-cover bg-center bg-primary-dark"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
      ) : (
        <div className="aspect-video bg-primary-light flex items-center justify-center">
          <span className="text-accent text-4xl">▶</span>
        </div>
      )}

      <div className="p-5">
        {sermon.series && (
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">
            {sermon.series}
          </p>
        )}
        <h3 className="font-bold text-primary text-base leading-snug">{sermon.title}</h3>
        <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
          {sermon.speaker && <span>{sermon.speaker}</span>}
          {sermon.speaker && sermon.date && <span>·</span>}
          {sermon.date && <span>{formatDate(sermon.date)}</span>}
        </div>
        {sermon.description && (
          <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
            {sermon.description}
          </p>
        )}
        {sermon.youtubeUrl && (
          <a
            href={sermon.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-accent text-sm font-medium hover:underline"
          >
            Watch on YouTube →
          </a>
        )}
      </div>
    </div>
  )
}
