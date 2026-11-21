/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // node-cron must not be bundled by webpack
    serverComponentsExternalPackages: ["node-cron", "nodemailer", "@prisma/client"],
    instrumentationHook: true,
  },
};
export default nextConfig;
