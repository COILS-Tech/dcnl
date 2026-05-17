import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { sanityFetch } from '@/sanity/lib/client'
import { allBranchesQuery } from '@/sanity/lib/queries'
import { FALLBACK_BRANCHES } from '@/data/fallbackBranches'
import type { BranchSummary } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dominion City Netherlands',
    template: '%s | Dominion City Netherlands',
  },
  description:
    'Dominion City raises leaders who transform society helping people discover, develop and deploy their God given potentials.',
  metadataBase: new URL('https://dominioncitynl.org'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'Dominion City Netherlands',
    locale: 'en_NL',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const branches: BranchSummary[] = (await sanityFetch<BranchSummary[]>(allBranchesQuery)) ?? []

  const displayBranches = branches.length > 0 ? branches : FALLBACK_BRANCHES

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar branches={displayBranches} />
        <main className="pt-16">{children}</main>
        <Footer branches={displayBranches} />
      </body>
    </html>
  )
}
