import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.locallifestyle.co.za",
        protocol: "https",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
    typedEnv: true,
    cssChunking: true,
  },
};

export default nextConfig;
