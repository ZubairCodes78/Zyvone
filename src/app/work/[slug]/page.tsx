import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProject, projects } from '@/lib/projects'
import WorkPage from '../page'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }

  const pageTitle = project.seoTitle || `${project.name || project.shortTitle} — Case Study`
  const pageDescription = project.seoDescription || project.overview

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: `https://zyvone.site/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ZYVONE Case Study`,
      description: pageDescription,
      url: `https://zyvone.site/work/${project.slug}`,
      siteName: 'ZYVONE',
      images: [
        {
          url: `https://zyvone.site${project.heroImage}`,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectModalRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  // Directly renders the Work page grid with the modal open over it
  return <WorkPage />
}
