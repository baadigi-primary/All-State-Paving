// Anonymous client_credentials token. Everything agent-facing here is public; this exists so RFC 8414 discovery is honest.
export function POST() {
  return Response.json(
    { access_token: "public", token_type: "Bearer", scope: "public:read", expires_in: 31536000 },
    { headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" } },
  );
}
export function OPTIONS() {
  return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
}
