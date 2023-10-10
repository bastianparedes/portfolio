const constants = {
  ABOUT: {
    CV: {
      LINK: '/files/cv.pdf',
      MESSAGE: 'Ver currículum'
    },
    DESCRIPTION_PART_1: 'Soy Bastián Paredes,',
    DESCRIPTION_PART_2:
      'Un Front End Developer con experiencia construyendo sitios web con responsive design que conecten front-end y back-end. Me especializo en el uso de JavaScript, React.js y Next.js',
    DESCRIPTION_PART_3:
      'Siempre busco mejorar mis habilidades desarrollando proyectos propios a la par de mi trabajo. Estoy constantemente estudiando acerca de las nuevas tecnologías para actualizar mi repertorio de herramientas para que los códigos de mis creaciones sean fáciles de leer, seguros y eficientes',
    SECTION: {
      TITLE: 'About me'
    },
    SKILLS: {
      LIST: [
        {
          NAME: 'HTML 5',
          SRC: 'html5.svg'
        },
        {
          NAME: 'CSS 3',
          SRC: 'css3.png'
        },
        {
          NAME: 'Sass',
          SRC: 'sass.svg'
        },
        {
          NAME: 'JavaScript',
          SRC: 'javascript.svg'
        },
        {
          NAME: 'TypeScript',
          SRC: 'typescript.svg'
        },
        {
          NAME: 'React',
          SRC: 'react.svg'
        },
        {
          NAME: 'Next.js',
          SRC: 'next.js.png'
        },
        {
          NAME: 'GraphQL',
          SRC: 'graphql.svg'
        },
        {
          NAME: 'Prisma',
          SRC: 'prisma.svg'
        },
        {
          NAME: 'Drizzle ORM',
          SRC: 'drizzle-orm.png'
        },
        {
          NAME: 'MySql',
          SRC: 'mysql.png'
        },
        {
          NAME: 'Postgresql',
          SRC: 'postgresql.png'
        },
        {
          NAME: 'MongoDB',
          SRC: 'mongodb.svg'
        },
        {
          NAME: 'Python 3',
          SRC: 'python3.png'
        },
        {
          NAME: 'Docker',
          SRC: 'docker.png'
        }
      ],
      TITLE: 'Skills'
    }
  },
  CONTACT: {
    LINKS: {
      EMAIL: '/contact',
      GITHUB: 'https://github.com/BastianParedes',
      INSTAGRAM: 'https://www.instagram.com/bastian.p.95/',
      LINKEDIN: 'https://www.linkedin.com/in/bastianparedes/'
    }
  },
  HOME: {
    JOB: 'Front End Developer',
    NAME: 'Bastián Paredes'
  },
  NAV: {
    BUTTONS: {
      ABOUT: {
        ID: 'about',
        TITLE: 'About'
      },
      HOME: {
        ID: 'home',
        TITLE: 'Home'
      },
      PORTFOLIO: {
        ID: 'portfolio',
        TITLE: 'Porftolio'
      }
    }
  },
  PORTFOLIO: {
    PROJECTS: [
      {
        DESCRIPTION:
          'A/B Tester de la plataforma. Desarrollo nuevas versiones de la página y comparo la antigua versión con la nueva para recolectar datos y así desplegar la que obtenga mejores resultados',
        IMAGE: 'falabella.webp',
        LINK: 'https://www.falabella.com/falabella-cl/',
        NAME: 'Falabella',
        TECHNOLOGIES: [
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
        DESCRIPTION:
          'Aplicación web que permite implementar pruebas A/B en cualquier página web mediante la recopilación de los tests por parte de los desarrolladores y la disponibilidad de un paquete a través de un endpoint',
        IMAGE: 'ba-tester.webp',
        LINK: 'https://github.com/BastianParedes/ba-tester/',
        NAME: 'BA-Tester',
        TECHNOLOGIES: [
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
        DESCRIPTION:
          'Es una página web que recibe las imágenes cargadas por el usuario, las configura a gusto y finalmente genera un archivo PDF que se guarda en el computador del mismo. Todo el proceso ocurre del lado del Front-end',
        GITHUB: 'https://github.com/BastianParedes/pdf-constructor/',
        IMAGE: 'pdf-constructor.webp',
        LINK: '/pdf-constructor',
        NAME: 'PDF Constructor',
        TECHNOLOGIES: ['React.js', 'SortableJS', 'jsPDF']
      },
      {
        DESCRIPTION:
          'Aplicación de escritorio que construye evaluaciones de seleción única de matemática para el nivel secundario de las escuelas chilenas',
        GITHUB: 'https://github.com/BastianParedes/tstmaker/',
        IMAGE: 'tstmaker.webp',
        NAME: 'TstMaker',
        TECHNOLOGIES: ['Python3', 'Tkinter', 'MiKTeX']
      },
      {
        DESCRIPTION:
          'Aplicación que genera el código QR correspondiente a la URL ingresada',
        GITHUB: 'https://github.com/BastianParedes/qr-generator/',
        IMAGE: 'qr-generator.webp',
        LINK: '/qr-generator',
        NAME: 'QR generator',
        TECHNOLOGIES: ['QRcode', 'Next.js']
      }
    ]
  }
};

export default constants;
