import {
  SiDigitalocean,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#303030] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="https://d1h96izmtdkx5o.cloudfront.net/-MU5d6MCYt79DOxkUICm.jpg?v=12"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          React.js Developer - Internal Apps
        </h4>
        <p className="mt-1 text-2xl font-bold">JUST CLICK MX</p>
        <div className="my-2 flex space-x-2">
          <SiJavascript
            title="JavaScript"
            size={40}
            color="default"
            className="rounded-full"
          />
          <SiReact
            size={40}
            title="React.js"
            color="default"
            className="rounded-full"
          />
          <SiNextdotjs
            title="Next.js"
            size={40}
            color="black"
            className="rounded-full"
          />
          <SiTailwindcss
            title="Tailwind CSS"
            size={40}
            color="default"
            className="rounded-full"
          />
          <SiMongodb
            title="MongoDB"
            size={40}
            color="default"
            className="rounded-full"
          />
          <SiGithub
            title="Github"
            size={40}
            color="#999999"
            className="rounded-full"
          />
          <SiDigitalocean
            title="Digital Ocean"
            size={40}
            color="default"
            className="rounded-full"
          />
        </div>
        <p className="py-5 uppercase text-gray-300">Started work... - Ended</p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}
