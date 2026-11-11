export const defaultAbout =
  'I build GIS web applications with React, TypeScript, and ArcGIS for utilities and infrastructure. At PG&E, I contribute maps and dashboards that bring spatial layers and operational context together for planning and response coordination. My background also includes full-stack applications and geospatial data work.';

export const defaultSeoDescription =
  'Fernando Navarro builds React, TypeScript, and ArcGIS web applications for utilities and infrastructure. Explore GIS projects, experience, and ways to connect.';

export const defaultLocation = 'Remote (US)';

// Existing Sanity copy is still published. Replace only these known legacy values;
// any new copy entered in Studio takes precedence without another code deploy.
const legacyAbout =
  'Proficient React/Next.js - Node.js developer with a strong background in building e-commerce applications. My expertise lies in collaborating with cross-functional teams to develop user-centric interfaces, enhance application performance, and resolve complex issues. A continuous learner, I actively leverage AI tools like ChatGPT and Github Copilot to elevate my engineering skills and remain conversant with emerging trends.';

export function getAboutText(value?: string | null) {
  const text = value?.trim();
  return !text || text === legacyAbout ? defaultAbout : text;
}

export function getLocation(value?: string | null) {
  const location = value?.trim();
  return !location || location === 'San Francisco Bay Area' ? defaultLocation : location;
}

export function getSeoDescription(value?: string | null) {
  return value?.trim() || defaultSeoDescription;
}
