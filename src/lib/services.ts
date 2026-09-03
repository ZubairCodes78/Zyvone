export type ServicePillar = 'BUILD' | 'INTELLIGENCE' | 'ENGINEERING' | 'PRODUCT'

export interface ServiceProblem {
  problem: string
  solution: string
}

export interface ServiceCapability {
  title: string
  desc: string
}

export interface ServiceApproachStep {
  step: string
  title: string
  desc: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceItem {
  slug: string
  disciplineNumber: string
  pillar: ServicePillar
  title: string
  eyebrow: string
  primaryKeyword: string
  secondaryKeywords: string[]
  subtitle: string
  overview: string
  whatWeBuild: string[]
  problems: ServiceProblem[]
  capabilities: ServiceCapability[]
  approach: ServiceApproachStep[]
  technologies: string[]
  relatedProjectSlugs: string[]
  faqs: ServiceFAQ[]
  seoTitle: string
  seoDescription: string
}

export const standardApproach: ServiceApproachStep[] = [
  {
    step: '01',
    title: 'Discovery & System Scoping',
    desc: 'We map operational workflows, user journeys, data entities, and technical boundaries to eliminate ambiguity before writing code.',
  },
  {
    step: '02',
    title: 'Product Architecture & Data Modeling',
    desc: 'Database schemas, edge caching strategies, API contracts, and security boundaries are locked into a definitive technical blueprint.',
  },
  {
    step: '03',
    title: 'UI/UX & Component Design System',
    desc: 'High-fidelity Figma wireframes, interactive design tokens, and fluid component hierarchies built for immediate engineering translation.',
  },
  {
    step: '04',
    title: 'Full-Stack Implementation',
    desc: 'Clean, type-safe development in Next.js, React, Node.js, Python, or Flutter with strict linting, zero template bloat, and modular code.',
  },
  {
    step: '05',
    title: 'Automated Testing & Security Hardening',
    desc: 'Rigorous unit testing, integration tests, end-to-end user flows, OWASP security audits, and sub-100ms Core Web Vitals profiling.',
  },
  {
    step: '06',
    title: 'CI/CD Pipeline & Production Deployment',
    desc: 'Automated staging environments, Vercel/AWS edge deployment, DNS configuration, and zero-downtime database migrations.',
  },
  {
    step: '07',
    title: 'Telemetry & Continuous Optimization',
    desc: 'Real-time telemetry, error monitoring via Sentry, performance indexing, and proactive architectural scaling as traffic compounds.',
  },
]

export const services: ServiceItem[] = [
  {
    slug: 'web-development',
    disciplineNumber: '01',
    pillar: 'BUILD',
    title: 'Web Development',
    eyebrow: 'BUILD / DISCIPLINE 01',
    primaryKeyword: 'web development company',
    secondaryKeywords: [
      'web development services',
      'custom web development',
      'website development company',
      'custom website development',
      'business website development',
    ],
    subtitle:
      'Custom full-stack web platforms, Next.js applications, and high-performance digital flagships engineered for speed, security, and compound business growth.',
    overview:
      'ZYVONE engineers custom web applications and high-speed digital flagships using Next.js, React, and TypeScript. We reject fragile low-code page builders and generic templates in favor of bespoke component architectures, sub-100ms Core Web Vitals, automated SEO schema, and seamless multi-device responsiveness.',
    whatWeBuild: [
      'Bespoke Next.js & React business web applications',
      'High-performance commercial digital flagships & storefronts',
      'Headless CMS architectures (Sanity, Strapi, Payload)',
      'High-conversion B2B lead generation & quote portals',
      'Interactive customer portals with secure authentication',
    ],
    problems: [
      {
        problem:
          'Bloated legacy websites with 4+ second page load delays that destroy conversion rates and waste advertising spend.',
        solution:
          'Modern server-rendered Next.js architecture with edge caching delivering sub-100ms Largest Contentful Paint (LCP) and 98+ PageSpeed scores.',
      },
      {
        problem:
          'Rigid templates and drag-and-drop builders that break under traffic spikes and lock businesses into expensive maintenance retainers.',
        solution:
          'Bespoke, type-safe codebases built on scalable cloud primitives that businesses own completely with zero recurring platform lock-in.',
      },
      {
        problem:
          'Poor technical SEO fundamentals, missing structured data, and broken indexation pipelines that leave companies invisible on Google.',
        solution:
          'Automated JSON-LD schemas, dynamic XML sitemaps, semantic HTML5 structure, and edge-rendered canonical routes built directly into every build.',
      },
    ],
    capabilities: [
      {
        title: 'Full-Stack Next.js App Router',
        desc: 'Server components, streaming SSR, parallel routes, and edge execution for instant page transitions.',
      },
      {
        title: 'Technical SEO & Rich Snippets',
        desc: 'Automated JSON-LD schemas, instant Core Web Vitals, dynamic OpenGraph generation, and clean crawl hierarchies.',
      },
      {
        title: 'Type-Safe Architecture',
        desc: 'TypeScript across front and back ends ensuring compile-time error detection and bulletproof maintenance.',
      },
      {
        title: 'API & Webhook Integrations',
        desc: 'Seamless integration with Stripe, WhatsApp Business, CRMs, logistics APIs, and transactional mail services.',
      },
      {
        title: 'Performance Budgeting',
        desc: 'Zero unoptimized bundles, modern AVIF/WebP image pipelines, and edge asset distribution via Vercel Edge.',
      },
      {
        title: 'Enterprise Security Hardening',
        desc: 'Strict Content Security Policies (CSP), sanitization pipelines, HTTPS/TLS 1.3, and OWASP compliance.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Node.js', 'PostgreSQL', 'Schema.org'],
    relatedProjectSlugs: ['wearomnia', 'amin-raisat-hosiery', 'cantt-dental-care', 'toolmatic'],
    faqs: [
      {
        question: 'Why does ZYVONE build with Next.js instead of WordPress or Webflow?',
        answer:
          'Next.js provides complete architectural freedom, enterprise-grade security, sub-100ms load times, and infinite scalability without plugin vulnerability risks or platform fees. You own 100% of the source code and IP.',
      },
      {
        question: 'How long does a typical custom web development project take?',
        answer:
          'Most custom web platforms take between 3 to 6 weeks from technical scoping to production launch, depending on integrations, custom data models, and interactive features.',
      },
      {
        question: 'Do you provide post-launch maintenance and technical support?',
        answer:
          'Yes. Every project includes 30 days of complimentary post-launch warranty support, after which we offer dedicated technical retainer agreements covering feature enhancements, security audits, and continuous optimization.',
      },
      {
        question: 'Who owns the intellectual property and codebase once built?',
        answer:
          'You retain 100% full ownership of all code, design assets, database schemas, and intellectual property upon project completion. There are zero licensing fees or platform lock-ins.',
      },
    ],
    seoTitle: 'Web Development Company | Custom Web Platforms | ZYVONE',
    seoDescription:
      'ZYVONE is a high-performance web development company in Lahore building custom Next.js platforms, digital flagships, and web systems engineered for sub-100ms speeds and technical SEO supremacy.',
  },
  {
    slug: 'web-application-development',
    disciplineNumber: '02',
    pillar: 'BUILD',
    title: 'Web Application Development',
    eyebrow: 'BUILD / DISCIPLINE 02',
    primaryKeyword: 'web application development company',
    secondaryKeywords: [
      'web application development',
      'web app development company',
      'custom web application development',
      'business web app development',
      'enterprise web application development',
    ],
    subtitle:
      'Complex, scalable web applications with rich interactive frontends, robust cloud architectures, and deterministic state management.',
    overview:
      'We engineer production web applications designed to handle high transaction volumes, complex state logic, and mission-critical workflows. From client-side computational tools to cloud-native platforms, ZYVONE builds secure, resilient, and lightning-fast web applications.',
    whatWeBuild: [
      'Interactive cloud web applications & workflow portals',
      'Client-side computational engines & browser utility suites',
      'Complex data dashboards with real-time visualization',
      'Multi-user operational software with granular role permissions',
      'Progressive Web Applications (PWAs) with offline synchronization',
    ],
    problems: [
      {
        problem:
          'Sluggish web applications with poor state synchronization that freeze user screens during heavy computational tasks.',
        solution:
          'Architecture separating UI rendering from compute using Web Workers, WebAssembly, and optimized state stores (Zustand/Riverpod).',
      },
      {
        problem:
          'Fragile session management, security vulnerabilities, and uncontrolled cloud server resource costs.',
        solution:
          'Stateless edge architecture, robust JWT/session cookies, and client-side processing models that eliminate unnecessary cloud compute bills.',
      },
    ],
    capabilities: [
      {
        title: 'Client-Side WebAssembly & Workers',
        desc: 'Execute intensive data transformations directly in the browser memory for instant feedback and zero cloud cost.',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Granular permissions, secure tenant isolation, and session authentication built with zero vulnerabilities.',
      },
      {
        title: 'Real-Time State & Synchronization',
        desc: 'Optimistic UI updates, WebSocket communication, and resilient offline-first local storage paradigms.',
      },
      {
        title: 'Dynamic Data Visualizations',
        desc: 'High-frequency charting, custom interactive tables, and high-performance SVG/Canvas rendering.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Web Workers', 'WebAssembly', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    relatedProjectSlugs: ['toolmatic', 'pdfmaster', 'snake', 'al-raheem-engineering'],
    faqs: [
      {
        question: 'What differentiates a web application from a standard website?',
        answer:
          'A website focuses on information delivery and lead generation, while a web application functions as a software tool with dynamic state, user accounts, data manipulation, and complex operational logic.',
      },
      {
        question: 'Can your web applications operate offline or with low connectivity?',
        answer:
          'Yes. We can architect Progressive Web Apps (PWAs) using service workers, local IndexedDB caching, and background sync so users can continue work seamlessly even during network dropouts.',
      },
      {
        question: 'How do you handle data privacy in client-side web applications?',
        answer:
          'For utilities like PDFMaster, file processing executes entirely inside client browser memory using WebAssembly and Web Workers — zero user files are ever transmitted to external servers.',
      },
    ],
    seoTitle: 'Web Application Development Company | Custom Web Apps | ZYVONE',
    seoDescription:
      'ZYVONE engineers custom web applications, SaaS tools, and high-performance browser software platforms with sub-100ms response times and bulletproof security.',
  },
  {
    slug: 'mobile-app-development',
    disciplineNumber: '03',
    pillar: 'BUILD',
    title: 'Mobile App Development',
    eyebrow: 'BUILD / DISCIPLINE 03',
    primaryKeyword: 'mobile app development company',
    secondaryKeywords: [
      'mobile app development',
      'mobile application development',
      'mobile app development services',
      'custom mobile app development',
      'iOS app development',
      'Android app development',
      'Flutter app development',
    ],
    subtitle:
      'High-fidelity cross-platform mobile applications for iOS and Android built in Flutter with native performance, responsive gestures, and offline-first storage.',
    overview:
      'ZYVONE develops production-ready cross-platform mobile applications in Flutter and Dart. We build smooth, gesture-rich mobile software with native 60/120 FPS animations, camera and sensor integrations, local SQLite/SharedPreferences caching, and scalable REST API backends.',
    whatWeBuild: [
      'Cross-platform iOS and Android applications from a single clean codebase',
      'AI-assisted consumer mobile applications & personal utility tools',
      'Camera-based scanner, image processing, and color analysis apps',
      'Offline-first field operations & enterprise mobile workflows',
      'E-commerce & direct-to-consumer native shopping experiences',
    ],
    problems: [
      {
        problem:
          'Maintaining two completely separate native codebases (Swift & Kotlin) doubles development costs and creates feature divergence.',
        solution:
          'Single production Flutter codebase delivering 100% shared business logic and native 60+ FPS performance across both iOS and Android.',
      },
      {
        problem:
          'Sluggish mobile apps that crash under unstable network connections or drain user battery through poor background management.',
        solution:
          'Offline-first Riverpod state architecture with resilient local storage, intelligent background syncing, and optimized sensor utilization.',
      },
    ],
    capabilities: [
      {
        title: 'Flutter & Dart Engine',
        desc: 'Compiled native ARM code delivering smooth 60/120 FPS rendering on iOS and Android devices.',
      },
      {
        title: 'Camera & Vision Integration',
        desc: 'Real-time camera frames, color extraction, skin tone detection, and local image manipulation.',
      },
      {
        title: 'State Management with Riverpod',
        desc: 'Compile-safe, testable state management ensuring deterministic UI behaviors and zero memory leaks.',
      },
      {
        title: 'Hardware & Location Telemetry',
        desc: 'GPS geolocator services, accelerometer integration, biometric authentication, and push notifications.',
      },
    ],
    approach: standardApproach,
    technologies: ['Flutter', 'Dart', 'Flutter Riverpod', 'Material 3', 'GoRouter', 'Node.js', 'Express', 'SQLite'],
    relatedProjectSlugs: ['paletrix', 'dresiva', 'wearomnia'],
    faqs: [
      {
        question: 'Why choose Flutter for mobile application development?',
        answer:
          'Flutter compiles directly to native ARM machine code for both iOS and Android, ensuring silky 60/120 FPS performance, identical UI fidelity across devices, and cut development costs in half compared to dual native teams.',
      },
      {
        question: 'Do you help with Apple App Store and Google Play Store submissions?',
        answer:
          'Yes. We manage the entire store compliance process, including provisioning profiles, app bundle signing, privacy disclosures, screenshot assets, and store review requirements.',
      },
      {
        question: 'Can the mobile app share the same backend as our web application?',
        answer:
          'Absolutely. We design centralized, type-safe REST or GraphQL APIs that power web apps, iOS, and Android simultaneously.',
      },
    ],
    seoTitle: 'Mobile App Development Company | Flutter iOS & Android | ZYVONE',
    seoDescription:
      'ZYVONE is a premier mobile app development company building cross-platform iOS and Android apps in Flutter. 60 FPS performance, camera integrations, and offline-first architecture.',
  },
  {
    slug: 'saas-development',
    disciplineNumber: '04',
    pillar: 'BUILD',
    title: 'SaaS Development',
    eyebrow: 'BUILD / DISCIPLINE 04',
    primaryKeyword: 'SaaS development company',
    secondaryKeywords: [
      'SaaS development',
      'SaaS development services',
      'SaaS application development',
      'custom SaaS development',
      'SaaS product development',
      'multi-tenant SaaS development',
      'SaaS platform development',
    ],
    subtitle:
      'Multi-tenant cloud SaaS platforms engineered with row-level security, recurring subscription billing, sub-100ms global latency, and enterprise compliance.',
    overview:
      'We build scalable Software-as-a-Service (SaaS) products from initial data modeling to global scale. Our SaaS architectures feature strict tenant isolation, Stripe billing integration, automated usage metering, self-service onboarding, and resilient edge deployment.',
    whatWeBuild: [
      'B2B and B2C multi-tenant cloud software platforms',
      'Micro-SaaS and utility subscription software',
      'Usage-based and tiered subscription billing infrastructures',
      'Granular team workspaces with role-based member management',
      'Public developer APIs and webhook notification systems',
    ],
    problems: [
      {
        problem:
          'Cross-tenant data leakage risks and architecture that cannot scale beyond early pilot volumes without catastrophic rewrites.',
        solution:
          'PostgreSQL Row-Level Security (RLS) and schema-isolated multi-tenant architectures guaranteeing mathematically verified tenant separation.',
      },
      {
        problem:
          'Complicated subscription flows, failed webhooks, and billing edge cases that bleed revenue and frustrate paying subscribers.',
        solution:
          'Battle-tested Stripe Billing and Lemon Squeezy integration with idempotency handling, automated invoicing, and grace-period management.',
      },
    ],
    capabilities: [
      {
        title: 'Multi-Tenant Architecture',
        desc: 'PostgreSQL Row-Level Security (RLS) guaranteeing strict data isolation across enterprise customer accounts.',
      },
      {
        title: 'Automated Billing & Metering',
        desc: 'Stripe webhook pipelines, tiered plans, seat management, usage-based metering, and self-serve billing portals.',
      },
      {
        title: 'Self-Serve Onboarding Flow',
        desc: 'Zero-friction workspace creation, automated email invitations, and frictionless user activation.',
      },
      {
        title: 'Global Edge Distribution',
        desc: 'Edge database replicas and serverless functions delivering sub-100ms response times worldwide.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe API', 'Vercel Edge'],
    relatedProjectSlugs: ['toolmatic', 'pdfmaster', 'wearomnia'],
    faqs: [
      {
        question: 'How do you ensure multi-tenant data isolation in SaaS applications?',
        answer:
          'We utilize PostgreSQL Row-Level Security (RLS) combined with tenant identifier constraints at the database kernel level, ensuring no query can ever access records belonging to another tenant.',
      },
      {
        question: 'Can you integrate complex billing models like per-seat or usage-based pricing?',
        answer:
          'Yes. We have engineered custom usage-metering ingestion pipelines that report consumption to Stripe in real-time, handling tiered rates, overages, and automated invoice reconciliation.',
      },
      {
        question: 'What cloud infrastructure do you recommend for SaaS platforms?',
        answer:
          'We leverage Vercel Edge for frontend application delivery and Supabase/AWS RDS for PostgreSQL, providing enterprise uptime, automatic backups, and global connection pooling.',
      },
    ],
    seoTitle: 'SaaS Development Company | Multi-Tenant Cloud Software | ZYVONE',
    seoDescription:
      'ZYVONE is an enterprise SaaS development company engineering multi-tenant platforms, subscription architectures, and high-velocity cloud products built for compound growth.',
  },
  {
    slug: 'saas-mvp-development',
    disciplineNumber: '05',
    pillar: 'BUILD',
    title: 'SaaS MVP Development',
    eyebrow: 'BUILD / DISCIPLINE 05',
    primaryKeyword: 'SaaS MVP development company',
    secondaryKeywords: [
      'SaaS MVP development',
      'SaaS MVP development services',
      'SaaS MVP developer',
      'build SaaS MVP',
      'SaaS MVP development agency',
      'startup SaaS development',
      'SaaS product MVP',
    ],
    subtitle:
      'High-velocity SaaS MVP development designed to validate market demand, onboard pilot users, and secure investor commitments within weeks, not quarters.',
    overview:
      'We help founders and startup leaders turn validated concepts into production-grade SaaS MVPs in 3 to 5 weeks. We strip away speculative bloat and focus exclusively on the core value proposition, seamless customer onboarding, and reliable monetization infrastructure.',
    whatWeBuild: [
      'Production-ready SaaS MVPs built for real commercial transactions',
      'Early access waitlist systems with viral referral mechanics',
      'Core feature proof-of-concepts with production-grade backend',
      'Investor-ready interactive software prototypes',
      'Pilot customer onboarding and feedback telemetry pipelines',
    ],
    problems: [
      {
        problem:
          'Founders spending 6 to 9 months and $100k+ building over-engineered features before validating if paying customers actually care.',
        solution:
          'Laser-focused 4-week MVP development cycle validating the single most critical commercial hypothesis with zero architectural debt.',
      },
      {
        problem:
          'Low-code MVP prototypes that must be completely thrown away and rewritten once the startup secures funding or scales.',
        solution:
          'Production-grade TypeScript, Next.js, and PostgreSQL foundation designed to evolve directly into your long-term scale codebase.',
      },
    ],
    capabilities: [
      {
        title: 'Ruthless Scope Definition',
        desc: 'Identifying the exact core functional loop that unlocks immediate user willingness to pay.',
      },
      {
        title: 'Turnkey Authentication & Billing',
        desc: 'Instant Google/Email auth, passwordless magic links, and turnkey Stripe checkout from day one.',
      },
      {
        title: 'Production-Grade Stack',
        desc: 'Built in Next.js and TypeScript so you never have to scrap the MVP when scaling post-launch.',
      },
      {
        title: 'Conversion-Focused Onboarding',
        desc: 'Sub-30-second time to initial value (Aha! moment) for inbound trial users.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Stripe', 'Vercel'],
    relatedProjectSlugs: ['toolmatic', 'pdfmaster', 'paletrix'],
    faqs: [
      {
        question: 'How quickly can ZYVONE launch a functioning SaaS MVP?',
        answer:
          'Our standard SaaS MVP engagement is scoped to ship in 3 to 5 weeks, delivering a live, production-deployed platform with user auth, core utility, and payment processing.',
      },
      {
        question: 'Will we have to throw away the MVP codebase when we scale?',
        answer:
          'Never. Unlike low-code prototypes, we build in production TypeScript, Next.js, and PostgreSQL. The codebase is clean, typed, and structured to scale smoothly to tens of thousands of users.',
      },
      {
        question: 'How do we decide what features make the MVP cut?',
        answer:
          'In our initial discovery sprint, we map out every idea and ruthlessly cut anything that does not directly contribute to the core value exchange and initial transaction.',
      },
    ],
    seoTitle: 'SaaS MVP Development Company | Build Fast, Scale Right | ZYVONE',
    seoDescription:
      'Launch your SaaS MVP in 4 weeks. ZYVONE is a high-velocity SaaS MVP development company engineering production-grade software that validates demand and scales cleanly.',
  },
  {
    slug: 'mvp-development',
    disciplineNumber: '06',
    pillar: 'BUILD',
    title: 'MVP Development',
    eyebrow: 'BUILD / DISCIPLINE 06',
    primaryKeyword: 'MVP development company',
    secondaryKeywords: [
      'MVP development',
      'MVP development services',
      'startup MVP development',
      'software MVP development',
      'web app MVP development',
      'mobile app MVP development',
      'rapid MVP development',
    ],
    subtitle:
      'Rapid, production-grade Minimum Viable Products engineered with uncompromising architectural integrity for early-stage software startups and modern enterprises.',
    overview:
      'We turn strategic software ideas into live, interactive digital products that users can touch, test, and pay for. Our MVP development process balances rapid speed-to-market with production code hygiene, ensuring you build market validation without technical debt.',
    whatWeBuild: [
      'Web application MVPs with interactive client-side functionality',
      'Cross-platform mobile app MVPs in Flutter for iOS & Android',
      'AI tool prototypes & automated workflow demonstrators',
      'Marketplace & transactional platform MVPs',
      'Internal proof-of-concept software for enterprise validation',
    ],
    problems: [
      {
        problem:
          'Startup founders paralyzed by endless feature creep and delayed launches that let competitors capture market share.',
        solution:
          'Time-boxed 3-to-4 week sprints delivering functional software focused squarely on the primary user problem.',
      },
      {
        problem:
          'Non-technical founders getting exploited by offshore agencies delivering buggy, unmaintainable spaghetti code.',
        solution:
          'Direct founder-to-founder technical collaboration, complete transparency, typed codebases, and comprehensive technical documentation.',
      },
    ],
    capabilities: [
      {
        title: 'Rapid Wireframing & Prototyping',
        desc: 'Interactive Figma prototypes validated before writing a single line of backend logic.',
      },
      {
        title: 'High-Speed Development Sprints',
        desc: 'Agile 2-week execution blocks with continuous staging deployments for real-time review.',
      },
      {
        title: 'Real-Time User Telemetry',
        desc: 'Embedded PostHog/Mixpanel analytics tracking exact user drop-off and engagement points.',
      },
      {
        title: 'Zero Technical Debt',
        desc: 'Clean modular code architecture ready for immediate feature additions or external code audits.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    relatedProjectSlugs: ['toolmatic', 'pdfmaster', 'paletrix', 'snake'],
    faqs: [
      {
        question: 'What is the difference between a prototype and an MVP?',
        answer:
          'A prototype is a clickable simulation designed to test UI flows. An MVP is real, functioning software that connects to databases, processes real transactions, and handles real user accounts.',
      },
      {
        question: 'What do we need to provide before kicking off an MVP build?',
        answer:
          'A clear problem statement, an outline of target users, and any existing notes or wireframes. We help you refine scope, technical architecture, and UI/UX during the discovery phase.',
      },
      {
        question: 'Can you help us build a mobile MVP as well as a web MVP?',
        answer:
          'Yes. We build responsive web applications in Next.js and cross-platform mobile MVPs in Flutter, allowing rapid deployment to the web and app stores.',
      },
    ],
    seoTitle: 'MVP Development Company | Rapid Production Software | ZYVONE',
    seoDescription:
      'Ship your digital product MVP in weeks. ZYVONE is an elite MVP development company building production-grade web and mobile applications for startups and forward-thinking enterprises.',
  },
  {
    slug: 'custom-software-development',
    disciplineNumber: '07',
    pillar: 'ENGINEERING',
    title: 'Custom Software Development',
    eyebrow: 'ENGINEERING / DISCIPLINE 07',
    primaryKeyword: 'custom software development company',
    secondaryKeywords: [
      'custom software development',
      'custom software development services',
      'bespoke software development',
      'business software development',
      'enterprise software development',
    ],
    subtitle:
      'Bespoke enterprise software systems, automated backends, and complex data engines engineered to replace fragile manual workflows with resilient digital infrastructure.',
    overview:
      'Off-the-shelf software rarely fits specialized commercial realities. ZYVONE architects custom software systems tailored specifically to your company’s unique operational logic, data schemas, and regulatory constraints. We build reliable digital assets that give businesses enduring operational moats.',
    whatWeBuild: [
      'Bespoke operational and industrial software platforms',
      'Automated quotation engines & B2B procurement portals',
      'Complex calculation and document processing engines',
      'Legacy software modernization and cloud migration',
      'High-throughput backend processing engines',
    ],
    problems: [
      {
        problem:
          'Companies suffocating under manual spreadsheets and disconnected SaaS tools that cause expensive human errors and operational friction.',
        solution:
          'Unified bespoke software system designed around your exact operational pipelines with automated validation and zero double entry.',
      },
      {
        problem:
          'Aging legacy software running on outdated servers that presents severe security liabilities and cannot integrate with modern cloud APIs.',
        solution:
          'Disciplined modern migration to type-safe TypeScript/Python microservices running in secure, autoscaling containerized cloud infrastructure.',
      },
    ],
    capabilities: [
      {
        title: 'Bespoke Business Logic Engines',
        desc: 'Deterministic rule engines that automate complex commercial calculations, pricing matrices, and approval trees.',
      },
      {
        title: 'Database Architecture & Modeling',
        desc: 'Optimized PostgreSQL schemas, indexing strategies, and automated backups engineered for zero data loss.',
      },
      {
        title: 'Legacy System Modernization',
        desc: 'Zero-downtime migration of outdated desktop or monolithic applications to modern, secure cloud architectures.',
      },
      {
        title: 'Rigorous Security & Compliance',
        desc: 'Role-based access control, cryptographic audit logging, encrypted storage at rest, and OWASP Top 10 hardening.',
      },
    ],
    approach: standardApproach,
    technologies: ['TypeScript', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 'Docker', 'Redis', 'AWS/Vercel'],
    relatedProjectSlugs: ['al-raheem-engineering', 'pdfmaster', 'toolmatic'],
    faqs: [
      {
        question: 'When should a business invest in custom software instead of buying off-the-shelf SaaS?',
        answer:
          'When commercial differentiation, specialized workflows, data privacy, or recurring seat fees make off-the-shelf tools either too rigid, insecure, or commercially inefficient over a 2-3 year horizon.',
      },
      {
        question: 'How do you guarantee custom software reliability and uptime?',
        answer:
          'Through type-safe TypeScript architectures, automated continuous integration tests, health monitoring, error tracking via Sentry, and redundant cloud deployments with automated failover.',
      },
      {
        question: 'How do you handle software documentation for our in-house team?',
        answer:
          'Every system ships with full architectural blueprints, OpenAPI/Swagger API documentation, database schema diagrams, and deployment runbooks for complete engineering independence.',
      },
    ],
    seoTitle: 'Custom Software Development Company | Bespoke Software | ZYVONE',
    seoDescription:
      'ZYVONE is a premier custom software development company engineering bespoke business systems, calculation engines, and scalable enterprise cloud software in Lahore.',
  },
  {
    slug: 'ai-development',
    disciplineNumber: '08',
    pillar: 'INTELLIGENCE',
    title: 'AI Development',
    eyebrow: 'INTELLIGENCE / DISCIPLINE 08',
    primaryKeyword: 'AI development company',
    secondaryKeywords: [
      'AI development',
      'AI development services',
      'custom AI development',
      'AI software development',
      'generative AI development',
      'AI integration services',
      'LLM application development',
    ],
    subtitle:
      'Production AI systems, generative workflows, computer vision models, and custom LLM orchestration pipelines embedded directly into existing business applications.',
    overview:
      'We engineer production-grade Artificial Intelligence software that moves far beyond generic chat interfaces. ZYVONE builds contextual AI recommendation engines, computer vision analysis tools, and LLM-powered business software that solves real operational bottlenecks with high precision.',
    whatWeBuild: [
      'Contextual AI recommendation engines (lifestyle, fashion, commerce)',
      'Camera-based computer vision & visual feature extraction systems',
      'Custom Retrieval-Augmented Generation (RAG) vector knowledge bases',
      'Fine-tuned LLM agents with structured JSON outputs and schema validation',
      'Automated document classification and semantic extraction pipelines',
    ],
    problems: [
      {
        problem:
          'AI implementations that hallucinate inaccurate information and produce unformatted text that breaks downstream enterprise software.',
        solution:
          'Constrained schema generation using Zod and Pydantic, deterministic validation guardrails, and hybrid rule-based fallback engines.',
      },
      {
        problem:
          'High API inference costs and sluggish 5+ second latency that alienates users from mobile and web applications.',
        solution:
          'Optimized edge inference, intelligent prompt caching, small domain-specific models, and asynchronous background worker queues.',
      },
    ],
    capabilities: [
      {
        title: 'Contextual Recommendation Engines',
        desc: 'Synthesize real-world sensor telemetry, weather APIs, user biometrics, and domain taxonomy into precision recommendations.',
      },
      {
        title: 'Computer Vision & Color Extraction',
        desc: 'Edge image processing, skin undertone analysis, dominant hue classification, and visual object detection.',
      },
      {
        title: 'Vector Search & RAG Architecture',
        desc: 'Embedding pipelines using pgvector and Pinecone delivering instant semantic search across millions of private documents.',
      },
      {
        title: 'Hybrid AI & Rule Engines',
        desc: 'Combining the flexibility of generative models with the mathematical determinism of traditional logic engines.',
      },
    ],
    approach: standardApproach,
    technologies: ['Python', 'TypeScript', 'Node.js', 'OpenAI API', 'Google Gemini API', 'pgvector', 'FastAPI', 'Flutter'],
    relatedProjectSlugs: ['dresiva', 'toolmatic', 'cantt-dental-care'],
    faqs: [
      {
        question: 'How do you prevent hallucinations in business AI applications?',
        answer:
          'We implement strict schema enforcement (Zod/Pydantic), retrieval-augmented generation (RAG) grounded in your verified private data, and dual-layer validation checks before outputs touch the frontend.',
      },
      {
        question: 'Can you build AI systems that run directly on mobile devices?',
        answer:
          'Yes. For applications like Paletrix and Dresiva, we combine client-side Flutter image processing algorithms with secure cloud API orchestration for heavy inference, optimizing both battery life and latency.',
      },
      {
        question: 'Are our proprietary company data and customer data protected?',
        answer:
          'Yes. We build using enterprise zero-data-retention APIs and self-hosted vector databases, ensuring your proprietary information is never used to train public foundation models.',
      },
    ],
    seoTitle: 'AI Development Company | Custom AI Software & Systems | ZYVONE',
    seoDescription:
      'ZYVONE is an advanced AI development company engineering contextual recommendation systems, computer vision apps, and enterprise LLM solutions that deliver real ROI.',
  },
  {
    slug: 'ai-automation',
    disciplineNumber: '09',
    pillar: 'INTELLIGENCE',
    title: 'AI Automation',
    eyebrow: 'INTELLIGENCE / DISCIPLINE 09',
    primaryKeyword: 'AI automation agency',
    secondaryKeywords: [
      'AI automation',
      'AI automation services',
      'business process automation',
      'AI workflow automation',
      'intelligent automation',
      'AI-powered automation',
    ],
    subtitle:
      'Autonomous cognitive workflows that connect LLMs, internal databases, and communication APIs to eliminate thousands of hours of manual knowledge work.',
    overview:
      'ZYVONE transforms operational bottlenecks into autonomous digital pipelines. We integrate intelligent AI decision-making into core business workflows, automating customer inquiry triage, technical quotation generation, document review, and multi-system data synchronization.',
    whatWeBuild: [
      'Autonomous customer support and WhatsApp triage pipelines',
      'AI-powered document extraction and ERP invoice reconciliation',
      'Automated sales quotation engines that parse unstructured RFQs',
      'Multi-platform inventory and catalog synchronization workflows',
      'Continuous compliance, auditing, and anomaly detection agents',
    ],
    problems: [
      {
        problem:
          'High-value knowledge workers wasting 40% of their day on repetitive email triage, manual data entry, and PDF processing.',
        solution:
          'Autonomous AI pipelines that extract, validate, and route structured data directly into internal software without human intervention.',
      },
      {
        problem:
          'Slow customer inquiry response times losing warm commercial leads to competitors during non-business hours.',
        solution:
          '24/7 intelligent conversational agents integrated directly into WhatsApp and email that capture leads, answer complex FAQs, and schedule consultations.',
      },
    ],
    capabilities: [
      {
        title: 'Cognitive Document Ingestion',
        desc: 'Extract tables, line items, and contractual terms from unstructured PDFs directly into structured database tables.',
      },
      {
        title: 'Conversational WhatsApp & CRM Routing',
        desc: 'Direct integration with WhatsApp Cloud API and HubSpot/Salesforce for automated lead qualification and booking.',
      },
      {
        title: 'Exception Handling & Human-in-the-Loop',
        desc: 'Autonomous processing for 95% of routine requests with instant escalation alerts for low-confidence edge cases.',
      },
      {
        title: 'Audit Logging & Telemetry',
        desc: 'Full traceability showing every prompt, API call, confidence score, and executed database mutation.',
      },
    ],
    approach: standardApproach,
    technologies: ['Python', 'Node.js', 'TypeScript', 'OpenAI API', 'WhatsApp Cloud API', 'PostgreSQL', 'Docker', 'Redis'],
    relatedProjectSlugs: ['cantt-dental-care', 'al-raheem-engineering', 'toolmatic'],
    faqs: [
      {
        question: 'What is the difference between standard automation and AI automation?',
        answer:
          'Standard automation requires strict "if-this-then-that" rules on rigid data formats. AI automation introduces semantic understanding, allowing software to parse unstructured emails, messy PDFs, and human conversations with high accuracy.',
      },
      {
        question: 'What happens if the AI encounters an ambiguous request?',
        answer:
          'We engineer strict Human-in-the-Loop (HITL) checkpoints. When confidence levels fall below 90%, the workflow automatically flags the ticket for team review with pre-filled suggestions.',
      },
      {
        question: 'Can AI automation integrate with our existing legacy ERP or CRM?',
        answer:
          'Yes. We build custom API connectors and database sync agents that integrate directly into existing SQL databases, REST endpoints, and legacy backends without disrupting ongoing operations.',
      },
    ],
    seoTitle: 'AI Automation Agency | Workflow & Process Automation | ZYVONE',
    seoDescription:
      'Eliminate manual operational friction with ZYVONE. We are an AI automation agency engineering autonomous workflows, document ingestion, and WhatsApp CRM pipelines.',
  },
  {
    slug: 'ai-agent-development',
    disciplineNumber: '10',
    pillar: 'INTELLIGENCE',
    title: 'AI Agent Development',
    eyebrow: 'INTELLIGENCE / DISCIPLINE 10',
    primaryKeyword: 'AI agent development company',
    secondaryKeywords: [
      'AI agent development',
      'AI agents development',
      'custom AI agents',
      'AI agent services',
      'autonomous AI agents',
      'enterprise AI agents',
      'AI agent automation',
    ],
    subtitle:
      'Goal-driven autonomous agents engineered with state machines, tool-calling capabilities, vector memory, and deterministic guardrails for high-stakes business operations.',
    overview:
      'We build autonomous AI agents capable of planning, executing multi-step tasks, and interacting directly with databases, APIs, and third-party software. Our agents are governed by deterministic finite-state machines, strict permission boundaries, and verifiable audit trails.',
    whatWeBuild: [
      'Multi-step autonomous research and market intelligence agents',
      'Customer support agents with real-time tool execution & database lookups',
      'Autonomous code review, linting, and PR security verification agents',
      'Sales prospecting and personalized outreach orchestration agents',
      'Database monitoring and self-healing system recovery agents',
    ],
    problems: [
      {
        problem:
          'Autonomous agents looping infinitely, making unauthorized API calls, or getting stuck in unpredictable prompt loops.',
        solution:
          'Strict finite-state machine (FSM) architecture with maximum execution depth, budget caps, and programmatic validation at every transition.',
      },
      {
        problem:
          'Agents lacking long-term context and forgetting previous customer interactions across multiple sessions.',
        solution:
          'Persistent vector memory and session state storage backed by PostgreSQL and pgvector for contextual recall.',
      },
    ],
    capabilities: [
      {
        title: 'Deterministic State Machine Logic',
        desc: 'Formal state machines governing agent planning, action execution, observation, and terminal states.',
      },
      {
        title: 'Tool & Function Calling Engine',
        desc: 'Secure sandboxed tool invocation allowing agents to read database records, trigger webhooks, and query external APIs.',
      },
      {
        title: 'Persistent Long-Term Memory',
        desc: 'Semantic memory indexing using vector embeddings to maintain contextual recall across weeks of user interactions.',
      },
      {
        title: 'Strict Safety & Rate Limits',
        desc: 'Cryptographic API permission gating, token consumption budgets, and automated emergency kill-switches.',
      },
    ],
    approach: standardApproach,
    technologies: ['Python', 'TypeScript', 'LangGraph', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Docker'],
    relatedProjectSlugs: ['dresiva', 'toolmatic', 'al-raheem-engineering'],
    faqs: [
      {
        question: 'How do AI agents differ from chatbots?',
        answer:
          'Chatbots simply answer questions with text. AI agents have agency: they can plan multi-step workflows, call tools, query databases, send emails, trigger webhooks, and complete complex objectives autonomously.',
      },
      {
        question: 'How do you prevent agents from taking dangerous unauthorized actions?',
        answer:
          'We implement strict principle-of-least-privilege API scopes, write-permission approval gates, and rigorous input/output validation so agents can only execute explicitly whitelisted actions.',
      },
      {
        question: 'What models power ZYVONE AI agents?',
        answer:
          'We utilize state-of-the-art reasoning models including GPT-4o, Claude 3.5 Sonnet, and Google Gemini 1.5 Pro, selecting the optimal model for speed, cost, and reasoning complexity per agent step.',
      },
    ],
    seoTitle: 'AI Agent Development Company | Autonomous AI Agents | ZYVONE',
    seoDescription:
      'ZYVONE is a specialized AI agent development company engineering autonomous, tool-calling agents with deterministic state machines and robust enterprise guardrails.',
  },
  {
    slug: 'business-automation',
    disciplineNumber: '11',
    pillar: 'INTELLIGENCE',
    title: 'Business Automation',
    eyebrow: 'INTELLIGENCE / DISCIPLINE 11',
    primaryKeyword: 'business automation services',
    secondaryKeywords: [
      'business automation',
      'workflow automation',
      'business process automation',
      'custom business automation',
      'operational automation',
      'CRM automation',
      'sales automation',
    ],
    subtitle:
      'End-to-end operational workflow automation integrating ERPs, CRMs, quotation engines, and customer messaging pipelines for frictionless business execution.',
    overview:
      'We eliminate operational friction by interconnecting your existing software stack into unified, automated workflows. ZYVONE engineers custom webhook pipelines, database synchronization routines, automated inventory tracking, and CRM routing to save hundreds of administrative hours monthly.',
    whatWeBuild: [
      'End-to-end quotation-to-invoice automation pipelines',
      'Automated CRM lead routing and appointment booking systems',
      'Multi-warehouse inventory synchronization engines',
      'Automated customer onboarding and compliance verification workflows',
      'Real-time Slack/WhatsApp operational alert systems',
    ],
    problems: [
      {
        problem:
          'Sales reps spending hours manually typing client specifications into quotation documents, delaying responses and losing deals.',
        solution:
          'One-click automated quotation engines generating branded PDF proposals with precise pricing calculations in under 5 seconds.',
      },
      {
        problem:
          'Information trapped in departmental silos requiring manual copy-pasting between CRM, accounting, and operational databases.',
        solution:
          'Automated webhook pipelines and event-driven microservices maintaining real-time bidirectional synchronization across all business systems.',
      },
    ],
    capabilities: [
      {
        title: 'Event-Driven Webhook Architecture',
        desc: 'Instant, reliable data propagation across disparate SaaS tools with automated retry queues and error handling.',
      },
      {
        title: 'Automated Financial & PDF Generation',
        desc: 'Serverless PDF generation for purchase orders, invoices, and technical specs with cryptographic verification.',
      },
      {
        title: 'WhatsApp & SMS Transactional Pipelines',
        desc: 'Instant order confirmations, dispatch notifications, and appointment reminders sent directly to customer phones.',
      },
      {
        title: 'Centralized Operational Dashboards',
        desc: 'Unified visibility into all active automation pipelines, throughput rates, and error logs in a single interface.',
      },
    ],
    approach: standardApproach,
    technologies: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'BullMQ', 'WhatsApp Cloud API', 'Stripe'],
    relatedProjectSlugs: ['cantt-dental-care', 'al-raheem-engineering', 'amin-raisat-hosiery'],
    faqs: [
      {
        question: 'Why build custom business automation instead of using Zapier or Make?',
        answer:
          'Zapier and Make become expensive at scale, suffer from execution rate limits, lack deep database-level transaction rollbacks, and cannot execute proprietary computational algorithms. Custom code is faster, cheaper, and 100% owned by you.',
      },
      {
        question: 'How do you handle automated workflows when third-party APIs experience outages?',
        answer:
          'We implement resilient message queues (Redis / BullMQ) with exponential backoff and dead-letter queues. If an external service is down, events are queued safely and retried automatically once service is restored.',
      },
      {
        question: 'Can you automate our WhatsApp communication with customers?',
        answer:
          'Yes. As an official WhatsApp Business Cloud API integration partner, we build verified automated messaging pipelines for appointment confirmations, order tracking, and lead qualification.',
      },
    ],
    seoTitle: 'Business Automation Services | Workflow Automation | ZYVONE',
    seoDescription:
      'Transform business operations with ZYVONE. We provide custom business automation services, connecting CRMs, ERPs, quotation pipelines, and WhatsApp notification systems.',
  },
  {
    slug: 'api-development',
    disciplineNumber: '12',
    pillar: 'ENGINEERING',
    title: 'API Development & Integration',
    eyebrow: 'ENGINEERING / DISCIPLINE 12',
    primaryKeyword: 'API development services',
    secondaryKeywords: [
      'API development',
      'custom API development',
      'API integration services',
      'REST API development',
      'third-party API integration',
      'backend API development',
    ],
    subtitle:
      'Type-safe REST and GraphQL APIs, event-driven webhooks, and resilient third-party integrations engineered for high-throughput concurrency and zero downtime.',
    overview:
      'APIs are the connective tissue of modern digital business. ZYVONE designs, engineers, and documents production REST and GraphQL APIs with strict OpenAPI/Swagger contracts, rate limiting, JWT/OAuth2 authentication, and sub-50ms execution times.',
    whatWeBuild: [
      'High-throughput REST and GraphQL backend services',
      'Public developer APIs with developer portals and interactive documentation',
      'Webhook ingestion and distribution pipelines',
      'Third-party payment, banking, and logistics API integrations',
      'Secure microservice communication gateways',
    ],
    problems: [
      {
        problem:
          'Undocumented, untyped APIs that break mobile and web clients on every production release, causing unexpected downtime.',
        solution:
          'End-to-end type safety with TypeScript/tRPC and automated OpenAPI 3.0 contract generation preventing breaking changes.',
      },
      {
        problem:
          'Vulnerable API endpoints susceptible to scraping, DDoS attacks, and unauthorized credential abuse.',
        solution:
          'Edge rate limiting, CORS configuration, token bucket algorithms, and cryptographic JWT/API key validation.',
      },
    ],
    capabilities: [
      {
        title: 'OpenAPI & Swagger Documentation',
        desc: 'Interactive, auto-generated documentation allowing client engineers to test and integrate endpoints instantly.',
      },
      {
        title: 'High-Concurrency Architecture',
        desc: 'Asynchronous Node.js and FastAPI backends capable of handling thousands of concurrent requests with low latency.',
      },
      {
        title: 'Idempotency & Transaction Safety',
        desc: 'Idempotency keys on all mutating endpoints preventing duplicate payments or accidental duplicate record creation.',
      },
      {
        title: 'Comprehensive Telemetry & Rate Limiting',
        desc: 'Per-user quota management, Redis-backed rate limiting, and real-time latency monitoring.',
      },
    ],
    approach: standardApproach,
    technologies: ['Node.js', 'Express', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    relatedProjectSlugs: ['dresiva', 'toolmatic', 'pdfmaster', 'wearomnia'],
    faqs: [
      {
        question: 'Do you provide complete API documentation for our developers?',
        answer:
          'Yes. Every API includes an interactive Swagger/OpenAPI documentation portal, request/response examples, error code dictionaries, and Postman collections.',
      },
      {
        question: 'How do you ensure our APIs can scale as user traffic grows?',
        answer:
          'We build stateless API architectures that horizontally auto-scale on cloud infrastructure, backed by connection-pooled databases and Redis caching layers for high-frequency reads.',
      },
      {
        question: 'Can you integrate complex third-party APIs that have poor documentation?',
        answer:
          'Yes. We have extensive experience reverse-engineering, sandboxing, and normalizing quirky third-party APIs (legacy ERPs, banking gateways, courier services) into clean, type-safe internal interfaces.',
      },
    ],
    seoTitle: 'API Development & Integration Services | REST & GraphQL | ZYVONE',
    seoDescription:
      'ZYVONE engineers custom REST APIs, GraphQL backends, and third-party API integration pipelines with sub-50ms latency, complete OpenAPI specs, and enterprise security.',
  },
  {
    slug: 'internal-tools',
    disciplineNumber: '13',
    pillar: 'ENGINEERING',
    title: 'Internal Tools & Business Systems',
    eyebrow: 'ENGINEERING / DISCIPLINE 13',
    primaryKeyword: 'internal tools development',
    secondaryKeywords: [
      'internal tool development',
      'internal software development',
      'business systems development',
      'custom internal tools',
      'admin dashboard development',
      'business dashboard development',
    ],
    subtitle:
      'Custom administrative portals, operational cockpits, and inventory/procurement systems tailored precisely to your team’s operational reality.',
    overview:
      'Your internal team deserves software as fast, modern, and reliable as your customer-facing products. ZYVONE engineers bespoke administrative dashboards, inventory control portals, and operational management systems that streamline internal workflows and eliminate manual errors.',
    whatWeBuild: [
      'Executive analytics cockpits and real-time business dashboards',
      'Warehouse inventory, order fulfillment, and dispatch portals',
      'Customer support management and order modification consoles',
      'Role-based administrative control centers for SaaS platforms',
      'Custom B2B quotation and purchase order management software',
    ],
    problems: [
      {
        problem:
          'Support and operations teams forced to use slow, generic admin tools that don’t reflect unique business logic.',
        solution:
          'Bespoke Next.js operational portals designed around exact staff workflows with keyboard shortcuts and instant search.',
      },
      {
        problem:
          'Security risks from employees having full, unmonitored database access to resolve customer support issues.',
        solution:
          'Granular Role-Based Access Control (RBAC) with full audit logs recording who viewed, edited, or deleted any customer record.',
      },
    ],
    capabilities: [
      {
        title: 'High-Density Data Tables',
        desc: 'Virtual scrolling tables supporting 50,000+ rows with multi-column sorting, instant search, and CSV/Excel export.',
      },
      {
        title: 'Granular Role-Based Permissions',
        desc: 'Strict permission gates separating executive, manager, and support agent views and action capabilities.',
      },
      {
        title: 'Audit Logs & Change Tracking',
        desc: 'Immutable audit logs tracking every user update, status change, and data export for compliance and accountability.',
      },
      {
        title: 'Instant Operational Feedback',
        desc: 'Optimistic UI updates and toast notifications ensuring operations teams know instantly when actions succeed.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Supabase', 'Node.js'],
    relatedProjectSlugs: ['al-raheem-engineering', 'cantt-dental-care', 'amin-raisat-hosiery'],
    faqs: [
      {
        question: 'Why build custom internal tools instead of using Retool or Appsmith?',
        answer:
          'Low-code tool builders charge hefty per-user monthly subscription fees that compound as your team grows, and they suffer from slow render speeds with complex logic. Custom tools carry zero per-seat fees and run at instant native speed.',
      },
      {
        question: 'How quickly can ZYVONE deliver an internal dashboard or admin portal?',
        answer:
          'Most internal tools are delivered in 2 to 4 weeks, utilizing our modular design system and pre-built data grid components.',
      },
      {
        question: 'Can the tool connect directly to our existing production databases?',
        answer:
          'Yes. We can connect securely to your existing PostgreSQL, MySQL, or MongoDB databases using read-only replicas or secured microservice endpoints to ensure complete production safety.',
      },
    ],
    seoTitle: 'Internal Tools Development | Custom Admin Portals | ZYVONE',
    seoDescription:
      'Boost team productivity with ZYVONE. We engineer custom internal tools, admin dashboards, inventory portals, and operational software systems with zero per-seat fees.',
  },
  {
    slug: 'ecommerce-development',
    disciplineNumber: '14',
    pillar: 'PRODUCT',
    title: 'E-commerce Development',
    eyebrow: 'PRODUCT / DISCIPLINE 14',
    primaryKeyword: 'ecommerce development company',
    secondaryKeywords: [
      'ecommerce development',
      'custom ecommerce development',
      'ecommerce website development',
      'ecommerce development services',
      'Shopify development',
      'custom ecommerce platform',
    ],
    subtitle:
      'High-converting bespoke commerce platforms, headless Shopify architectures, and localized COD logistics pipelines engineered for maximum conversion and zero checkout dropoff.',
    overview:
      'ZYVONE engineers premium direct-to-consumer (D2C) and B2B commerce platforms. We eliminate checkout friction, automate localized logistics (including nationwide Cash on Delivery in Pakistan), and build blazing-fast shopping experiences with editorial high-fashion aesthetics and sub-100ms page transitions.',
    whatWeBuild: [
      'Bespoke Next.js high-fashion and luxury D2C storefronts',
      'Headless Shopify commerce architectures with edge rendering',
      'Automated Cash on Delivery (COD) order verification systems',
      'B2B wholesale quotation, bulk ordering, and volume pricing portals',
      'Integrated WhatsApp conversational checkout and sizing consultation triggers',
    ],
    problems: [
      {
        problem:
          'Clunky multi-step checkouts and slow mobile storefronts causing 70%+ abandoned carts and wasted ad spend on Meta and Google.',
        solution:
          'Sub-1-second mobile page loads and streamlined 1-page guest checkout designed for instantaneous purchasing.',
      },
      {
        problem:
          'High order return rates (RTO) on Cash on Delivery due to fake orders, unconfirmed addresses, and manual dispatch delays.',
        solution:
          'Automated WhatsApp and SMS OTP address verification and automated courier API dispatch pipelines.',
      },
    ],
    capabilities: [
      {
        title: 'Editorial High-Fashion UI/UX',
        desc: 'Magazine-quality typography, fluid zoom galleries, and visual storytelling optimized for high-ticket luxury products.',
      },
      {
        title: 'Frictionless 1-Page Checkout',
        desc: 'Custom guest checkout supporting localized address autofill, automated COD fees, and WhatsApp order routing.',
      },
      {
        title: 'Headless Shopify Architecture',
        desc: 'Next.js frontend coupled to Shopify’s robust commerce engine via Storefront GraphQL API for peak speed and security.',
      },
      {
        title: 'Courier Logistics Automation',
        desc: 'Direct integrations with Trax, PostEx, Leopard, and international logistics providers for automated tracking and label generation.',
      },
    ],
    approach: standardApproach,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'WhatsApp API', 'Vercel Edge'],
    relatedProjectSlugs: ['wearomnia', 'amin-raisat-hosiery'],
    faqs: [
      {
        question: 'Do you build custom storefronts or work with Shopify?',
        answer:
          'Both. We specialize in headless Shopify development (Next.js frontend with Shopify backend) for the ultimate balance of custom design flexibility and proven e-commerce reliability, as well as 100% custom bespoke platforms.',
      },
      {
        question: 'How do you handle Cash on Delivery (COD) logistics in Pakistan?',
        answer:
          'We build automated WhatsApp confirmation flows, address normalization, and direct courier API integrations (PostEx, Trax, TCS) to verify buyer intent and reduce RTO return rates by up to 35%.',
      },
      {
        question: 'How do custom e-commerce storefronts improve our return on ad spend (ROAS)?',
        answer:
          'Every 100ms improvement in page load speed directly improves mobile conversion rates. By delivering sub-1-second mobile speeds and frictionless checkout, our platforms maximize revenue from every ad click.',
      },
    ],
    seoTitle: 'E-commerce Development Company | Custom D2C & Headless | ZYVONE',
    seoDescription:
      'Scale your online brand with ZYVONE. We are an elite e-commerce development company building custom Next.js storefronts, headless Shopify platforms, and automated COD logistics.',
  },
  {
    slug: 'ui-ux-design',
    disciplineNumber: '15',
    pillar: 'PRODUCT',
    title: 'UI/UX & Product Design',
    eyebrow: 'PRODUCT / DISCIPLINE 15',
    primaryKeyword: 'UI UX product design services',
    secondaryKeywords: [
      'UI UX design',
      'product design',
      'SaaS UI UX design',
      'web application UI UX',
      'mobile app UI UX',
      'product design services',
      'UX design for SaaS',
    ],
    subtitle:
      'High-fidelity digital product design, interactive design systems, and conversion-engineered UX for complex SaaS dashboards, mobile apps, and digital platforms.',
    overview:
      'Exceptional software feels effortless to use. ZYVONE designs sophisticated, intuitive digital product interfaces that solve complex workflows with visual clarity. We don’t create generic dribbble concepts — we engineer production-ready design systems with tokenized typography, micro-interactions, and accessible WCAG color palettes.',
    whatWeBuild: [
      'Comprehensive digital product & SaaS interface design',
      'Cross-platform iOS and Android mobile app UI/UX',
      'Production design systems with Figma tokens & component libraries',
      'Information architecture, wireframing, and interactive user journeys',
      'Conversion rate optimization (CRO) redesigns for existing web apps',
    ],
    problems: [
      {
        problem:
          'Unintuitive software interfaces with steep learning curves that cause high user churn and overwhelm customer support.',
        solution:
          'Rigorous UX information architecture, progressive disclosure, and contextual user guidance that makes complex tools self-evident.',
      },
      {
        problem:
          'Inconsistent visual styling, messy Figma files, and design mockups that cannot be realistically built by frontend engineers.',
        solution:
          'Code-aligned design systems using autolayout, responsive grids, and design tokens mapped directly to Tailwind CSS and CSS variables.',
      },
    ],
    capabilities: [
      {
        title: 'Tokenized Design Systems',
        desc: 'Scalable color systems, fluid typography scales, and modular component variants engineered for 1:1 developer handoff.',
      },
      {
        title: 'Micro-Interactions & Prototyping',
        desc: 'Interactive Figma prototypes demonstrating exact easing curves, modal transitions, and hover states.',
      },
      {
        title: 'WCAG Accessibility Standards',
        desc: 'Color contrast compliance (AA/AAA ratios), legible typography hierarchies, and accessible keyboard navigation states.',
      },
      {
        title: 'Complex Data Density Management',
        desc: 'Optimized dashboard layouts that display high volumes of analytical data without visual clutter or user fatigue.',
      },
    ],
    approach: standardApproach,
    technologies: ['Figma', 'Design Tokens', 'Tailwind CSS', 'WCAG 2.1', 'Prototyping', 'Design Systems'],
    relatedProjectSlugs: ['paletrix', 'dresiva', 'wearomnia', 'toolmatic'],
    faqs: [
      {
        question: 'What deliverables are included in a ZYVONE UI/UX engagement?',
        answer:
          'You receive a comprehensive Figma file with organized component libraries, auto-layout screens across all responsive breakpoints, interactive click-through prototypes, and developer handoff documentation.',
      },
      {
        question: 'How do you ensure designs are practical and feasible to build?',
        answer:
          'Because ZYVONE is a full-stack engineering studio, our designers are senior software practitioners. Every design is architected around real frontend CSS/Flexbox grid mechanics, component lifecycles, and performance budgets.',
      },
      {
        question: 'Can you redesign an existing live application without disrupting current users?',
        answer:
          'Yes. We can audit your existing product telemetry, identify highest-friction user drop-off points, and deliver phased module-by-module redesigns that can be rolled out iteratively with zero downtime.',
      },
    ],
    seoTitle: 'UI/UX & Product Design Services | SaaS & Mobile Apps | ZYVONE',
    seoDescription:
      'Design software people love to use. ZYVONE provides premier UI/UX and product design services for complex SaaS platforms, mobile applications, and digital flagships.',
  },
]

export function getAllServices(): ServiceItem[] {
  return services
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByPillar(pillar: ServicePillar): ServiceItem[] {
  return services.filter((s) => s.pillar === pillar)
}

export function getRelatedServices(currentSlug: string, limit = 3): ServiceItem[] {
  const current = getServiceBySlug(currentSlug)
  if (!current) return services.slice(0, limit)
  return services.filter((s) => s.slug !== currentSlug && s.pillar === current.pillar).slice(0, limit)
}
