import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NEXT Configuration 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
