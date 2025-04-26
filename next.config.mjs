/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com", // "*" dile jekuno website theke image nibe
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
