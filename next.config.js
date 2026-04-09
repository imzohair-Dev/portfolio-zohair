/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-zohair',
  assetPrefix: '/portfolio-zohair/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
