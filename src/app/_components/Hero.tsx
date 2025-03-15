import { JSX } from 'react';
import Bastian from './images/png/me.jpeg';
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
/* import wallpaper1 from './images/svg/wallpaper1.svg'; */

const Technologie = ({ Icon, text }: { Icon: JSX.ElementType, text: string }) => {
  return (
    <div className='flex gap-5 items-center bg-gray-950 text-white w-fit px-3 py-1 rounded-4xl'>
      <Icon className="w-6 h-6" />
      <span className="text-xl">{text}</span>
    </div>
  );
};

const Component = () => {
  return (
    <section className='flex justify-between items-center mx-56'>
      {/* <Image src={wallpaper1} alt={"wallpaper1"} className="absolute -z-10 right-96"></Image> */}
      <div>
        <h1 className="text-4xl font-bold">Front End Developer</h1>
        <div className='flex gap-x-7 gap-y-2 flex-wrap mt-10'>
          <Technologie Icon={FaReact} text="React" />
          <Technologie Icon={FaAngular} text="Angular" />
          <Technologie Icon={SiNextdotjs} text="Next.js" />
          <Technologie Icon={SiPostgresql} text="PostgreSQL" />

        </div>
      </div>
      <div>
        <Image src={Bastian} alt="Bastián's image" className="rounded-full w-96 min-w-96 aspect-square" />
      </div>
    </section>
  );
};

export default Component;
