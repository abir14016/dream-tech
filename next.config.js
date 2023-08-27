/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.trustedreviews.com",
      "www.asus.com",
      "www.groovypost.com",
      "www.knowcomputing.com",
      "www.freecodecamp.org",
      "assets-prd.ignimgs.com",
      "assetsio.reedpopcdn.com"
    ]
  }
}

module.exports = nextConfig
