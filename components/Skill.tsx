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
        className=" h-14 w-14 rounded-full bg-[#303030] border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale sm:h-20 sm:w-20 md:h-24 md:w-24 xl:h-28 xl:w-28"
      />
      <div className="absolute z-0 h-14 w-14 sm:h-20 sm:w-20 rounded-full opacity-0 transition duration-300 ease-in-out  group-hover:bg-white group-hover:opacity-80 xs:h-14 xs:w-14 md:h-24 md:w-24 xl:h-28 xl:w-28">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black opacity-100 md:text-3xl">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
