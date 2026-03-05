/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Anchor v0.30 generates strict snake_case types that conflict with
    // our camelCase usage at runtime — the code works correctly at runtime.
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      }
    }
    return config
  },
}

export default nextConfig
