import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Custom Software Development Company & Software House',
  description:
    'ZYVONE designs and builds custom software systems, enterprise web applications, data pipelines, and internal tools for growth-focused businesses.',
  alternates: {
    canonical: 'https://zyvone.site/services/custom-software',
  },
}

export default function CustomSoftwarePage() {
  const related = projects.filter((p) =>
    ['al-raheem-engineering', 'pdfmaster', 'toolmatic'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="custom-software"
      title="Custom Software Development"
      eyebrow="ENGINEERING DISCIPLINE 06"
      subtitle="Bespoke software architecture, industrial portals, custom web applications, and enterprise data infrastructure."
      overview="Off-the-shelf software forces your business to adapt to someone else's workflow constraints. ZYVONE engineers custom software tailored precisely to your operational mechanics, business rules, and security requirements."
      problems={[
        {
          problem: 'SaaS subscription sprawl where your company pays monthly fees for 10+ disconnected tools that fail to talk to each other.',
          solution: 'Unified custom software system combining internal workflows, data storage, and external integrations into one platform.',
        },
        {
          problem: 'Legacy desktop software that binds your team to physical office workstations.',
          solution: 'Cloud-native web software accessible securely anywhere with real-time sync and mobile responsiveness.',
        },
      ]}
      capabilities={[
        {
          title: 'Enterprise Web Applications',
          desc: 'Scalable cloud applications built with Next.js, Node.js, and enterprise-grade relational databases.',
        },
        {
          title: 'Custom Data Pipelines',
          desc: 'Real-time ETL data transformation, API bridges, and automated database sync.',
        },
        {
          title: 'Industrial & B2B Portals',
          desc: 'Technical machinery catalogs, RFQ pipelines, and procurement management software.',
        },
        {
          title: 'System Security & Compliance',
          desc: 'Role-based access control, data encryption, audit logging, and automated backups.',
        },
      ]}
      technologies={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Vercel', 'AWS']}
      relatedProjects={related}
    />
  )
}
