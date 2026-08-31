import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { articles, getArticle, getRelatedArticles } from '@/lib/articles'
import ArticleReadingClient from './ArticleReadingClient'

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) return { title: 'Article Not Found' }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://zyvone.site/journal/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — ZYVONE Journal`,
      description: article.excerpt,
      type: 'article',
      url: `https://zyvone.site/journal/${article.slug}`,
      publishedTime: article.dateISO,
      images: [
        {
          url: `https://zyvone.site${article.heroImage}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  const related = getRelatedArticles(slug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `https://zyvone.site${article.heroImage}`,
    datePublished: article.dateISO,
    author: {
      '@type': 'Person',
      name: 'Muhammad Zubair',
      jobTitle: 'Founder, ZYVONE',
      sameAs: 'https://www.linkedin.com/in/zubair-zyvone/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZYVONE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zyvone.site/favicon.png',
      },
    },
  }

  return (
    <div className="pt-[140px] md:pt-[180px] pb-24 md:pb-36 px-6 md:px-12 lg:px-16 max-w-[var(--max-w-content)] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleReadingClient article={article} related={related} />
    </div>
  )
}
