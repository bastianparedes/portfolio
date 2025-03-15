import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.basePath ?? ''
};

export default nextConfig;
