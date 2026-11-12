export const resumeHref = 'https://fn-dev.com/Fernando-Navarro-Resume.pdf';

// Static screenshots stay on the site's own host. Sanity uploads are served
// through a same-origin route so portfolio image links do not expose a CDN URL.
export function projectImageHref(source: string): string {
  if (source.startsWith('/case-studies/')) return source;

  try {
    const url = new URL(source);
    if (url.hostname.endsWith('.vercel.app') && url.pathname.startsWith('/case-studies/')) {
      return url.pathname;
    }
    if (url.protocol === 'https:' && url.hostname === 'cdn.sanity.io' &&
      url.pathname.startsWith('/images/6k0t48w0/production/')) {
      return `/api/portfolio-image?src=${encodeURIComponent(url.toString())}`;
    }
  } catch {
    // Keep other project URLs unchanged rather than inventing a broken path.
  }

  return source;
}
