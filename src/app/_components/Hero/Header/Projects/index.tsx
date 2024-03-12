'use client';

import { useState } from 'react';
import Modal from '../../../Modal';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const projects = [
  {
    name: 'BA Tester',
    description:
      'Aplicación web que permite implementar pruebas A/B en cualquier página web mediante la recopilación de los tests por parte de los desarrolladores y la disponibilidad de un paquete a través de un endpoint',
    technologies: ['NextJS', 'PostgreSQL', 'GraphQL', 'Webpack'],
    url: 'https://github.com/BastianParedes/ba-tester/',
    github: 'https://github.com/BastianParedes/ba-tester/'
  },
  {
    name: 'PDF Constructor',
    description:
      'Es una página web que recibe las imágenes cargadas por el usuario, las configura a gusto y finalmente genera un archivo PDF que se guarda en el computador del mismo. Todo el proceso ocurre del lado del Front-end',
    technologies: ['ReactJS'],
    url: 'https://www.bastianparedes.com/pdf-constructor',
    github: 'https://github.com/BastianParedes/pdf-constructor/'
  },
  {
    name: 'Tst Maker',
    description:
      'Aplicación de escritorio que construye evaluaciones de seleción única de matemática para el nivel secundario de las escuelas chilenas',
    technologies: ['Python', 'Tkinter', 'ExpressJS'],
    url: null,
    github: 'https://github.com/BastianParedes/tstmaker/'
  }
];

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  return (
    <>
      <button onClick={openModal}>Ver Proyectos</button>
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
                <ul className="flex gap-5 text-sm">
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
