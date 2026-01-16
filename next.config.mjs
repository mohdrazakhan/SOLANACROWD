/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost'],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'pino-pretty': false,
    };
    return config;
  },
}

export default nextConfig
