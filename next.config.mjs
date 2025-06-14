const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'my-nav'; // Your GitHub repo name

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true // Required for static exports
  },
  // Add this to ensure CSS is properly exported
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./**/*.css']
    }
  }
};

export default nextConfig;