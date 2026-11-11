'use client';
import React from 'react';

import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
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
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-xl">
          {pageInfo.heroTagline || 'Building React, TypeScript, and ArcGIS tools for utilities and infrastructure.'}
        </p>
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
