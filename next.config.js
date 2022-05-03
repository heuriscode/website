module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/admin', destination: 'https://heuris-be.sanity.studio/', permanent: true }];
  },
};
