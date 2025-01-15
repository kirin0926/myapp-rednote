import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      async: true,
      defer: true,
      strategy: 'lazyOnload',
    },
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7897104007345492',
      crossOrigin: 'anonymous',
      defer: true,
      strategy: 'lazyOnload',
    },
  ],
};

export default nextConfig;
