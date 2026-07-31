import type { NextConfig } from "next";

// React braucht eval() nur im Dev-Modus (Debugging/Callstacks) — in Produktion bleibt die CSP strikt.
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com;`,
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com;",
              "frame-src 'self' https://www.google.com;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com;",
              "font-src 'self';",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
