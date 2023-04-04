import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  experience: Experience;
  skills: Skill[];
};

export default function ExperienceCard({ experience, skills }: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#303030] p-6 md:p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={experience.companyImageUrl}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-l sm:text-xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="mt-1 text:l sm:text-xl md:text-2xl font-bold">
          {experience.company}
        </p>
        <div className="my-2 flex space-x-2">
          {experience.technologies.map((technology) => {
            const techRef = skills.find(
              (skill) => skill._id === technology._ref
            );
            return (
              <img
                key={technology._ref}
                className="h-6 w-6 md:h-10 md:w-10 bg-transparent rounded-full"
                src={techRef?.imageUrl}
                alt={techRef?.title}
              />
            );
          })}
        </div>
        <p className="py-1 sm:py-3 md:py-5 text-gray-300">
          {new Date(experience.dateStarted).toLocaleString('en-US', {
            month: 'short',
            year: 'numeric',
          })}{' '}
          -{' '}
          {experience.dateEnded
            ? new Date(experience.dateEnded).toLocaleString('en-US', {
                month: 'short',
                year: 'numeric',
              })
            : 'Present'}
        </p>

        <ul className="ml-3 md:ml-5 list-disc space-y-2 md:space-y-4 text-sm sm:text-base md:text-lg">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
