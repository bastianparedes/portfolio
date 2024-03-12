'use client';

import { useState } from 'react';
import Modal from '../../../Modal';
import { useTranslation } from '../../../../_contexts/translation';

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const { translation } = useTranslation();
  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  const jobs = [
    {
      company: translation.experience.jobs.falabella.name,
      position: translation.experience.jobs.falabella.position,
      description: translation.experience.jobs.falabella.description,
      startYear: 2022,
      endYear: null,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'ReactJS',
        'NextJS',
        'Fastify',
        'Docker'
      ]
    },
    {
      company: translation.experience.jobs.freelance.name,
      position: translation.experience.jobs.freelance.position,
      description: translation.experience.jobs.freelance.description,
      startYear: 2021,
      endYear: null,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'ReactJS',
        'NextJS',
        'SQL',
        'PostgreSQL',
        'MySql',
        'Docker'
      ]
    },
    {
      company: translation.experience.jobs.paideia.name,
      position: translation.experience.jobs.paideia.position,
      description: translation.experience.jobs.paideia.description,
      startYear: 2019,
      endYear: 2022,
      technologies: ['Python']
    },
    {
      company: translation.experience.jobs.schools.name,
      position: translation.experience.jobs.schools.position,
      description: translation.experience.jobs.schools.description,
      startYear: 2017,
      endYear: 2022,
      technologies: ['JavaScript', 'NodeJS', 'Python']
    }
  ];

  return (
    <>
      <button onClick={openModal}>{translation.experience.button}</button>
      {showContent && (
        <Modal closeModal={closeModal}>
          <table>
            {jobs.map((job) => (
              <tr key={job.company + job.description}>
                <td className="align-top">
                  <span className="text-xl text-gray-400">
                    {job.startYear} - {job.endYear ?? 'ACTUALIDAD'}
                  </span>
                </td>
                <td className="flex flex-col gap-3 mb-10">
                  <span className="text-3xl">{job.company}</span>
                  <span className="text-2xl">{job.position}</span>
                  <p className="text-xl">{job.description}</p>
                  <ul className="flex gap-5 text-sm">
                    {job.technologies.map((technologie) => (
                      <li key={technologie}>
                        <span className="rounded-full py-1 px-3 bg-green-800/50">
                          {technologie}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </table>
        </Modal>
      )}
    </>
  );
};

export default Component;
