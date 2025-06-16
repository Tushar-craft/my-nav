/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/my-nav' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nav/' : '',
  images: {
    unoptimized: true,
  },
  // Add this to ensure proper static file handling
  trailingSlash: true,
};

module.exports = nextConfig;