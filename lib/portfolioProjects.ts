import starterCaseStudies from '../data/caseStudies.json';
import { isLegacyProject } from './projectOrder';

export type ProjectImage = { url: string; caption?: string; alt: string };

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  role?: string;
  summary: string;
  category?: string;
  techLabels: string[];
  bullets: string[];
  businessImpact?: string;
  gallery: ProjectImage[];
  displayOrder: number;
  linkToBuild?: string;
  repositoryUrl?: string;
};

function fromSanity(project: Project, starter?: PortfolioProject): PortfolioProject {
  const gallery = project.gallery?.map((image) => ({
    url: image.url || '',
    caption: image.caption,
    alt: image.alt || project.title,
  })).filter((image) => image.url);

  return {
    id: project._id,
    slug: project.slug?.current || starter?.slug || project._id,
    title: project.title || starter?.title || '',
    role: project.role || starter?.role,
    summary: project.summary || starter?.summary || '',
    category: project.category || starter?.category,
    techLabels: project.techLabels ?? starter?.techLabels ?? [],
    bullets: project.bullets ?? starter?.bullets ?? [],
    businessImpact: project.businessImpact || starter?.businessImpact,
    gallery: gallery ?? (project.imageUrl
      ? [{ url: project.imageUrl, alt: project.image?.alt || project.title }]
      : starter?.gallery ?? []),
    displayOrder: project.displayOrder ?? starter?.displayOrder ?? 9999,
    linkToBuild: project.linkToBuild,
    repositoryUrl: project.repositoryUrl,
  };
}

export function selectPortfolioProjects(projects: Project[]): PortfolioProject[] {
  const starter: PortfolioProject[] = starterCaseStudies.map((study) => ({
    ...study,
    id: `starter-${study.slug}`,
    category: 'Utility GIS case study',
  }));
  const bySlug = new Map(projects.filter((project) => project.slug?.current)
    .map((project) => [project.slug!.current, project]));
  const cards: PortfolioProject[] = starter.flatMap((study) => {
    const override = bySlug.get(study.slug);
    if (override?.hidden) return [];
    return [override ? fromSanity(override, study) : study];
  });

  for (const project of projects) {
    if (project.slug?.current && starter.some((study) => study.slug === project.slug?.current)) continue;
    if (project.hidden || (isLegacyProject(project._id) && !project.featured)) continue;
    cards.push(fromSanity(project));
  }

  return cards.sort((a, b) => a.displayOrder - b.displayOrder || a.title.localeCompare(b.title));
}
