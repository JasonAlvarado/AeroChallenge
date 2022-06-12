/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "coding-challenge-api.aerolab.co"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
