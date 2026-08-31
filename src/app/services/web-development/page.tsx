import React from 'react'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Web Development Agency & Custom Web Applications',
  description:
    'ZYVONE engineers high-performance web applications, Next.js digital platforms, and custom web systems. Sub-100ms speeds, SEO supremacy, and clean code.',
  alternates: {
    canonical: 'https://zyvone.site/services/web-development',
  },
}

export default function WebDevelopmentPage() {
  const related = projects.filter((p) =>
    ['wearomnia', 'amin-raisat-hosiery', 'cantt-dental-care', 'toolmatic'].includes(p.slug)
  )

  return (
    <ServiceDetailView
      slug="web-development"
      title="Web Development"
      eyebrow="ENGINEERING DISCIPLINE 01"
      subtitle="Bespoke full-stack web applications, Next.js platforms, and high-converting digital flagships built for speed, security, and compound growth."
      overview="We build custom web infrastructure using Next.js, React, and TypeScript. No legacy templates or slow page builders. Every platform is architected for sub-100ms Core Web Vitals performance, automated SEO schema, and seamless multi-device responsiveness."
      problems={[
        {
          problem: 'Bloated legacy platforms with 4+ second page load delays that bleed ad budget and destroy organic search rankings.',
          solution: 'Modern server-rendered Next.js architecture with edge caching delivering sub-100ms LCP and zero Cumulative Layout Shift.',
        },
        {
          problem: 'Inflexible templates that restrict custom features and require expensive agency retainers for minor UI changes.',
          solution: 'Bespoke component architecture engineered for long-term scalability, clean maintenance, and seamless feature additions.',
        },
      ]}
      capabilities={[
        {
          title: 'Full-Stack Next.js Platforms',
          desc: 'High-speed App Router architecture with server components, streaming SSR, and edge execution.',
        },
        {
          title: 'Performance & Technical SEO',
          desc: 'Automated JSON-LD schemas, instant Core Web Vitals, dynamic OpenGraph generation, and clean indexability.',
        },
        {
          title: 'Custom UI/UX Design Systems',
          desc: 'Editorial visual hierarchy, glassmorphism, micro-animations, and fluid responsive design.',
        },
        {
          title: 'API & Microservice Integration',
          desc: 'Type-safe REST and GraphQL integrations, webhook pipelines, and third-party data synchronization.',
        },
      ]}
      technologies={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Node.js', 'PostgreSQL', 'Schema.org']}
      relatedProjects={related}
    />
  )
}
