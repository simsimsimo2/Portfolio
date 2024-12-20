/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disableDevLogs: false
})

module.exports = withPWA({
  reactStrictMode: true,
})
