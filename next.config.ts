import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vivekvs.github.io",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
