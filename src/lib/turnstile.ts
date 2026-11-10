export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAF7spNZmTyvnPVjc";
export const TURNSTILE_ACTION = "contact";

const PRODUCTION_HOSTNAMES = ["www.allstatepavenow.com", "allstatepavenow.com"];
const DEV_HOSTNAMES = ["localhost", "127.0.0.1"];

// Turnstile is enforced only once both keys are configured in Vercel,
// so the form keeps working (honeypot + block list) until then.
export function turnstileEnabled(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && TURNSTILE_SITE_KEY);
}

export async function verifyTurnstileToken(token: unknown, remoteIp: string): Promise<boolean> {
  if (!turnstileEnabled()) return true;
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) return false;

  const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY!, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return false;
    const result = await res.json();
    const hosts = process.env.NODE_ENV === "production"
      ? PRODUCTION_HOSTNAMES
      : [...PRODUCTION_HOSTNAMES, ...DEV_HOSTNAMES];
    return result.success === true && result.action === TURNSTILE_ACTION && hosts.includes(result.hostname);
  } catch {
    return false;
  }
}
