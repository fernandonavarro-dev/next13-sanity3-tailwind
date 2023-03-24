'use client';
import { motion } from 'framer-motion';
import React from 'react';

import ExperienceCard from './ExperienceCard';

type Props = {
  experiences: Experience[];
  skills: Skill[];
};

export default function Experience({ experiences, skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div className="mt-28 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/20">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience._id}
            experience={experience}
            skills={skills}
          />
        ))}
      </div>
    </motion.div>
  );
}
