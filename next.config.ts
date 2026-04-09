import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-zohair',
  assetPrefix: isProd ? '/portfolio-zohair/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
