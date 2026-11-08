import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    cssChunking: true,
    typedEnv: true,
  },
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
  partialPrefetching: false,
  turbopack: {
    root: import.meta.dirname,
  },
  typedRoutes: true,
};

export default nextConfig;
