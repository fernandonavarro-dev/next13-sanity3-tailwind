'use client';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
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
        src="https://media.discordapp.net/attachments/1068307172158619720/1083607143820824586/IMG-20200906-WA0057.jpg?width=377&height=502"
        alt=""
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          React.js Developer
        </h2>
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          AI Prompt engineer
        </h2>
        <h2>
          <span className="px-10 text-5xl font-semibold lg:text-6xl">
            {text}
            <Cursor cursorColor="#ff25e2" />
          </span>
        </h2>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
