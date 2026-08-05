/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide the Next.js dev-tools badge in the corner (dev only; it never ships).
  devIndicators: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
