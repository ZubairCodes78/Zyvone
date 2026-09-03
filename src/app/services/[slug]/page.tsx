import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ServiceDetailView } from '@/components/services/ServiceDetailView'
import { getAllServices, getServiceBySlug } from '@/lib/services'
import { projects } from '@/lib/projects'

export async function generateStaticParams() {
  const allServices = getAllServices()
  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://zyvone.site/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ZYVONE`,
      description: service.seoDescription,
      url: `https://zyvone.site/services/${service.slug}`,
      siteName: 'ZYVONE',
    },
  }
}

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    notFound()
  }

  const related = projects.filter((p) => service.relatedProjectSlugs.includes(p.slug))

  return (
    <ServiceDetailView
      slug={service.slug}
      title={service.title}
      eyebrow={service.eyebrow}
      primaryKeyword={service.primaryKeyword}
      subtitle={service.subtitle}
      overview={service.overview}
      whatWeBuild={service.whatWeBuild}
      problems={service.problems}
      capabilities={service.capabilities}
      approach={service.approach}
      technologies={service.technologies}
      relatedProjects={related}
      faqs={service.faqs}
    />
  )
}
