import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { Leader } from '@/types'

interface LeaderCardProps {
  leader: Leader
}

export default function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full bg-primary-light">
        {leader.photo ? (
          <Image
            src={urlFor(leader.photo).width(256).height(256).fit('crop').url()}
            alt={leader.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-accent text-3xl font-bold">
            {leader.name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="font-bold text-primary text-lg">{leader.name}</h3>
      {leader.role && (
        <p className="text-accent text-sm font-medium uppercase tracking-wide mt-0.5">
          {leader.role}
        </p>
      )}
      {leader.bio && (
        <p className="text-gray-600 text-sm mt-3 max-w-xs leading-relaxed line-clamp-4">
          {leader.bio}
        </p>
      )}
    </div>
  )
}
