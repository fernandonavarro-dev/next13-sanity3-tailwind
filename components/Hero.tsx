'use client';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Fernando Navarro",
      'Coding cool stuff with React.js',
      'Learning AI prompt engineering, superpowers stuff...',
    ],
    loop: true,
    delaySpeed: 1800,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-center">
      <BackgroundCircles />
      <img
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src={pageInfo.heroImageUrl}
        alt=""
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo.roleOne}
        </h2>
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          {pageInfo.roleTwo}
        </h2>
        <h2>
          <span className="px-10 text-5xl font-semibold lg:text-6xl">
            {text}
            <Cursor cursorColor="#ff25e2" />
          </span>
        </h2>
        <div>
          <Link
            href="#about"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="heroButton">About</button>
          </Link>
          <Link
            href="#experience"
            onClick={() => {
              const element = document.getElementById('experience');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="heroButton">Experience</button>
          </Link>
          <Link
            href="#skills"
            onClick={() => {
              const element = document.getElementById('skills');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="heroButton">Skills</button>
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="heroButton">Projects</button>
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
