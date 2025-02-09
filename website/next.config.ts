import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname: "www.locallifestyle.co.za",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
