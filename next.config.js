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
  async headers() {
    return [{
        // matching all API routes
        source:"/api/:path*",
        headers:[
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
    }]
  }
};

module.exports = nextConfig;
