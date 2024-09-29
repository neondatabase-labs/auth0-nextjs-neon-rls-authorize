/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("bun:sqlite");
    return config;
  },
};

module.exports = nextConfig;
