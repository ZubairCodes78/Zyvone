'use client'
import ServicePage from '@/components/ServicePage'

export default function ContentPage() {
  return (
    <ServicePage
      title="AI Content"
      subtitle="AI CONTENT"
      description="Full content pipelines: strategy, creation, distribution — automated and on-brand. We build systems that produce content at scale."
      sections={[
        {
          title: "Content Strategy",
          content: "We develop a content strategy aligned with your business goals. We identify the topics, formats, and channels that will drive results for your specific audience."
        },
        {
          title: "AI-Powered Creation",
          content: "We use AI tools to generate high-quality content at scale — blog posts, social media, email campaigns, and more. Every piece is reviewed and refined to match your brand voice."
        },
        {
          title: "Distribution Systems",
          content: "We build automated distribution systems that publish your content across all channels — website, social media, email newsletters — without manual effort."
        },
        {
          title: "Performance Tracking",
          content: "We track content performance and continuously optimize based on data. Your content strategy evolves based on what actually works, not guesses."
        }
      ]}
      cta={{
        text: "Start your content pipeline →",
        link: "/contact"
      }}
    />
  )
}
