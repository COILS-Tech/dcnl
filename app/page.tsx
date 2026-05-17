import Link from 'next/link'
import HeroBanner from '@/components/HeroBanner'
import BranchCard from '@/components/BranchCard'
import { sanityFetch } from '@/sanity/lib/client'
import { allBranchesQuery } from '@/sanity/lib/queries'
import { FALLBACK_BRANCHES } from '@/data/fallbackBranches'
import type { BranchSummary } from '@/types'

export const revalidate = 60

export default async function Home() {
  const branches: BranchSummary[] = (await sanityFetch<BranchSummary[]>(allBranchesQuery)) ?? []

  const featuredBranches = branches.filter((branch) => branch.featuredOnHome !== false)
  const displayBranches = featuredBranches.length > 0 ? featuredBranches : FALLBACK_BRANCHES

  return (
    <>
      {/* Hero */}
      <HeroBanner
        eyebrow="Netherlands"
        title="Dominion City"
        subtitle="Dominion City raises leaders who transform society helping people discover, develop and deploy their God given potentials. We are located in Amsterdam and Rotterdam and growing across other cities in the Netherlands and Europe."
        cta={{ label: 'Amsterdam', href: '/amsterdam' }}
        secondaryCta={{ label: 'Rotterdam', href: '/rotterdam' }}
        size="full"
        images={[
          '/hero/worship-1.jpg',
          '/hero/worship-2.jpg',
          '/hero/worship-3.jpg',
          '/hero/community.jpg',
        ]}
      />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary lowercase leading-tight">
              Ben je op zoek naar een kerk in Nederland?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mt-6">
              Dominion City Netherlands carries the global Dominion City mandate locally:
              raising leaders who are deeply rooted in Christ and equipped to influence their
              world with truth, excellence, and compassion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/amsterdam" className="btn-primary">
                Over Ons
              </Link>
              <Link href="/amsterdam" className="btn-outline">
                Bezoek Ons
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Active Branches', value: `${displayBranches.length}` },
              { label: 'Cities Served', value: '2' },
              { label: 'Mandate', value: 'Leaders' },
              { label: 'Global Family', value: 'DC' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 p-8 border-l-4 border-accent rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-2 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
              Our Ministry
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white lowercase">onze visie</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Worship Services',
                description:
                  'Gather weekly for worship, the Word, prayer, and Spirit-led ministry.',
              },
              {
                title: 'Discipleship',
                description:
                  'Develop spiritual depth through teaching, mentoring, and practical formation.',
              },
              {
                title: 'Pastoral Care',
                description:
                  'Find guidance, encouragement, and care as you grow in faith and community.',
              },
              {
                title: 'Training & Events',
                description:
                  'Join services, trainings, and conferences that equip people for purpose.',
              },
              {
                title: 'Prayer',
                description:
                  'Build a life of prayer that shapes families, decisions, and city impact.',
              },
              {
                title: 'Leadership Development',
                description:
                  'Be equipped and released to lead faithfully in church, work, and society.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-primary-light p-8 rounded-xl border-t-4 border-accent hover:transform hover:scale-105 transition-all">
                <h3 className="text-white font-black text-xl mb-3 lowercase">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label">Our Branches</p>
            <h2 className="section-heading">bezoek ons</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              Each branch is a local expression of the same mandate: discover purpose, grow in
              Christ, build community, and serve the city.
            </p>
          </div>

          <div
            className={`grid gap-8 ${
              displayBranches.length === 1
                ? 'max-w-md mx-auto'
                : displayBranches.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {displayBranches.map((branch) => (
              <BranchCard key={branch._id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 lowercase">vind je volgende stap</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are new to faith, new to the Netherlands, or ready to grow in purpose,
            there is a branch community ready to walk with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/amsterdam"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Amsterdam
            </Link>
            <Link
              href="/rotterdam"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Rotterdam
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
