const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubPages ? '/my-nav' : '',
  assetPrefix: isGithubPages ? '/my-nav/' : '',
};

export default nextConfig;
