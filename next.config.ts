import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: '/mentor-app',
      destination: 'https://superpowermentors.typeform.com/Apply?typeform-source=www.superpowermentors.com',
      permanent: false
    }]
  }
  /* config options here */
};

export default nextConfig;
