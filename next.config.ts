import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build process.
  },
};

export default nextConfig;
