'use client';

import React, { useState } from 'react';
import type { PortfolioProject } from '../lib/portfolioProjects';

type Props = { projects: PortfolioProject[] };

export default function Projects({ projects }: Props) {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <div className="mx-auto flex h-[100svh] min-h-0 max-w-6xl flex-col overflow-hidden px-4 pb-12 pt-12 text-white sm:px-8 sm:pb-20 sm:pt-20">
      <div className="shrink-0 pb-2 text-center sm:pb-6">
        <h3 className="text-lg uppercase tracking-[9px] text-gray-400 sm:text-2xl sm:tracking-[20px]">Projects</h3>
        <p className="mx-auto mt-2 hidden max-w-2xl text-xs leading-relaxed text-gray-300 sm:mt-3 sm:block sm:text-sm">
          GIS products and applications for rural buyers, utility operations, work planning, and reliability.
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5 sm:gap-3">
        {projects.map((project) => {
          const isOpen = openId === project.id;
          const buttonId = `project-button-${project.slug}`;
          const panelId = `project-panel-${project.slug}`;
          return (
          <article key={project.id} className={`flex min-h-0 flex-col overflow-hidden rounded-xl border bg-[#303030] ${isOpen ? 'flex-1 border-[#ff25e2]/60' : 'shrink-0 border-gray-700'}`}>
            <h4 className="shrink-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : project.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    setOpenId(isOpen ? null : project.id);
                  }
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-1.5 text-left hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff8af0] sm:px-6 sm:py-3"
              >
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[2px] text-[#ff8af0] sm:text-xs">{project.category || 'Project'}</span>
                  <span className="block text-sm font-semibold leading-snug sm:text-lg">{project.title}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-xl leading-none text-[#ff8af0]">{isOpen ? '−' : '+'}</span>
              </button>
            </h4>
            <div id={panelId} role="region" aria-labelledby={buttonId} className={isOpen ? 'min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-5 pt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/30 sm:px-6 sm:pb-6' : 'hidden'}>
            <div className={`grid gap-6 ${project.gallery.length ? 'lg:grid-cols-2' : ''}`}>
              <div>
                {project.role && <p className="text-sm text-gray-400">{project.role}</p>}
                <p className="mt-3 leading-relaxed text-gray-200">{project.summary}</p>
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
            </div>
          </article>
        );})}
      </div>
    </div>
  );
}
