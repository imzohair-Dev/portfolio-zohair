import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portfolio-zohair',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
