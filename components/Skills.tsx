'use client';
import { motion } from 'framer-motion';
import React from 'react';
import skill from '../schemas/skill';

import Skill from './Skill';
type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3 className=" absolute top-36 text-center text-sm uppercase tracking-[3px] text-gray-500">
        hover for tech proficiency
      </h3>
      <div className="mt-24 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
