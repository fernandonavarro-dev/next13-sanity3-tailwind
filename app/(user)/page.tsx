// 'use client';
import React from 'react';
// import { groq } from 'next-sanity';
// import { client } from '../../lib/sanity.client';
// import BlogList from '../../components/BlogList';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Contact from '../../components/Conatact';
import Link from 'next/link';

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

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section> */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 rounded-full filter hover:text-[#ff25e2]/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </footer>
      </a>
    </div>
  );
}
