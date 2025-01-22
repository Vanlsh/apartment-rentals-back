import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    api_url: process.env.API_URL,
  },
  images: {
    domains: ["example.com", "res.cloudinary.com", "cdn.example.com"], // Add multiple domains
  },
};

export default nextConfig;
