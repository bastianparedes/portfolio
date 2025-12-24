import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 🛡 Content Security Policy
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' ; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data: https:; " +
              "font-src 'self' https: data:; " +
              "connect-src 'self' https:; " +
              "frame-ancestors 'self';",
          },

          // 🧱 Prevent MIME sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          // 🖼 Prevent Clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          // ⚠️ XSS protection (legacy browsers)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },

          // 🔍 Control referrer info
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          // 🎤 Disable unnecessary browser APIs
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
