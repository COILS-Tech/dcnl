'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { BranchSummary } from '@/types'

interface NavbarProps {
  branches: BranchSummary[]
}

export default function Navbar({ branches }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-white/80 hover:text-accent px-4 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {branches.map((branch) => (
              <Link
                key={branch._id}
                href={`/${branch.slug.current}`}
                className="text-white/80 hover:text-accent px-4 py-2 text-sm font-medium transition-colors"
              >
                {branch.name}
              </Link>
            ))}
            <a
              href="https://dominioncity.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 border-2 border-accent text-accent hover:bg-accent hover:text-primary px-6 py-2 text-sm font-bold transition-all rounded-full uppercase tracking-wide"
            >
              DC Global
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-light border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-accent py-2 text-sm font-medium"
            >
              Home
            </Link>
            {branches.map((branch) => (
              <Link
                key={branch._id}
                href={`/${branch.slug.current}`}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-accent py-2 text-sm font-medium"
              >
                {branch.name}
              </Link>
            ))}
            <a
              href="https://dominioncity.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-accent py-2 text-sm font-medium"
            >
              DC Global ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
