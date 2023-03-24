// 'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.imageUrl}
        title={skill.title}
        className=" h-20 w-20 rounded-full bg-[#303030] border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-24 md:w-24 xl:h-28 xl:w-28"
      />
      <div className="absolute z-0 h-20 w-20 rounded-full opacity-0 transition duration-300 ease-in-out  group-hover:bg-white group-hover:opacity-80 md:h-24 md:w-24 xl:h-28 xl:w-28">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
