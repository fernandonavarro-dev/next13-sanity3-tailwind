import React from 'react';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Contact from '../../components/Conatact';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

const queryPageInfo = groq`
  *[_type=='pageInfo'] {
    ...,
  } | order(_createdAt desc)
`;
const querySocials = groq`
  *[_type=='social'] {
    ...,
  }
`;
const queryExperience = groq`
  *[_type=='experience'] {
    ...,
  } | order(dateEnded desc)
`;
const querySkills = groq`
  *[_type=='skill'] {
    ...,
  } | order(title desc)
`;

const queryProjects = groq`
  *[_type=='project'] {
    ...,
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  const pageInfoArray = await client.fetch(queryPageInfo);
  const pageInfo = pageInfoArray[0];
  const socials = await client.fetch(querySocials);
  const experience = await client.fetch(queryExperience);
  const skills = await client.fetch(querySkills);
  const projects = await client.fetch(queryProjects);

  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/20">
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experience} skills={skills} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <footer className="sticky bottom-3 sm:bottom-5 w-full cursor-pointer">
        <a href="#hero">
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
        </a>
        <div className="flex items-end justify-end mr-5 mb-2 md:mr-10 md:mb-5 xl:mr-24">
          <a
            href="/Fernando-Navarro-Resume(4.30).pdf"
            download
            className="flex items-center text-xs md:text-sm uppercase text-gray-400 md:inline-flex p-2 rounded-xl hover:bg-[#ff25e2]/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 md:h-6 md:w-6 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12zm-8 2a1 1 0 011-1h14a1 1 0 110 2H2a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            My Resume
          </a>
        </div>
      </footer>
    </div>
  );
}
