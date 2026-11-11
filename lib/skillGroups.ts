export type SkillGroupId = 'gis' | 'frontend' | 'tools';

export const skillGroups: { id: SkillGroupId; title: string }[] = [
  { id: 'gis', title: 'GIS & mapping' },
  { id: 'frontend', title: 'Frontend' },
  { id: 'tools', title: 'Supporting tools' },
];

const defaultGroupByTitle: Record<string, SkillGroupId> = {
  arcgis: 'gis',
  mapbox: 'gis',
  'react.js': 'frontend',
  react: 'frontend',
  typescript: 'frontend',
  javascript: 'frontend',
  'next.js': 'frontend',
  'tailwind css': 'frontend',
  'material ui': 'frontend',
};

const defaultOrder: Record<string, number> = {
  arcgis: 0,
  mapbox: 1,
  'react.js': 0,
  react: 0,
  typescript: 1,
  'next.js': 2,
  javascript: 3,
  'tailwind css': 4,
  'material ui': 5,
};

export type StackItem = { id: string; title: string; group: SkillGroupId; order?: number };

export function groupStack(skills: Skill[], hasTypeScriptRecord: boolean): Record<SkillGroupId, StackItem[]> {
  const items: StackItem[] = skills.map((skill) => {
    const title = skill.title.trim();
    const key = title.toLowerCase();
    return {
      id: skill._id,
      title,
      group: skill.category || defaultGroupByTitle[key] || 'tools',
      order: skill.displayOrder ?? defaultOrder[key],
    };
  });

  if (!hasTypeScriptRecord) {
    items.push({ id: 'typescript-starter', title: 'TypeScript', group: 'frontend', order: 1 });
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
