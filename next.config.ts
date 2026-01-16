import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["www.google.com", "images.pexels.com", "cdn.simpleicons.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["geist"],
};

export default nextConfig;
