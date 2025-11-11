import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL === "1",
  },
};

export default nextConfig;
