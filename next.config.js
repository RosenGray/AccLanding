const { i18n } = require("./next-i18next.config");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  debug: process.env.NODE_ENV === "development",
  // output: 'export',
  // basePath: "/AccLanding",
  compiler: {
    styledComponents: true,
  },
  i18n,
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
  ns: ["common","home"],
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
