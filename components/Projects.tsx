'use client';

import React, { useRef, useState } from 'react';
import type { PortfolioProject } from '../lib/portfolioProjects';

type Props = { projects: PortfolioProject[] };

export default function Projects({ projects }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(projects[0]?.id ?? null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % projects.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + projects.length) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;
    else return;

    event.preventDefault();
    setSelectedId(projects[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="mx-auto flex h-[100svh] min-h-0 max-w-7xl flex-col overflow-hidden px-4 pb-12 pt-12 text-white sm:px-8 sm:pb-20 sm:pt-20">
      <header className="mb-3 shrink-0 text-center sm:mb-5">
        <h3 className="text-lg uppercase tracking-[9px] text-gray-300 sm:text-2xl sm:tracking-[20px]">Projects</h3>
        <p className="mx-auto mt-2 hidden max-w-2xl text-sm text-gray-400 sm:block">
          GIS products and applications for rural buyers, utility operations, work planning, and reliability.
        </p>
      </header>

      {selected ? (
        <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)] gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:grid-rows-1 lg:gap-4">
          <div role="tablist" aria-label="Portfolio projects" className="grid min-h-0 grid-cols-2 gap-1.5 lg:grid-cols-1 lg:grid-rows-5 lg:gap-3">
            {projects.map((project, index) => {
              const isSelected = selected.id === project.id;
              return (
                <button
                  key={project.id}
                  ref={(node) => { tabRefs.current[index] = node; }}
                  id={`project-tab-${project.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="project-panel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedId(project.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`min-w-0 rounded-xl border px-3 py-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8af0] lg:flex lg:flex-col lg:justify-center lg:px-5 lg:py-4 ${isSelected ? 'border-[#ff25e2] bg-[#413244] shadow-[inset_3px_0_0_#ff25e2]' : 'border-gray-700 bg-[#303030] hover:border-gray-500 hover:bg-[#383838]'}`}
                >
                  <span className="block text-[10px] font-medium uppercase tracking-[2px] text-[#ff8af0] lg:text-xs">{String(index + 1).padStart(2, '0')} <span className="hidden lg:inline">· {project.category || 'Project'}</span></span>
                  <span className="mt-1 block text-xs font-semibold leading-snug text-white sm:text-sm lg:mt-2 lg:text-base">{project.title}</span>
                </button>
              );
            })}
          </div>

          <article
            key={selected.id}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${selected.slug}`}
            tabIndex={0}
            className="min-h-0 overflow-y-auto overscroll-contain rounded-2xl border border-gray-700 bg-[#303030] p-4 shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8af0] sm:p-6 lg:p-8 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/30"
          >
            <header className="border-b border-gray-600 pb-5">
              <p className="text-xs uppercase tracking-[3px] text-[#ff8af0]">{selected.category || 'Project'}</p>
              <h4 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">{selected.title}</h4>
              {selected.role && <p className="mt-2 text-sm text-gray-400">{selected.role}</p>}
              <p className="mt-4 max-w-3xl leading-relaxed text-gray-200">{selected.summary}</p>
              {(selected.linkToBuild || selected.repositoryUrl) && (
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {selected.linkToBuild && <a className="rounded-full border border-[#ff25e2] px-4 py-2 font-medium text-white hover:bg-[#ff25e2]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8af0]" href={selected.linkToBuild}>Explore live site ↗</a>}
                  {selected.repositoryUrl && <a className="rounded-full border border-gray-500 px-4 py-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8af0]" href={selected.repositoryUrl}>View repository ↗</a>}
                </div>
              )}
            </header>

            <div className={`mt-6 grid gap-6 ${selected.gallery.length ? 'xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]' : ''}`}>
              <div className={selected.gallery.length ? 'order-2 xl:order-1' : ''}>
                {selected.bullets.length > 0 && (
                  <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                    {selected.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {selected.businessImpact && <p className="mt-6 border-l-2 border-[#ff25e2] pl-4 text-sm leading-relaxed text-gray-200">{selected.businessImpact}</p>}
                {selected.metric && (
                  <aside className="mt-6 rounded-xl border border-[#ff25e2]/40 bg-[#262626] p-4" aria-label={`${selected.metric.status}: ${selected.metric.label}`}>
                    <p className="text-xs uppercase tracking-[2px] text-[#ff8af0]">{selected.metric.status}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{selected.metric.value}</p>
                    <p className="text-sm font-medium text-gray-100">{selected.metric.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-300">{selected.metric.context}</p>
                  </aside>
                )}
                {selected.techLabels.length > 0 && (
                  <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                    {selected.techLabels.map((tech) => <li key={tech} className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300">{tech}</li>)}
                  </ul>
                )}
              </div>

              {selected.gallery.length > 0 && (
                <div className={`order-1 grid content-start gap-3 xl:order-2 ${selected.gallery.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {selected.gallery.map((image, index) => (
                    <figure key={image.url} className={`overflow-hidden rounded-xl border border-gray-700 bg-[#242424] ${selected.gallery.length > 2 && index === 0 ? 'col-span-2' : ''}`}>
                      <img className="h-auto w-full" src={image.url} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                      {image.caption && <figcaption className="px-3 py-2 text-xs text-gray-400">{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      ) : <p className="text-center text-gray-300">No projects are published yet.</p>}
    </div>
  );
}
