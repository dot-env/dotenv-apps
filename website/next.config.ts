import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
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
