export default async function auth(request, context) {
  const authHeader = request.headers.get("Authorization");

  // Read credentials from env vars (set in Netlify dashboard)
  const validUser = Deno.env.get("AUTH_USER") ?? "admin";
  const validPass = Deno.env.get("AUTH_PASS") ?? "password";
  const expectedToken = btoa(`${validUser}:${validPass}`);

  if (authHeader && authHeader === `Basic ${expectedToken}`) {
    return context.next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Site"',
    },
  });
}

export const config = {
  path: "/*",
};
