import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal — Engineering Insights, SaaS Architecture & AI Systems | ZYVONE',
  description: 'Technical breakdowns, architectural deep dives, SaaS scoping guides, and systems engineering essays from the engineers at ZYVONE.',
  alternates: {
    canonical: 'https://zyvone.site/journal',
  },
  openGraph: {
    title: 'Journal — Engineering Insights, SaaS Architecture & AI Systems | ZYVONE',
    description: 'Technical breakdowns, architectural deep dives, SaaS scoping guides, and systems engineering essays from the engineers at ZYVONE.',
    url: 'https://zyvone.site/journal',
    siteName: 'ZYVONE',
    images: [
      {
        url: 'https://zyvone.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZYVONE Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journal — Engineering Insights, SaaS Architecture & AI Systems | ZYVONE',
    description: 'Technical breakdowns, architectural deep dives, SaaS scoping guides, and systems engineering essays from the engineers at ZYVONE.',
    images: ['https://zyvone.site/og-image.png'],
  },
}

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
