import React from 'react';
import type { PortfolioProject } from '../lib/portfolioProjects';

type Props = { projects: PortfolioProject[] };

export default function Projects({ projects }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-white sm:px-10">
      <h3 className="text-center text-2xl uppercase tracking-[12px] text-gray-500 sm:tracking-[20px]">
        Projects
      </h3>
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base">
        GIS products and applications for rural buyers, utility operations, work planning, and reliability.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project) => (
          <article key={project.id} className="rounded-2xl border border-gray-700 bg-[#303030] p-5 sm:p-8">
            <div className={`grid gap-8 ${project.gallery.length ? 'lg:grid-cols-2' : ''}`}>
              <div>
                <p className="text-xs uppercase tracking-[3px] text-[#ff8af0]">
                  {project.category || 'Project'}
                </p>
                <h4 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                  {project.title}
                </h4>
                {project.role && <p className="mt-2 text-sm text-gray-400">{project.role}</p>}
                <p className="mt-5 leading-relaxed text-gray-200">{project.summary}</p>
              </div>

              {project.gallery.length > 0 && (
                <div className={`grid content-start gap-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ${project.gallery.length > 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.gallery.map((image, index) => (
                    <figure key={image.url} className={`overflow-hidden rounded-xl border border-gray-700 bg-[#242424] ${project.gallery.length > 2 && index === 0 ? 'sm:col-span-2' : ''}`}>
                      <img className="h-auto w-full" src={image.url} alt={image.alt} loading="lazy" />
                      {image.caption && <figcaption className="px-4 py-3 text-xs text-gray-400">{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              <div className={project.gallery.length ? 'lg:col-start-1' : ''}>
                {project.bullets.length > 0 && (
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                    {project.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {project.businessImpact && (
                  <p className="mt-5 border-l-2 border-[#ff25e2] pl-4 text-sm leading-relaxed text-gray-200">
                    {project.businessImpact}
                  </p>
                )}
                {project.metric && (
                  <aside className="mt-5 rounded-xl border border-[#ff25e2]/40 bg-[#262626] p-4" aria-label={`${project.metric.status}: ${project.metric.label}`}>
                    <p className="text-xs uppercase tracking-[2px] text-[#ff8af0]">{project.metric.status}</p>
                    <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{project.metric.value}</p>
                    <p className="text-sm font-medium text-gray-100">{project.metric.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-300">{project.metric.context}</p>
                  </aside>
                )}
                {project.techLabels.length > 0 && (
                  <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                    {project.techLabels.map((tech) => (
                      <li key={tech} className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300">{tech}</li>
                    ))}
                  </ul>
                )}
                {(project.linkToBuild || project.repositoryUrl) && (
                  <div className="mt-6 flex flex-wrap gap-5 text-sm">
                    {project.linkToBuild && <a className="underline decoration-[#ff25e2] underline-offset-4" href={project.linkToBuild}>Explore live site</a>}
                    {project.repositoryUrl && <a className="underline decoration-[#ff25e2] underline-offset-4" href={project.repositoryUrl}>View repository</a>}
                  </div>
                )}
              </div>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
