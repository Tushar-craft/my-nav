const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? '/my-nav' : '',
  assetPrefix: isGithubPages ? '/my-nav/' : '',
  images: {
    unoptimized: true
  },
  // Add this experimental config for CSS:
  experimental: {
    appDir: true,
    css: true
  }
};

export default nextConfig;