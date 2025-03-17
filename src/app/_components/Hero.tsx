'use client';

import { JSX } from 'react';
import Bastian from './images/png/me.jpeg';
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { useTranslationContext } from '../_contexts/translation';

const Technologie = ({ Icon, text }: { Icon: JSX.ElementType, text: string }) => {
  return (
    <div className='flex gap-5 items-center bg-gray-950 text-white w-fit px-3 py-1 rounded-4xl'>
      <Icon className="w-6 h-6" />
      <span className="text-xl">{text}</span>
    </div>
  );
};

const Component = () => {
  const { translation } = useTranslationContext();

  return (
    <section className=''>
      <div className='flex justify-between items-center mx-56'>
        <div>
          <h1 className="text-4xl font-bold">{translation.hero.title}</h1>
          <div className='flex gap-x-7 gap-y-2 flex-wrap mt-10'>
            <Technologie Icon={FaReact} text={translation.hero.react} />
            <Technologie Icon={FaAngular} text={translation.hero.angular} />
            <Technologie Icon={SiNextdotjs} text={translation.hero.next} />
            <Technologie Icon={SiPostgresql} text={translation.hero.postgres} />

          </div>
        </div>
        <div>
          <Image src={Bastian} alt="Bastián's image" className="rounded-full w-96 min-w-96 aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default Component;
