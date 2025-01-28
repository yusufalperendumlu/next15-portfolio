import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
    
  },
};

export default nextConfig;
