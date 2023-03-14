'use client';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex h-screen w-screen max-w-5xl flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://media.discordapp.net/attachments/1068307172158619720/1084292392208846899/PortfolioHeading.jpg?width=974&height=502"
              alt=""
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                Project {i + 1} of {projects.length}:{' '}
                <span className="underline decoration-[#ff25e2]/50">
                  Name...
                </span>
              </h4>
              <p className="text-center text-lg md:text-left">
                Explanation of the project goes here. Explanation of the project
                goes here. Explanation of the project goes here. Explanation of
                the project goes here. Explanation of the project goes here.
                Explanation of the project goes here
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[25%] left-0 h-[500px] w-full -skew-x-12 bg-[#ff25e2]/10" />
    </motion.div>
  );
}
