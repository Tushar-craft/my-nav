const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for static export to GitHub Pages
  basePath: isGithubPages ? '/my-nav' : '', // Conditional base path
  assetPrefix: isGithubPages ? '/my-nav/' : '', // Conditional asset prefix
  images: {
    unoptimized: true // Required for static exports
  },
  // Optional: Add trailingSlash if you have direct URL navigation issues
  trailingSlash: true
};

export default nextConfig;