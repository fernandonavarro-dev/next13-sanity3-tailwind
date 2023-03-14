'use client';
import {
  SiDigitalocean,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';
import React from 'react';

import Skill from './Skill';
type Props = {};

export default function Skills({}: Props) {
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

      <h3 className="absolute top-36 text-center text-sm uppercase tracking-[3px] text-gray-500">
        hover for projects completed
      </h3>
      <div className="grid grid-cols-4 gap-4">
        <SiJavascript
          title="JavaScript"
          size={80}
          color="default"
          className="rounded-full "
        />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
