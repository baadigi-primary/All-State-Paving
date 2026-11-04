import { NextResponse, type NextRequest } from "next/server";

// Markdown for Agents: `Accept: text/markdown` on a page → /api/md. Everything else passes through.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (request.method !== "GET" || !request.headers.get("accept")?.includes("text/markdown")) return NextResponse.next();
  // Route handlers see the original URL after a rewrite, so the path rides on a header.
  const headers = new Headers(request.headers);
  headers.set("x-md-path", pathname);
  return NextResponse.rewrite(new URL("/api/md", request.url), { request: { headers } });
}

// Pages only: skip api, admin, mcp, Next internals, .well-known, and any path with a file extension.
export const config = { matcher: ["/((?!api|admin|mcp|_next|\\.well-known|.*\\.[a-zA-Z0-9]+$).*)"] };
