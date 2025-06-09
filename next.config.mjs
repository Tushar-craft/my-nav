/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const isGithubPages = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? '/my-nav' : '',
  assetPrefix: isGithubPages ? '/my-nav/' : '',
};


export default nextConfig;
