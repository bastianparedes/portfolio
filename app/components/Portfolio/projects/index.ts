import baTester from './ba-tester.webp';
import falabella from './falabella.webp';
import pdfConstructor from './pdf-constructor.webp';
import qrGenerator from './qr-generator.webp';
import tstMaker from './tstmaker.webp';

const projects = [
  {
    description:
      'A/B Tester de la plataforma. Desarrollo nuevas versiones de la página y comparo la antigua versión con la nueva para recolectar datos y así desplegar la que obtenga mejores resultados',
    image: falabella,
    link: 'https://www.falabella.com/falabella-cl/',
    name: 'Falabella',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'TypeScript',
      'Dinamic Yield',
      'Adobe Experience Data Collection'
    ]
  },
  {
    description:
      'Aplicación web que permite implementar pruebas A/B en cualquier página web mediante la recopilación de los tests por parte de los desarrolladores y la disponibilidad de un paquete a través de un endpoint',
    github: 'https://github.com/bastianparedes/ba-tester',
    image: baTester,
    link: 'https://github.com/BastianParedes/ba-tester/',
    name: 'BA-Tester',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'TypeScript',
      'Postgresql',
      'Graphql',
      'DrizzleOrm'
    ]
  },
  {
    description:
      'Es una página web que recibe las imágenes cargadas por el usuario, las configura a gusto y finalmente genera un archivo PDF que se guarda en el computador del mismo. Todo el proceso ocurre del lado del Front-end',
    github: 'https://github.com/BastianParedes/pdf-constructor/',
    image: pdfConstructor,
    link: '/pdf-constructor',
    name: 'PDF Constructor',
    technologies: ['React.js', 'SortableJS', 'jsPDF']
  },
  {
    description:
      'Aplicación de escritorio que construye evaluaciones de seleción única de matemática para el nivel secundario de las escuelas chilenas',
    github: 'https://github.com/BastianParedes/tstmaker/',
    image: tstMaker,
    name: 'TstMaker',
    technologies: ['Python3', 'Tkinter', 'MiKTeX']
  },
  {
    description:
      'Aplicación que genera el código QR correspondiente a la URL ingresada',
    github: 'https://github.com/BastianParedes/qr-generator/',
    image: qrGenerator,
    link: '/qr-generator',
    name: 'QR generator',
    technologies: ['QRcode', 'Next.js']
  }
];

export default projects;
