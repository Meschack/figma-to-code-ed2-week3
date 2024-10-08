/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**.coingecko.com',
        pathname: '**',
        protocol: 'https'
      }
    ]
  }
}

export default nextConfig
