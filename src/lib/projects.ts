export interface Project {
  slug:         string
  id:           string
  industry:     string
  title:        string
  shortTitle:   string
  tag:          string
  result:       string
  resultLabel:  string
  link:         string | null
  overview:     string
  problem:      string
  approach:     string
  execution:    string[]
  outcome:      string
  reflection:   string
  heroImage:    string
  gallery?:     string[]
  beforeImage?: string | null
  afterImage?:  string | null
  architecture?: string | null
  year?:        string
  services?:    string[]
  stack?:       string[]
}

export const projects: Project[] = [
  {
    slug:        'wearomnia',
    id:          '01',
    industry:    'Fashion & Apparel',
    title:       'WearOmnia — Modest Fashion E-Commerce Brand',
    shortTitle:  'WearOmnia',
    tag:         'Fashion E-commerce',
    result:      'Live',
    resultLabel: 'E-commerce Store',
    link:        'https://wearomnia.com/',
    overview:    'An e-commerce experience for a modern modest-fashion brand, designed around elegant product discovery, collections, shopping flows and a refined customer journey.',
    problem:     'WearOmnia began with an intimate community following on social media. As demand grew across Pakistan, managing customer inquiries, order confirmations, and collection showcases through direct messages created operational friction and lacked the elevated brand polish expected of luxury modest fashion.',
    approach:    'We designed and built a bespoke direct-to-consumer digital storefront that mirrors the poise and craftsmanship of the garments. The experience prioritizes tactile visual presentation, seamless collection browsing, friction-free guest checkout with Cash on Delivery (COD), and integrated WhatsApp customer support for rapid sizing consultations.',
    execution: [
      'Designed an editorial, high-fashion visual identity with refined typography and neutral palettes',
      'Built a frictionless shopping experience featuring instant catalog browsing and product discovery',
      'Implemented seamless guest checkout with Cash on Delivery (COD) tailored for nationwide Pakistani logistics',
      'Integrated direct WhatsApp customer support for real-time sizing assistance and order inquiries',
      'Engineered a mobile-first responsive architecture ensuring sub-second page transitions and crisp imagery',
      'Structured transparent customer policies for 7-day exchanges, shipping timelines, and order tracking',
    ],
    outcome:     'WearOmnia successfully transitioned from an Instagram-based boutique to a full-fledged independent e-commerce brand. Customers across Pakistan now experience an effortless shopping flow, from collection discovery to doorstep delivery.',
    reflection:  'In modest fashion, trust is built through elegance and clarity. When the digital storefront honors the quality of the fabric and makes purchasing frictionless, the brand naturally commands the premium respect it deserves.',
    heroImage:   '/images/wearomnia.png',
    gallery:     [],
    beforeImage: null,
    afterImage:  null,
    architecture: null,
    year:        '2025',
    services:    ['UI/UX', 'Web Development', 'E-commerce'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug:        'amin-raisat-hosiery',
    id:          '02',
    industry:    'Fashion / Hosiery',
    title:       'Amin Raisat Hosiery — Pure Cotton D2C E-Commerce Store',
    shortTitle:  'Amin Raisat Hosiery',
    tag:         'E-commerce Store',
    result:      'Live',
    resultLabel: 'D2C Platform',
    link:        'https://aminhosiery.com/',
    overview:    'A modern direct-to-customer e-commerce store for pure cotton hosiery, built around product variants, easy ordering, COD, WhatsApp support and wholesale purchasing.',
    problem:     'As an established Faisalabad manufacturer of 100% fine combed cotton vests and innerwear, Amin Raisat Hosiery relied heavily on traditional offline distribution. To capture direct-to-consumer demand across Pakistan, they needed a digital store that made sizing selection, quality comparison, and ordering effortless.',
    approach:    'We developed a high-performance e-commerce platform that highlights fabric authenticity and craftsmanship. The store provides clear quality tier comparisons (Standard vs. High Quality taped seams), bundle offers (Free Delivery on 3+ pieces), multi-variant size selection, instant WhatsApp ordering, and a dedicated wholesale quotation portal for B2B buyers.',
    execution: [
      'Built a high-performance Next.js e-commerce store with seamless dark and light mode support',
      'Architected intuitive product variant selectors for sizes, colors, and quality grades',
      'Implemented automated multi-piece bundle incentives with Cash on Delivery (COD) across Pakistan',
      'Engineered direct WhatsApp order placement for shoppers preferring conversational commerce',
      'Created a dedicated B2B wholesale portal for bulk inquiries and commercial trade quotations',
      'Optimized Core Web Vitals and image delivery for fast mobile loading across all network conditions',
    ],
    outcome:     'Amin Raisat Hosiery established a thriving nationwide D2C channel alongside their industrial trade presence. Customers throughout Pakistan can conveniently order genuine combed cotton innerwear directly from the manufacturer with complete confidence.',
    reflection:  'For heritage manufacturers going D2C, clarity beats complexity every time. Transparent quality comparisons, straightforward sizing, and localized payment options like COD make direct ordering a natural choice for shoppers.',
    heroImage:   '/images/amin-raisat-hosiery.png',
    gallery:     [],
    beforeImage: null,
    afterImage:  null,
    architecture: null,
    year:        '2025',
    services:    ['UI/UX', 'Web Development', 'E-commerce'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug:        'toolmatic',
    id:          '03',
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
    heroImage:   '/images/toolmatic.png',
    gallery:      ['/projects/toolmatic-1.jpg', '/projects/toolmatic-2.jpg', '/projects/toolmatic-3.jpg'],
    beforeImage: null,
    afterImage:  null,
    architecture: '/projects/toolmatic-architecture.jpg',
    year:        '2024',
    services:    ['UI/UX', 'Frontend', 'Backend'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug:        'pdfmaster',
    id:          '04',
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
    heroImage:   '/images/pdfmaster.png',
    gallery:      ['/projects/pdfmaster-1.jpg', '/projects/pdfmaster-2.jpg', '/projects/pdfmaster-3.jpg'],
    beforeImage: null,
    afterImage:  null,
    architecture: '/projects/pdfmaster-architecture.jpg',
    year:        '2024',
    services:    ['UI/UX', 'Frontend', 'Backend'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug:        'cantt-dental-care',
    id:          '05',
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
    heroImage:   '/images/cantt-dental-care.png',
    gallery:      ['/projects/cantt-dental-care-1.jpg', '/projects/cantt-dental-care-2.jpg', '/projects/cantt-dental-care-3.jpg'],
    beforeImage: '/projects/cantt-dental-care-before.jpg',
    afterImage:  '/projects/cantt-dental-care-after.jpg',
    architecture: '/projects/cantt-dental-care-architecture.jpg',
    year:        '2024',
    services:    ['UI/UX', 'Frontend', 'Local SEO'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug:        'al-raheem-engineering',
    id:          '06',
    industry:    'Manufacturing & Machinery',
    title:       'Al Raheem Engineering — Packing Machine Manufacturer',
    shortTitle:  'Al Raheem Engineering',
    tag:         'Web Development',
    result:      'Live',
    resultLabel: 'Website',
    link:        'https://alraheemengineering.com',
    overview:    'Al Raheem Engineering is a leading packing machine manufacturer specializing in industrial packaging solutions. ZYVONE built their professional corporate website showcasing their machinery portfolio, technical specifications, and manufacturing capabilities.',
    problem:     'The company lacked a modern digital presence to showcase their packing machine products and manufacturing capabilities. In the industrial machinery sector, credibility is established through visible technical expertise — and without a professional website, they were missing opportunities to attract B2B clients.',
    approach:    'We positioned the website as a comprehensive product catalog and technical showcase. The focus was on displaying machine specifications with detailed technical data, highlighting manufacturing capabilities, and making it easy for industrial clients to request quotes and technical consultations.',
    execution: [
      'Designed a professional corporate website with manufacturing-focused aesthetics',
      'Built a comprehensive product catalog showcasing all packing machine models',
      'Created detailed product pages with technical specifications and features',
      'Implemented inquiry forms for machine quotes and technical consultations',
      'Mobile-responsive design for clients browsing in industrial environments',
      'SEO optimization for packaging machinery and manufacturing industry keywords',
    ],
    outcome:     'The website launched successfully, providing Al Raheem Engineering with a professional digital presence. The product catalog serves as a powerful sales tool, helping the company attract new industrial clients and showcase their manufacturing expertise to potential partners.',
    reflection:  'For manufacturing companies, the website must serve as both a product catalog and a technical resource. Every machine specification, feature detail, and capability description helps industrial buyers make informed decisions. The digital presence must reflect the precision and reliability of their manufacturing equipment.',
    heroImage:   '/images/al-raheem-engineering.png',
    gallery:      ['/projects/al-raheem-engineering-1.jpg', '/projects/al-raheem-engineering-2.jpg', '/projects/al-raheem-engineering-3.jpg'],
    beforeImage: null,
    afterImage:  null,
    architecture: '/projects/al-raheem-engineering-architecture.jpg',
    year:        '2024',
    services:    ['UI/UX', 'Web Development', 'B2B Catalog'],
    stack:       ['Next.js', 'TypeScript', 'Tailwind'],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
