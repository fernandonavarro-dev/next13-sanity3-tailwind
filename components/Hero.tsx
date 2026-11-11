'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';

const defaultHeroLines = [
  'React + TypeScript for GIS web apps',
  'ArcGIS maps and dashboards for utilities',
  'Making infrastructure data easier to use',
];

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const configuredLines = pageInfo.heroLines?.filter((line) => line.trim());
  const words = configuredLines?.length === 3 ? configuredLines : defaultHeroLines;
  const [text] = useTypewriter({ words, loop: true, delaySpeed: 1800 });

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center space-y-5 px-4 text-center sm:space-y-8">
      <BackgroundCircles />
      <img
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src={pageInfo.heroImageUrl}
        alt={pageInfo.heroImage?.alt || `${pageInfo.name} portrait`}
      />
      <div className="z-20 max-w-4xl">
        <p className="pb-3 text-xs uppercase tracking-[5px] text-gray-400 sm:tracking-[8px]">
          {pageInfo.heroHeadline || 'GIS web developer'}
        </p>
        <h1 className="text-5xl font-semibold sm:text-6xl lg:text-7xl">
          {pageInfo.name || 'Fernando Navarro'}
        </h1>
        <h2
          aria-label={words.join('. ')}
          className="mx-auto mt-5 flex min-h-[7rem] max-w-3xl items-center justify-center text-3xl font-semibold leading-tight text-white sm:min-h-[8rem] sm:text-4xl lg:text-5xl"
        >
          <span aria-hidden="true">
            {text}
            <Cursor cursorColor="#ff25e2" />
          </span>
        </h2>
        <nav aria-label="Portfolio sections" className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            ['About', '#about'],
            ['Experience', '#experience'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="heroButton">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
