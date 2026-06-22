export interface Project {
  slug:        string
  id:          string
  industry:    string
  title:       string
  shortTitle:  string
  tag:         string
  result:      string
  resultLabel: string
  link:        string | null
  overview:    string
  problem:     string
  approach:    string
  execution:   string[]
  outcome:     string
  reflection:  string
  heroImage:   string
  gallery:     string[]
  beforeImage: string | null
  afterImage:  string | null
  architecture: string | null
}

export const projects: Project[] = [
  {
    slug:        'toolmatic',
    id:          '01',
    industry:    'AI Tools Platform',
    title:       'Toolmatic — Free Online AI Tools Platform',
    shortTitle:  'Toolmatic',
    tag:         'Web Development',
    result:      'Live',
    resultLabel: 'Platform',
    link:        'https://toolmatic.site',
    overview:    'Toolmatic is a free, no-sign-up platform of AI-powered SEO tools and calculators built by ZYVONE. It was designed to demonstrate what a clean, fast, utility-focused web product looks like — and to generate organic traffic through genuinely useful tools.',
    problem:     'Most SEO tool platforms are either paywalled, slow, or bloated with unnecessary features. The market had a gap: fast, free, no-login tools that just work. We decided to build the platform we\'d want to use ourselves.',
    approach:    'We started with the tools people search for most but find annoying to use on existing platforms. Every tool had to load in under a second, work on mobile, and require zero user registration. The design had to feel like a proper product — not a side project.',
    execution: [
      'Built in Next.js 14 with App Router for maximum performance',
      'Implemented Meta Tag Generator, Word Counter, and Keyword Density Checker as the first three tools',
      'Designed a clean, consistent UI system that could scale to 50+ tools without redesign',
      'SEO-optimized each tool page individually with unique meta, schema, and content',
      'Deployed on Vercel with edge functions for sub-100ms response times globally',
    ],
    outcome:     'Toolmatic launched live and began generating organic search traffic within weeks. The platform architecture supports unlimited tool additions without rebuilding. It serves as a proof of concept for ZYVONE\'s product thinking capabilities.',
    reflection:  'This project taught us that the best products are the ones where every decision is made by the user\'s frustration, not the builder\'s preference. We removed every feature that wasn\'t necessary and the result was something people actually used.',
    heroImage:   '/projects/toolmatic-hero.jpg',
    gallery:      ['/projects/toolmatic-1.jpg', '/projects/toolmatic-2.jpg', '/projects/toolmatic-3.jpg'],
    beforeImage: null,
    afterImage:  null,
    architecture: '/projects/toolmatic-architecture.jpg',
  },
  {
    slug:        'pdfmaster',
    id:          '02',
    industry:    'PDF & Document Tools',
    title:       'PDFMaster — Document Processing Platform',
    shortTitle:  'PDFMaster',
    tag:         'Web Development',
    result:      '50+',
    resultLabel: 'Tools Built',
    link:        'https://pdfmaster.site',
    overview:    'PDFMaster is a comprehensive PDF processing platform offering merge, split, compress, and convert tools — all free, all instant, and requiring no account creation.',
    problem:     'The PDF tool market is dominated by platforms that make you sign up, wait for processing, or pay for basic features. Users just want to compress a PDF quickly — they don\'t want a subscription.',
    approach:    'Zero friction was the design principle. No sign-up form. No email confirmation. No loading screens longer than 3 seconds. Just drop your file, pick your action, download the result. The entire UX was designed around removing every possible barrier.',
    execution: [
      'Built with Next.js and integrated PDF.js and pdf-lib for client-side processing',
      'Client-side processing wherever possible — files never leave the user\'s browser for most operations',
      'Consistent tool card system that allowed rapid addition of new tools',
      'Mobile-first — most PDF tasks happen when someone receives a document on their phone',
      'SEO architecture with individual landing pages per tool type',
    ],
    outcome:     'PDFMaster launched with 50+ tools covering the most common document operations. The client-side processing approach means zero server costs for most operations and zero privacy concerns for users — a genuine differentiator.',
    reflection:  'Speed and trust are the same thing in utility software. When your tool processes instantly and doesn\'t ask for an email address, users trust it. We built trust through behavior, not words.',
    heroImage:   '/projects/pdfmaster-hero.jpg',
    gallery:      ['/projects/pdfmaster-1.jpg', '/projects/pdfmaster-2.jpg', '/projects/pdfmaster-3.jpg'],
    beforeImage: null,
    afterImage:  null,
    architecture: '/projects/pdfmaster-architecture.jpg',
  },
  {
    slug:        'cantt-dental-care',
    id:          '03',
    industry:    'Healthcare',
    title:       'Cantt Dental Care — Clinic Digital Presence',
    shortTitle:  'Cantt Dental Care',
    tag:         'Web Development',
    result:      '#1',
    resultLabel: 'Local Ranking',
    link:        'https://canttdentalcare.com',
    overview:    'Cantt Dental Care is a dental clinic in Pakistan. ZYVONE built their complete digital presence — from brand positioning to a fully optimized website with appointment flow and local SEO strategy.',
    problem:     'The clinic had no online presence. Patients were being referred by word of mouth only. In a city where people search Google before they call, invisible meant losing patients to competitors who simply had a website.',
    approach:    'We treated this like a product launch, not a website project. First: understand who the patients are and what they search for. Second: build a site that answers those searches with the right content. Third: make the appointment process feel as easy as booking an Uber.',
    execution: [
      'Designed and developed a complete Next.js website with mobile-first approach',
      'Built a services section covering all dental treatments with procedure-specific content for SEO',
      'Implemented local SEO — Google Business Profile optimization, local schema markup, NAP consistency',
      'Created a simple appointment request flow that sends directly to clinic WhatsApp',
      'Page speed optimization — 95+ PageSpeed score on mobile',
      'Set up Google Search Console and Analytics from day one with monthly reporting',
    ],
    outcome:     'Within 60 days of launch, Cantt Dental Care ranked #1 on Google for their primary local search terms. The clinic reported a significant increase in appointment requests coming through the website — patients they would never have reached through word of mouth alone.',
    reflection:  'A website for a local business is not a brochure — it is a patient acquisition system. We designed it like one, and the results reflected that thinking.',
    heroImage:   '/projects/cantt-dental-care-hero.jpg',
    gallery:      ['/projects/cantt-dental-care-1.jpg', '/projects/cantt-dental-care-2.jpg', '/projects/cantt-dental-care-3.jpg'],
    beforeImage: '/projects/cantt-dental-care-before.jpg',
    afterImage:  '/projects/cantt-dental-care-after.jpg',
    architecture: '/projects/cantt-dental-care-architecture.jpg',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
