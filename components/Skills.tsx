'use client';
import React from 'react';
import { groupStack, skillGroups } from '../lib/skillGroups';

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  const grouped = groupStack(skills);
  return (
    <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-20 pt-28 sm:px-10">
      <h3 className="text-center text-2xl uppercase tracking-[12px] text-gray-500 sm:tracking-[20px]">
        Skills
      </h3>
      <p className="mt-5 text-center text-sm text-gray-400 sm:text-base">
        Tools I use to turn spatial data into useful applications.
      </p>
      <div className="mt-10 grid w-full gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.id} aria-labelledby={`skills-${group.id}`} className={`rounded-xl border border-gray-700/70 bg-[#303030] p-5 sm:p-6 ${group.id === 'tools' ? 'md:col-span-2' : ''}`}>
            <h4 id={`skills-${group.id}`} className="text-xl font-semibold text-white">{group.title}</h4>
            <ul className="mt-5 flex flex-wrap gap-2">
              {grouped[group.id].map((skill) => (
                <li key={skill.id} className="rounded-full border border-gray-600 px-3 py-2 text-sm text-gray-200">
                  {skill.title}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
