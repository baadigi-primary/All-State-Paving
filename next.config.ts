import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "media-src 'self'",
              "font-src 'self' data:",
              "connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://*.supabase.co https://challenges.cloudflare.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://challenges.cloudflare.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
      // Agent discovery (RFC 8288 Link) on the homepage. Keep LAST: for the same header key the later rule wins.
      { source: "/", headers: [{ key: "Link", value: "</.well-known/api-catalog>; rel=\"api-catalog\", </.well-known/ai-plugin.json>; rel=\"service-desc\", </ai-bot.md>; rel=\"service-doc\", </llms.txt>; rel=\"describedby\", </auth.md>; rel=\"https://auth.md/rel\", </.well-known/mcp/server-card.json>; rel=\"https://modelcontextprotocol.io/rel/server-card\", </.well-known/oauth-protected-resource>; rel=\"oauth-protected-resource\"" }] },
    ];
  },
};

export default nextConfig;
