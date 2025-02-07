import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // }
};

export default nextConfig;
