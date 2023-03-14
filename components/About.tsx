'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function About({}: Props) {
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
        src="https://media.discordapp.net/attachments/1068307172158619720/1074520981885952050/IMG-20200906-WA0062-removebg-preview.png?width=377&height=502"
        className="md:h-95 -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">A bit about me</h4>
        <p className="text-sm">
          I'm Fernando, graduated from UC Berkeley with 3.55 GPA and have over
          two years of experience as a react/next.js developer for an ecommerce
          business with thousands of fulfilled orders and satisfied customers.
          Whether I'm designing intuitive user interfaces, optimizing
          application performance, or troubleshooting complex bugs, I bring a
          solutions-oriented mindset to every project I work on. With a deep
          understanding of React and its related technologies, I specialize in
          developing interactive and engaging web applications that deliver real
          value to users. I believe new technologies should be embraced, and as
          such, I am utilizing AI tools daily to improve my prompt engineering
          and supercharge my capabilities. Always looking for opportunities to
          work with talented developers and designers to create exceptional web
          experiences.
        </p>
      </div>
    </motion.div>
  );
}
