import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: "export" for server deployment
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
