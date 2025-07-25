import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.10minuteschool.com/images/**"),
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
        pathname: "/cdn.10minuteschool.com/images/**",
      },
    ],
  },
};

export default nextConfig;
