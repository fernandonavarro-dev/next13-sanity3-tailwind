// 'use client';
import React from 'react';
// import { groq } from 'next-sanity';
// import { client } from '../../lib/sanity.client';
// import BlogList from '../../components/BlogList';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';

type Props = {};

// const query = groq`
//   *[_type=='pageInfo'] {
//     ...,
//   } | order(_createdAt desc)
// `;

export default async function HomePage({}: Props) {
  // const pageInfo = await client.fetch(query);
  // console.log(pageInfo);

  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/20">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
