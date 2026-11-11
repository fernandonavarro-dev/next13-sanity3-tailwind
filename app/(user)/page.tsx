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
import type { Metadata } from 'next';
import { orderProjects } from '../../lib/projectOrder';

// Sanity publishes appear without a code deployment; drafts remain private.
export const revalidate = 60;

const queryPageInfo = groq`
  (*[_type == 'pageInfo'] | order(_createdAt desc))[0] {
    ...,
    "heroImageUrl": coalesce(heroImage.asset->url, heroImageUrl),
    "profilePicUrl": coalesce(profilePic.asset->url, profilePicUrl),
    "resumeUrl": resume.asset->url,
  }
`;
const querySocials = groq`
  *[_type == 'social' && coalesce(hidden, false) == false] {
    ...,
  } | order(coalesce(displayOrder, 9999) asc, title asc)
`;
const queryExperience = groq`
  *[_type == 'experience' && coalesce(hidden, false) == false] {
    ...,
    "companyImageUrl": coalesce(companyImage.asset->url, companyImageUrl),
  } | order(coalesce(displayOrder, 9999) asc, dateEnded desc)
`;
const querySkills = groq`
  *[_type == 'skill' && coalesce(hidden, false) == false] {
    ...,
    "imageUrl": coalesce(image.asset->url, imageUrl),
  } | order(coalesce(displayOrder, 9999) asc, title desc)
`;

const queryProjects = groq`
  *[_type == 'project' && coalesce(hidden, false) == false] {
    ...,
    "imageUrl": coalesce(image.asset->url, imageUrl),
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  const pageInfo = await client.fetch<PageInfo | null>(queryPageInfo);
  return {
    title: `${pageInfo?.name || 'Fernando Navarro'} | Portfolio`,
    description: pageInfo?.seoDescription || 'Portfolio of Fernando Navarro, full-stack and GIS developer.',
  };
}

export default async function HomePage() {
  const [pageInfo, socials, experience, skills, projects] = await Promise.all([
    client.fetch<PageInfo | null>(queryPageInfo),
    client.fetch<Social[]>(querySocials),
    client.fetch<Experience[]>(queryExperience),
    client.fetch<Skill[]>(querySkills),
    client.fetch<Project[]>(queryProjects),
  ]);

  if (!pageInfo) {
    throw new Error('Create and publish a Profile and homepage document in Sanity Studio.');
  }

  return (
    <div className="z-0 h-[100svh] pb-[env(safe-area-inset-bottom)] snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#ff25e2]/20">
      <Header socials={socials} email={pageInfo.email || 'fn@fn-dev.com'} />

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
        <Projects projects={orderProjects(projects)} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-2 sm:bottom-5 w-full">
        <div className="grid grid-cols-3 items-end px-5 md:px-10 xl:px-24 py-1 md:py-1">
          <span />
          <a href="#hero" className="justify-self-center">
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
          </a>
          <a
            href={pageInfo.resumeUrl || '/Fernando-Navarro-Resume(5.3).pdf'}
            download
            className="justify-self-end flex items-center text-xs md:text-sm uppercase text-gray-400 p-2 rounded-xl hover:bg-[#ff25e2]/20"
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
