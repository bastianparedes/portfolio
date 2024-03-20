'use client';

import { useState } from 'react';
import Modal from '../../../Modal';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { useTranslationContext } from '../../../../_contexts/translation';
import { useTogglesContext } from '../../../../_contexts/toggles';

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const { translation } = useTranslationContext();
  const { getToggle } = useTogglesContext();

  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  const projects = [
    {
      show: getToggle('show_ba_tester'),
      name: translation.projects.projects.ba_tester.name,
      description: translation.projects.projects.ba_tester.description,
      technologies: ['NextJS', 'PostgreSQL', 'GraphQL', 'Webpack'],
      url: 'https://www.bastianparedes.com/ba-tester',
      github: 'https://github.com/BastianParedes/ba-tester/'
    },
    {
      show: getToggle('show_pdf_constructor'),

      name: translation.projects.projects.pdf_constructor.name,
      description: translation.projects.projects.pdf_constructor.description,
      technologies: ['ReactJS'],
      url: 'https://www.bastianparedes.com/pdf-constructor',
      github: 'https://github.com/BastianParedes/pdf-constructor/'
    },
    {
      show: getToggle('show_short_url'),
      name: translation.projects.projects.short_url.name,
      description: translation.projects.projects.short_url.description,
      technologies: ['ReactJS', 'NextJS', 'SQLite', 'tRPC', 'Drizzle ORM'],
      url: 'https://short-url.bastianparedes.com/',
      github: 'https://github.com/bastianparedes/short-url'
    },
    {
      show: getToggle('show_tst_maker'),
      name: translation.projects.projects.tst_maker.name,
      description: translation.projects.projects.tst_maker.description,
      technologies: ['Python', 'Tkinter', 'ExpressJS'],
      url: null,
      github: 'https://github.com/BastianParedes/tstmaker/'
    }
  ].filter((job) => job.show);

  return (
    <>
      <button onClick={openModal}>{translation.projects.button}</button>
      {showContent && (
        <Modal closeModal={closeModal}>
          <div>
            {projects.map((project) => (
              <div className="flex flex-col gap-3 mb-10" key={project.name}>
                {project.url !== null ? (
                  <a
                    className="text-white flex gap-2 w-fit items-center hover:text-green-300"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="GitHub Repository"
                  >
                    {project.name} <HiMiniArrowUpRight />
                  </a>
                ) : (
                  <>
                    <span className="text-3xl">{project.name}</span>
                  </>
                )}

                <p className="text-xl">{project.description}</p>
                <ul className="flex gap-5 text-sm flex-wrap">
                  {project.technologies.map((technologie) => (
                    <li key={technologie}>
                      <span className="rounded-full py-1 px-3 bg-green-800/50">
                        {technologie}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Component;
