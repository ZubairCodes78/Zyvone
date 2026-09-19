import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/services/web',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/automation',
        destination: '/services/ai-automation',
        permanent: true,
      },
      {
        source: '/services/content',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/services/marketing',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/custom-software',
        destination: '/services/custom-software-development',
        permanent: true,
      },
      {
        source: '/services/business-systems',
        destination: '/services/internal-tools',
        permanent: true,
      },
      {
        source: '/services/ai-agents',
        destination: '/services/ai-agent-development',
        permanent: true,
      },
      {
        source: '/services/saas',
        destination: '/services/saas-development',
        permanent: true,
      },
      {
        source: '/services/mvp',
        destination: '/services/mvp-development',
        permanent: true,
      },
      {
        source: '/services/ecommerce',
        destination: '/services/ecommerce-development',
        permanent: true,
      },
      {
        source: '/capabilities',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
