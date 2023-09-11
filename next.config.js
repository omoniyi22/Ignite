/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"]
  },
  configureWebpack: {
      externals: {
          'node-fetch': "require('node-fetch')"
      }
  }
}


