/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.istockphoto.com', 'cdn.pixabay.com', 'fakestoreapi.com', 'burst.shopifycdn.com', 'mir-s3-cdn-cf.behance.net']
  },
  reactStrictMode: true,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports = nextConfig
