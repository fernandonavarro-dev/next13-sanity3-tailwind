export type SkillGroupId = 'gis' | 'frontend' | 'tools';

export const skillGroups: { id: SkillGroupId; title: string }[] = [
  { id: 'gis', title: 'GIS & mapping' },
  { id: 'frontend', title: 'Frontend' },
  { id: 'tools', title: 'Supporting tools' },
];

const defaultGroupByTitle: Record<string, SkillGroupId> = {
  arcgis: 'gis',
  'arcgis maps sdk for javascript': 'gis',
  'maplibre gl js': 'gis',
  mapbox: 'gis',
  'react.js': 'frontend',
  react: 'frontend',
  typescript: 'frontend',
  javascript: 'frontend',
  'next.js': 'frontend',
  'tailwind css': 'frontend',
  'material ui': 'frontend',
  python: 'tools',
};

const defaultOrder: Record<string, number> = {
  arcgis: -100,
  'arcgis maps sdk for javascript': -100,
  'maplibre gl js': -90,
  mapbox: 2,
  typescript: -100,
  'react.js': 1,
  react: 1,
  'next.js': 2,
  javascript: 3,
  'tailwind css': 4,
  'material ui': 5,
  python: -100,
};

export type StackItem = { id: string; title: string; group: SkillGroupId; order?: number };

const omittedSkills = new Set([
  'stable diffusion',
  'google cloud vision api',
  'google cloud vision',
  'adobe photoshop',
  'photoshop',
  'excel spreadsheets',
  'excel',
]);

const starterSkills: { title: string; group: SkillGroupId; order: number }[] = [
  { title: 'TypeScript', group: 'frontend', order: -100 },
  { title: 'MapLibre GL JS', group: 'gis', order: -90 },
  { title: 'Python', group: 'tools', order: -100 },
];

export function groupStack(skills: Skill[]): Record<SkillGroupId, StackItem[]> {
  const knownTitles = new Set(skills.map((skill) => skill.title.trim().toLowerCase()));
  const items: StackItem[] = skills.filter((skill) => !skill.hidden && !omittedSkills.has(skill.title.trim().toLowerCase())).map((skill) => {
    const title = skill.title.trim();
    const key = title.toLowerCase();
    return {
      id: skill._id,
      title: key === 'arcgis' ? 'ArcGIS Maps SDK for JavaScript' : title,
      group: skill.category || defaultGroupByTitle[key] || 'tools',
      order: defaultOrder[key] != null && defaultOrder[key] < 0 ? defaultOrder[key] : skill.displayOrder ?? defaultOrder[key],
    };
  });

  for (const starter of starterSkills) {
    if (!knownTitles.has(starter.title.toLowerCase())) {
      items.push({ id: `${starter.title.toLowerCase().replace(/\W+/g, '-')}-starter`, ...starter });
    }
  }

  return {
    gis: items.filter((item) => item.group === 'gis').sort(compareItems),
    frontend: items.filter((item) => item.group === 'frontend').sort(compareItems),
    tools: items.filter((item) => item.group === 'tools').sort(compareItems),
  };
}

function compareItems(a: StackItem, b: StackItem) {
  return (a.order ?? 9999) - (b.order ?? 9999) || a.title.localeCompare(b.title);
}
