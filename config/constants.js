const constants = {
  ABOUT: {
    CV: {
      LINK: '/api/cv',
      MESSAGE: 'Ver currículum'
    },
    DESCRIPTION_PART_1: 'Soy Bastián Paredes,',
    DESCRIPTION_PART_2:
      'Un Front End Developer con experiencia construyendo sitios web con responsive design que conecten front-end y back-end. Me especializo en el uso de JavaScript, React.js y Next.js.',
    DESCRIPTION_PART_3:
      'Siempre busco mejorar mis habilidades desarrollando proyectos propios a la par de mi trabajo. Estoy constantemente estudiando acerca de las nuevas tecnologías para actualizar mi repertorio de herramientas para que los códigos de mis creaciones sean fáciles de leer, seguros y eficientes.',
    SECTION: {
      TITLE: 'About me'
    },
    SKILLS: {
      LIST: [
        {
          NAME: 'HTML 5',
          SRC: 'html5.png'
        },
        {
          NAME: 'CSS 3',
          SRC: 'css3.png'
        },
        {
          NAME: 'JavaScript',
          SRC: 'javascript.png'
        },
        {
          NAME: 'TypeScript',
          SRC: 'typescript.png'
        },
        {
          NAME: 'React.js',
          SRC: 'react.js.png'
        },
        {
          NAME: 'Next.js',
          SRC: 'next.js.png'
        },
        {
          NAME: 'Python 3',
          SRC: 'python3.png'
        },
        {
          NAME: 'MySql',
          SRC: 'mysql.png'
        },
        {
          NAME: 'MongoDB',
          SRC: 'mongodb.svg'
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
          'A/B Tester de la plataforma. Desarrollo nuevas versiones de la página y comparo la antigua versión con la nueva para recolectar datos y así desplegar la que obtenga mejores resultados.',
        GITHUB: '',
        IMAGE: 'falabella.png',
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
          'Página web de venta de bowls de ensalada que incluye un carrito de compras y una pasarela de pago construida mediante el servicio Webpay plus de Transbank. Las compras quedan registradas en una base de datos para consultar su estado.',
        GITHUB: 'https://github.com/BastianParedes/tusalad/',
        IMAGE: 'tu-salad.png',
        LINK: 'https://tusalad.vercel.app/',
        NAME: 'Tu Salad',
        TECHNOLOGIES: ['React.js', 'Next.js', 'TypeScript', 'WebPay']
      },
      {
        DESCRIPTION:
          'Es una página web que recibe las imágenes cargadas por el usuario, las configura a gusto y finalmente genera un archivo PDF que se guarda en el computador del mismo. Todo el proceso ocurre del lado del Front-end.',
        GITHUB: 'https://github.com/BastianParedes/pdf-constructor/',
        IMAGE: 'pdf-constructor.png',
        LINK: 'https://pdf-constructor.vercel.app/',
        NAME: 'PDF Constructor',
        TECHNOLOGIES: ['React.js', 'SortableJS', 'jsPDF']
      },
      {
        DESCRIPTION:
          'Aplicación web que pide al usuario un nombre y lo lleva a una sala donde todos los conectados a la página en ese momento pueden conversar al mismo tiempo.',
        GITHUB: 'https://github.com/BastianParedes/my-global-chat/',
        IMAGE: 'my-global-chat.png',
        LINK: 'https://my-global-chat-production.up.railway.app/',
        NAME: 'My Global Chat',
        TECHNOLOGIES: ['React.js', 'Socket.IO']
      },
      {
        DESCRIPTION:
          'Aplicación de escritorio que construye evaluaciones de seleción única de matemática para el nivel secundario de las escuelas chilenas.',
        GITHUB: 'https://github.com/BastianParedes/tstmaker/',
        IMAGE: 'tstmaker.png',
        LINK: '',
        NAME: 'TstMaker',
        TECHNOLOGIES: ['Python3', 'Tkinter', 'MiKTeX']
      }
    ]
  }
};

export default constants;
