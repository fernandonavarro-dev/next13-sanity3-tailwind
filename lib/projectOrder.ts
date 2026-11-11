// These four documents predate the editable displayOrder field. Sanity's
// creation/update timestamps describe CMS edits, not when the work was done.
// Keep an explicit interim order until the editor assigns displayOrder values.
const legacyOrder: Record<string, number> = {
  '0697dc30-5c03-447f-ba09-9c7d9ca8afb7': 10, // TRAiVEL.ai
  '50b719c3-c2ce-4bb6-a3db-19d81e119984': 20, // Your AI Guide
  '22bf08e1-d8fa-42d3-8388-a9931da7119d': 30, // AI-Powered Image Generator
  '0980bdfe-a028-473f-9b01-9d3fd092a070': 40, // Berkeley GIS Database project
};

export function orderProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aOrder = a.displayOrder ?? legacyOrder[a._id] ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.displayOrder ?? legacyOrder[b._id] ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder || a.title.localeCompare(b.title);
  });
}
