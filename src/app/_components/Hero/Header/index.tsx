'use client';

import React from 'react';
import Image from 'next/image';
import me from './me.jpeg';
import About from './About';
import Experience from './Experience';
import Project from './Projects';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslation } from '../../../_contexts/translation';

const Component = () => {
  const parts = [About, Experience, Project];
  const { translation } = useTranslationContext();

  return (
    <div className="min-h-svh w-svw flex justify-center items-center">
      <header className="flex flex-col p-10 gap-2 items-center justify-center md:flex-row md:items-center lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold text-white md:text-8xl lg:text-9xl">
            {translation.hero.name}
          </h1>
          <h2 className="text-5xl text-white md:text-7xl">
            {translation.hero.title}
          </h2>
          <ul className="text-3xl text-white">
            {parts.map((Part, index) => (
              <li key={index}>
                <Part />
              </li>
            ))}
          </ul>
          <ul className="flex gap-5 text-4xl">
            <li>
              <a
                className="text-slate-200 hover:text-white"
                href="https://github.com/BastianParedes"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className="text-slate-200 hover:text-white"
                href="https://www.linkedin.com/in/bastianparedes/"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className="text-slate-200 hover:text-white"
                href="/contact"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <IoMdMail />
              </a>
            </li>
            <li>
              <a
                className="text-slate-200 hover:text-white"
                href="https://www.instagram.com/bastian.p.95/"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-full overflow-hidden w-52 aspect-square md:w-96 md:h-fit lg:w-96">
          <Image
            alt={'Bastián Paredes'}
            className="w-full h-full object-cover"
            loading="lazy"
            src={me}
          />
        </div>
      </header>
    </div>
  );
};

export default Component;
