import type { NextApiRequest, NextApiResponse } from 'next';

const allowedPath = '/images/6k0t48w0/production/';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();
  if (typeof req.query.src !== 'string') return res.status(400).end();

  let source: URL;
  try {
    source = new URL(req.query.src);
  } catch {
    return res.status(400).end();
  }
  if (source.protocol !== 'https:' || source.hostname !== 'cdn.sanity.io' ||
    !source.pathname.startsWith(allowedPath)) return res.status(400).end();

  try {
    const upstream = await fetch(source.toString(), { redirect: 'error' });
    const contentType = upstream.headers.get('content-type') || '';
    if (!upstream.ok || !contentType.startsWith('image/')) return res.status(502).end();
    const bytes = Buffer.from(await upstream.arrayBuffer());
    if (bytes.length > 10_000_000) return res.status(413).end();
    res.setHeader('Content-Type', contentType);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).send(bytes);
  } catch {
    return res.status(502).end();
  }
}
