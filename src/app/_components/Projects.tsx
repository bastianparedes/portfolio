"use client";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { useState } from "react";

const technologies = Object.freeze({
  html: "html",
  css: "css",
  javaScript: "javaScript",
  typeScript: "typeScript",
  python: "python",
  node: "node",
  react: "react",
  angular: "angular",
  svelte: "svelte",
  next: "next",
  tailwind: "tailwind",
  sass: "sass",
  nest: "nest",
  express: "express",
  fastify: "fastify",
  sql: "sql",
  postgreSQL: "postgreSQL",
  mySQL: "mySQL",
  docker: "docker",
  git: "git",
  github: "github",
  gitlab: "gitlab"
});



const icons = Object.freeze([
  {
    technologie: technologies.html,
    Icon: FaHtml5,
    color: '#E34F26'
  },
  {
    technologie: technologies.css,
    Icon: FaCss3Alt,
    color: '#1572B6'
  },
  {
    technologie: technologies.javaScript,
    Icon: RiJavascriptFill,
    color: '#F7DF1E'
  },
  {
    technologie: technologies.typeScript,
    Icon: BiLogoTypescript,
    color: '#3178C6'
  },
  {
    technologie: technologies.python,
    Icon: FaPython,
    color: '#306998'
  },
  {
    technologie: technologies.node,
    Icon: FaNodeJs,
    color: '#8CC84B'
  },
  {
    technologie: technologies.react,
    Icon: FaReact,
    color: '#61DAFB'
  },
  {
    technologie: technologies.angular,
    Icon: FaAngular,
    color: '#DD0031'
  },
  {
    technologie: technologies.svelte,
    Icon: RiSvelteFill,
    color: '#FF3E00'
  },
  {
    technologie: technologies.next,
    Icon: SiNextdotjs,
    color: '#000000'
  },
  {
    technologie: technologies.sass,
    Icon: FaSass,
    color: '#CC6699'
  },
  {
    technologie: technologies.tailwind,
    Icon: SiTailwindcss,
    color: '#00BCFF'
  },
  {
    technologie: technologies.nest,
    Icon: SiNestjs,
    color: '#E0234E'
  },
  {
    technologie: technologies.express,
    Icon: SiExpress,
    color: '#000000'
  },
  {
    technologie: technologies.fastify,
    Icon: SiFastify,
    color: '#00b16a'
  },
  {
    technologie: technologies.sql,
    Icon: TbSql,
    color: '#F4C20D'
  },
  {
    technologie: technologies.postgreSQL,
    Icon: SiPostgresql,
    color: '#336791'
  },
  {
    technologie: technologies.mySQL,
    Icon: GrMysql,
    color: '#4479A1'
  },
  {
    technologie: technologies.docker,
    Icon: FaDocker,
    color: '#2496ED'
  },
  {
    technologie: technologies.git,
    Icon: FaGitAlt,
    color: '#F1502F'
  },
  {
    technologie: technologies.github,
    Icon: FaGithub,
    color: '#181717'
  },
  {
    technologie: technologies.gitlab,
    Icon: FaGitlab,
    color: '#FC6D26'
  }
]);


const experiences = Object.freeze([
  {
    company: 'Sodimac',
    position: 'Full Stack Software Engineer',
    begin: '2024',
    end: undefined,
    description: '',
    technologies: [technologies.html, technologies.css, technologies.sass, technologies.node, technologies.javaScript, technologies.typeScript, technologies.react, technologies.next, technologies.fastify, technologies.nest]
  },
  {
    company: 'Falabella Corporate Technology',
    position: 'A/B Tester Associate Full Stack Software Engineer',
    begin: '2024',
    end: '2022',
    description: '',
    technologies: [technologies.html, technologies.css, technologies.sass, technologies.javaScript, technologies.typeScript, technologies.react, technologies.next, technologies.fastify]
  },
  {
    company: 'Trilma',
    position: 'Freelance Software Engineer',
    begin: '2019',
    end: '2022',
    description: '',
    technologies: [technologies.html, technologies.css, technologies.tailwind, technologies.javaScript, technologies.typeScript, technologies.angular, technologies.nest, technologies.sql, technologies.postgreSQL]
  },
  {
    company: 'Exampy',
    position: 'Associate Full Stack Software Engineer',
    begin: '',
    end: '',
    description: '',
    technologies: [technologies.python, technologies.css, technologies.tailwind, technologies.javaScript, technologies.typeScript, technologies.angular, technologies.nest, technologies.sql, technologies.postgreSQL]
  },
  {
    company: 'Schools',
    position: 'Programming Teacher',
    begin: '2017',
    end: '2022',
    description: '',
    technologies: [technologies.javaScript, technologies.python]
  }
]);

const Component = () => {
  const [technologiesStatus, setTechnologiesStatus] = useState(Object.keys(technologies).reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc as any)[key] = true;
    return acc;
  }, {} as { [key in keyof typeof technologies]: boolean }));
  
  const toggleTechnologie = (technologie: keyof typeof technologiesStatus) => {
    setTechnologiesStatus((previousStatus) => {
      return  {
        ...previousStatus,
        [technologie]: !previousStatus[technologie]
      }
    });
  }

  const getJobHasActiveTechnologie = (technologiesinJob: (keyof typeof technologiesStatus)[]) => {
    return technologiesinJob.some((technologieinJob) => technologiesStatus[technologieinJob])
  }

  return (
    <>
      <div id="icons">
        {icons.map((icon) => <button key={icon.technologie} className="w-10 h-10 cursor-pointer" style={{
          color: technologiesStatus[icon.technologie] ? icon.color : '#929292'
        }} onClick={() => toggleTechnologie(icon.technologie)}><icon.Icon className="w-full h-full" /></button>)}
      </div>
      <div>
        {experiences.map((experience) => getJobHasActiveTechnologie(experience.technologies) ? (
          <div key={experience.position}>
            <span>{experience.company}</span>
          </div>
        ) : null)}
      </div>
    </>
  );
};

export default Component;
