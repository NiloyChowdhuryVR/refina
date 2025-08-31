import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w5ns2uk57a.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
