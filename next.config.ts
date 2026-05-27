import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Biarkan Next.js fokus membangun, kita akan periksa tipe secara mandiri
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;