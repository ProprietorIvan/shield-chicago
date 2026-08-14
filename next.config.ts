import type { NextConfig } from "next";
import { PLACE_REDIRECTS } from "./lib/territory";

const nextConfig: NextConfig = {
  transpilePackages: ["gsap"],
  async redirects() {
    return PLACE_REDIRECTS.map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
