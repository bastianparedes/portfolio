'use client';

import { useState } from 'react';
import Modal from '../../../Modal';

const jobs = [
  {
    company: 'Falabella.com',
    position: 'A/B Tester',
    description:
      'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
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
    company: 'Freelance',
    position: 'Web Developer',
    description:
      'Desarrollo sitios web que presentan información detallada sobre los productos de la empresa, garantizando una presentación efectiva y una navegación intuitiva. Enfoco mi diseño en la estética para atraer clientes, creando interfaces atractivas y fáciles de usar. Además, implemento estrategias sólidas de optimización para motores de búsqueda (SEO) con el objetivo de mejorar la visibilidad online de la empresa. Mi enfoque abarca desde la programación de los sitios hasta la estética y la optimización, asegurando una experiencia completa y positiva para los usuarios.',
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
    company: 'Colegio Paideia',
    position: 'App Developer',
    description:
      'Desarrollé una aplicación que automatiza la creación y calificación de evaluaciones, ayudando a los profesores a evitar trabajo adicional fuera de su horario laboral.',
    startYear: 2019,
    endYear: 2022,
    technologies: ['Python']
  },
  {
    company: 'Varios colegios y universidad San Sebastián',
    position: 'Profesor de programación',
    description:
      'Facilité la enseñanza de la resolución de problemas mediante lenguajes de programación, promoviendo una comprensión completa de estrategias efectivas de solución. Además, coordiné al personal docente para desarrollar actividades que facilitaran el logro de los objetivos de aprendizaje por parte de los estudiantes. Mi enfoque educativo se centró en dotar a los alumnos de habilidades prácticas en programación y fomentar la colaboración entre el personal docente para garantizar una experiencia de aprendizaje integral y exitosa.',
    startYear: 2017,
    endYear: 2022,
    technologies: ['JavaScript', 'NodeJS', 'Python']
  }
];

const Component = () => {
  const [showContent, setShowContent] = useState(false);
  const openModal = () => setShowContent(true);
  const closeModal = () => setShowContent(false);

  return (
    <>
      <button onClick={openModal}>Ver Experiencia</button>
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
