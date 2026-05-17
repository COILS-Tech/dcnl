import Link from 'next/link'
import Image from 'next/image'
import type { BranchSummary } from '@/types'

interface FooterProps {
  branches: BranchSummary[]
}

export default function Footer({ branches }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/dc-amsterdam-logo.png"
                alt="Dominion City"
                width={36}
                height={36}
                className="flex-shrink-0 bg-transparent"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-wide">DOMINION CITY</div>
                <div className="text-accent text-xs tracking-widest uppercase">Netherlands</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Contributing to spiritual, social, and personal development within the context of the
              Christian faith across the Netherlands.
            </p>
            <p className="text-xs text-white/40 mt-3">
              Stichting Dominion City International
            </p>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Our Branches
            </h3>
            <ul className="space-y-2">
              {branches.map((branch) => (
                <li key={branch._id}>
                  <Link
                    href={`/${branch.slug.current}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    Dominion City {branch.name}
                  </Link>
                  {branch.instagramHandle && (
                    <div>
                      <a
                        href={`https://instagram.com/${branch.instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white/40 hover:text-accent transition-colors"
                      >
                        @{branch.instagramHandle}
                      </a>
                    </div>
                  )}
                </li>
              ))}
              {branches.length === 0 && (
                <>
                  <li>
                    <Link href="/amsterdam" className="text-sm hover:text-accent transition-colors">
                      Dominion City Amsterdam
                    </Link>
                  </li>
                  <li>
                    <Link href="/rotterdam" className="text-sm hover:text-accent transition-colors">
                      Dominion City Rotterdam
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://dominioncity.cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  DC Global Website
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dominioncity_amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram — Amsterdam
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dominioncity_rotterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram — Rotterdam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {year} Stichting Dominion City International. All rights reserved.</p>
          <p>
            Part of{' '}
            <a
              href="https://dominioncity.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Dominion City Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
