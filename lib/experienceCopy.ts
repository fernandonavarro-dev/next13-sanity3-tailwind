export const defaultPgePoints = [
  'Built React and TypeScript web maps on the ArcGIS Maps SDK for JavaScript for electric distribution and transmission planning, with several app variants sharing one codebase.',
  'Built proximity (buffer) search for nearby planned and active work, plus reliability dashboards tracking SAIDI, SAIFI, CAIDI, and CEMI.',
  'Redesigned the map toolbar into grouped collapsed and expanded modes with flyout panels and config-driven tool groups.',
  'Built a popup joining funded jobs to related permits, and commercial-customer filtering with ArcGIS queries and memoized MUI Autocomplete search.',
  'Fixed layer-list state persistence and added saved, named filter views using signal-based state; extracted shared behavior into unit-tested helpers.',
  'Contributed GIS views to a broader Situational Report product credited with 6,800 manual hours saved to date on a 2025 program slide; this is a team-level result, not my individual total.',
  'Developed spatial-search tools within an electric-distribution work-bundling program that reported $56.6M in total savings through October on a 2025 program slide, including megabundles; the result is program-wide.',
  'Enhanced transmission planning maps and Near Me workflows within a program forecasting $4.4M in 2026 savings; that amount is projected, not realized.',
];

export const defaultJustClickPoints = [
  'Redesigned and consolidated order taking into a single Next.js and Node application, cutting order placement time by 37%.',
  'Built an inventory management component handling stock across multiple locations.',
  'Implemented role-based order-status workflows for three user levels.',
];

// Keep newly edited Sanity bullets authoritative. Only replace the known legacy
// PG&E copy until a Public portfolio bullets override is published in Studio.
const legacyPgeLead = 'Contribute to the development of web applications and dashboards focused on optimizing operational efficiencies';
const legacyJustClickLead = 'Re-designed and consolidated the order taking process into a single';

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
  if (publicImage.company?.trim() === 'JUST CLICK MX' && publicImage.points?.[0]?.startsWith(legacyJustClickLead)) {
    return { ...publicImage, points: defaultJustClickPoints };
  }
  return publicImage;
}
