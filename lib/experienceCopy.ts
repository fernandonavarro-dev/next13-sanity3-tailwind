export const defaultPgePoints = [
  'Built React, TypeScript, and ArcGIS mapping and dashboard features for utility operations, outage reporting, and work planning.',
  'Contributed GIS views to a broader Situational Report product credited with 6,800 manual hours saved to date on a 2025 program slide; this is a team-level result, not my individual total.',
  'Developed spatial-search tools within an electric-distribution work-bundling program that reported $56.6M in total savings through October on a 2025 program slide, including megabundles; the result is program-wide.',
  'Enhanced transmission planning maps and Near Me workflows within a program forecasting $4.4M in 2026 savings; that amount is projected, not realized.',
];

// Keep newly edited Sanity bullets authoritative. Only replace the known legacy
// PG&E copy until a Public portfolio bullets override is published in Studio.
const legacyPgeLead = 'Contribute to the development of web applications and dashboards focused on optimizing operational efficiencies';

export function publicExperience(experience: Experience): Experience {
  const publicImage = experience.company?.trim() === 'University of California Transportation Center'
    ? {
      ...experience,
      companyImageUrl: '/experience/uctc-mark.svg',
      companyImage: { ...experience.companyImage, alt: 'UCTC initials graphic' },
    }
    : experience;
  if (publicImage.publicPoints?.length) return { ...publicImage, points: publicImage.publicPoints };
  if (publicImage.company?.trim() === 'PG&E' && publicImage.points?.[0]?.startsWith(legacyPgeLead)) {
    return { ...publicImage, points: defaultPgePoints };
  }
  return publicImage;
}
