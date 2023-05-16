/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       permanent: true, // triggers 308
  //     },
  //   ];
  // },

  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
