'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={pageInfo.profilePicUrl}
        className="md:h-95 -mb-20 mt-10 md:mt-0 h-36 w-36 sm:h-56 sm:w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-8 px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          A bit about me
        </h4>
        <p className="text-xs sm:text-sm md:text-base">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
