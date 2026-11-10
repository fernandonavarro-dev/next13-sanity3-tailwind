'use client';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

export default function Contact({ pageInfo }: Props) {
  const email = pageInfo.email || 'fn@fn-dev.com';
  const rawPhone = pageInfo.phoneNumber || '4158537949';
  const digits = rawPhone.replace(/\D/g, '');
  const phone = digits.length === 10
    ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    : rawPhone;
  const location = pageInfo.address || 'San Francisco Bay Area';
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData, event) => {
    event?.preventDefault();
    const subject = encodeURIComponent(FormData.subject);
    const body = encodeURIComponent(`Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="mt-20 md:mt-14 flex w-fit md:w-auto flex-col space-y-3 sm:space-y-6 px-4 md:px-0">
        <h4 className="text-wr w-auto text-center max-w-md sm:max-w-l md:max-w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          {pageInfo.contactIntro || 'Always open to cool projects with good teams. Please reach out.'}
        </h4>

        <div className="space-y-4 md:space-y-10 leading-2 md:leading-0">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-5 w-5 sm:h-7 sm:w-7 animate-pulse text-[#ff25e2]" />
            <a className="text-base sm:text-xl underline" href={`tel:${digits || rawPhone}`}>{phone}</a>
          </div>
        </div>
        <div className="space-y-4 md:space-y-10 leading-2 md:leading-0">
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-5 w-5 sm:h-7 sm:w-7 animate-pulse text-[#ff25e2]" />
            <a className="text-base sm:text-xl underline" href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
        <div className="space-y-4 md:space-y-10 leading-2 md:leading-0">
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-5 w-5 sm:h-7 sm:w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-base sm:text-xl ">{location}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-2 p-1"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register('name')}
              required={true}
              placeholder="Name"
              className="contactFields flex-grow md:w-auto"
              type="text"
            />
            <input
              {...register('email')}
              required={true}
              placeholder="Email"
              className="contactFields flex-grow md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            required={true}
            placeholder="Subject"
            className="contactFields"
            type="text"
          />

          <textarea
            {...register('message')}
            required={true}
            placeholder="Message"
            className="contactFields"
          />
          <button
            type="submit"
            className="rounded-md bg-[#ff25e2]/80 py-4 md:py-5 px-10 text-lg font-bold text-gray-900 hover:bg-[#ff25e2]/40"
          >
            Open email draft
          </button>
        </form>
      </div>
    </motion.div>
  );
}
