// netlify/edge-functions/inject-key.js
// Safely injects your Anthropic API key into the page at runtime.
// The key is never stored in your source files or git repo.

export default async (request, context) => {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) return response;

  const html = await response.text();
  const apiKey = Netlify.env.get('ANTHROPIC_API_KEY') || '';

  // Inject into our specific placeholder comment — much safer than
  // replacing the first <script> tag which can break other scripts.
  const injected = html.replace(
    '/* __INJECT_API_KEY__ */',
    `window.ANTHROPIC_API_KEY = ${JSON.stringify(apiKey)};`
  );

  return new Response(injected, {
    status: response.status,
    headers: {
      ...Object.fromEntries(response.headers.entries()),
      'content-type': 'text/html; charset=utf-8',
    },
  });
};

export const config = { path: '/*' };
