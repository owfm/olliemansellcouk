import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
    /* config options here */
};

export default createMDX({})(nextConfig);
