const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
