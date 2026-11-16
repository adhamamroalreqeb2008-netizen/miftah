import type { NextConfig } from "next";

// عند النشر على GitHub Pages يتم تمرير اسم المستودع تلقائيًا
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isPages = process.env.GITHUB_ACTIONS === "true" && repo !== "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : ""
};

export default nextConfig;
