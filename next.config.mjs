/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // Adjust the limit as needed (e.g., "5mb", "10mb", etc.)
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jxmnwiyey0hombbm.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
