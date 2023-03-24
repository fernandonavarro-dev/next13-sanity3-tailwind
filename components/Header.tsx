'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto max-w-7xl items-start justify-between p-5 xl:items-center">
      <div className="flex items-start justify-between">
        <motion.div
          className="flex flex-row items-center"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              title={social.title}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              className="rounded-full hover:bg-[#ff25e2]/20"
            />
          ))}
        </motion.div>
        {/* <Link href="#contact"> */}
        <motion.div
          className="flex cursor-pointer flex-row items-center text-gray-300"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcon
            title="Email me"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer rounded-full hover:bg-[#ff25e2]/20 hover:text-[#ff25e2]"
            onClick={(e) => {
              e.preventDefault;
              window.location.href = 'mailto:fn@fn-dev.com';
            }}
          />
          <p
            className="ml-1 hidden text-sm uppercase text-gray-400 md:inline-flex p-2 rounded-xl hover:bg-[#ff25e2]/20"
            onClick={(e) => {
              e.preventDefault;
              window.location.href = 'mailto:fn@fn-dev.com';
            }}
          >
            Get in touch
          </p>
        </motion.div>
        {/* </Link> */}
      </div>
    </header>
  );
}
