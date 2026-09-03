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
        source: '/capabilities',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
