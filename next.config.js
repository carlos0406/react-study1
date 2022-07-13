/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
}

module.exports = nextConfig
