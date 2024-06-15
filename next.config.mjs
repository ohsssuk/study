/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // basePath 명시
  basePath: isProduction ? "/study-en-test" : "",
  // next 이미지 최적화 옵션 off
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
