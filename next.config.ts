import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NEXT Configuration 
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
