import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { BranchSummary } from '@/types'

interface BranchCardProps {
  branch: BranchSummary
}

export default function BranchCard({ branch }: BranchCardProps) {
  const href = `/${branch.slug.current}`
  const primaryService = branch.serviceTimes?.[0]
  const firstDetail = branch.importantDetails?.[0]

  return (
    <Link href={href} className="group block">
      <article className="h-full overflow-hidden bg-white rounded-2xl shadow-lg transition-all group-hover:-translate-y-2 group-hover:shadow-2xl">
        <div className="relative overflow-hidden bg-primary aspect-[4/3]">
          {branch.heroImage ? (
            <>
              <Image
                src={urlFor(branch.heroImage).width(700).height(525).url()}
                alt={branch.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-hero-gradient" />
          )}

          <div className="absolute left-6 top-6 bg-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary">
            {branch.name}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-3xl font-black text-primary lowercase">{branch.name}</h3>
          {branch.tagline && (
            <p className="mt-2 text-gray-600 font-medium">{branch.tagline}</p>
          )}
          {branch.summary && (
            <p className="mt-4 text-gray-500 leading-relaxed line-clamp-3">
              {branch.summary}
            </p>
          )}

          <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
            {primaryService && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Service Times
                </p>
                <p className="mt-2 font-bold text-primary text-lg">
                  {primaryService.day} · {primaryService.time}
                </p>
              </div>
            )}
            {firstDetail ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {firstDetail.label}
                </p>
                <p className="mt-1 text-gray-600">{firstDetail.value}</p>
              </div>
            ) : branch.address ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Location
                </p>
                <p className="mt-1 whitespace-pre-line text-gray-600 line-clamp-2">
                  {branch.address}
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-wide text-accent">
            Visit branch
            <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
