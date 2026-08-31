import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'SaaS MVP Development Company & Startup Software Engineering',
  description:
    'Rapid, production-ready SaaS MVP development for ambitious founders. ZYVONE builds scalable MVPs in 4-6 weeks with clean Next.js architecture and zero technical debt.',
  alternates: {
    canonical: 'https://zyvone.site/services/mvp-development',
  },
}

export default function MVPDevelopmentPage() {
  const related = projects.filter((p) =>
    ['toolmatic', 'pdfmaster', 'wearomnia'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="mvp-development"
      title="SaaS MVP Development"
      eyebrow="ENGINEERING DISCIPLINE 05"
      subtitle="Production-ready SaaS Minimum Viable Products engineered for speed to market, real user validation, and seamless venture scaling."
      overview="An MVP should not be a throwaway prototype held together with duct tape. ZYVONE builds production-grade SaaS MVPs with clean architecture, type-safe Next.js codebases, and scalable database schemas that carry you from initial launch to product-market fit without a total rewrite."
      problems={[
        {
          problem: 'Spending 6-9 months and $50k+ building an over-engineered product before testing real market demand.',
          solution: 'Focused 4-6 week sprint cycle building core value-driver features ready for immediate monetization.',
        },
        {
          problem: 'Hiring budget agencies that build messy prototypes that crash on launch day and require a complete rewrite.',
          solution: 'Clean TypeScript, Next.js App Router, and Vercel infrastructure engineered to scale from 10 to 100k users.',
        },
      ]}
      capabilities={[
        {
          title: 'Core Scope Scoping & Architecture',
          desc: 'Filtering nice-to-haves from critical value drivers to ship fast with maximum market impact.',
        },
        {
          title: 'Authentication & Tenant Management',
          desc: 'Pre-built secure auth, user profiles, team invites, and subscription tier enforcement.',
        },
        {
          title: 'Payment Gateway Integration',
          desc: 'Instant Stripe or LemonSqueezy integration for immediate customer billing on day one.',
        },
        {
          title: 'Analytics & Funnel Instrumentation',
          desc: 'Event tracking, user onboarding analytics, and conversion telemetry.',
        },
      ]}
      technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Stripe', 'Vercel']}
      relatedProjects={related}
    />
  )
}
