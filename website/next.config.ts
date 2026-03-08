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
  typedRoutes: true,
  cacheComponents: true,
  experimental: {

    typedEnv: true,
    cssChunking: true,
  },
  compiler: {
    removeConsole: true,
  }
};

export default nextConfig;
