const constants = {
  HOME: {
    NAME: 'Bastián Paredes',
    JOB: 'Front End Developer'
  },
  NAV: {
    BUTTONS: {
      HOME: {
        ID: 'home',
        TITLE: 'Home'
      },
      ABOUT: {
        ID: 'about',
        TITLE: 'About'
      },
      PORTFOLIO: {
        ID: 'portfolio',
        TITLE: 'Porftolio'
      }
    }
  },
  ABOUT: {
    SECTION: {
      TITLE: 'About me'
    },
    DESCRIPTION_PART_1: 'Soy Bastián Paredes,',
    DESCRIPTION_PART_2:
      'Un Front End Developer con experiencia construyendo sitios web con responsive design que conecten front-end y back-end. Me especializo en el uso de JavaScript, React.js y Next.js.',
    DESCRIPTION_PART_3:
      'Siempre busco mejorar mis habilidades desarrollando proyectos propios a la par de mi trabajo. Estoy constantemente estudiando acerca de las nuevas tecnologías para actualizar mi repertorio de herramientas para que los códigos de mis creaciones sean fáciles de leer, seguros y eficientes.',
    CV: {
      MESSAGE: 'Ver currículum',
      LINK: '/api/cv'
    },
    SKILLS: {
      TITLE: 'Skills',
      LIST: [
        {
          SRC: 'html5.png',
          NAME: 'HTML 5'
        },
        {
          SRC: 'css3.png',
          NAME: 'CSS 3'
        },
        {
          SRC: 'javascript.png',
          NAME: 'JavaScript'
        },
        {
          SRC: 'typescript.png',
          NAME: 'TypeScript'
        },
        {
          SRC: 'react.js.png',
          NAME: 'React.js'
        },
        {
          SRC: 'next.js.png',
          NAME: 'Next.js'
        },
        {
          SRC: 'python3.png',
          NAME: 'Python 3'
        },
        {
          SRC: 'mysql.png',
          NAME: 'MySql'
        },
        {
          SRC: 'mongodb.svg',
          NAME: 'MongoDB'
        }
      ]
    }
  },
  PORTFOLIO: {
    PROJECTS: [
      {
        NAME: 'Falabella',
        LINK: 'https://www.falabella.com/falabella-cl/',
        IMAGE: 'falabella.png',
        GITHUB: '',
        DESCRIPTION:
          'A/B Tester de la plataforma. Desarrollo nuevas versiones de la página y comparo la antigua versión con la nueva para recolectar datos y así desplegar la que obtenga mejores resultados.',
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
        NAME: 'Tu Salad',
        LINK: 'https://tusalad.vercel.app/',
        IMAGE: 'tu-salad.png',
        GITHUB: 'https://github.com/BastianParedes/tusalad/',
        DESCRIPTION:
          'Página web de venta de bowls de ensalada que incluye un carrito de compras y una pasarela de pago construida mediante el servicio Webpay plus de Transbank. Las compras quedan registradas en una base de datos para consultar su estado.',
        TECHNOLOGIES: ['React.js', 'Next.js', 'TypeScript', 'WebPay']
      },
      {
        NAME: 'PDF Constructor',
        LINK: 'https://pdf-constructor.vercel.app/',
        IMAGE: 'pdf-constructor.png',
        GITHUB: 'https://github.com/BastianParedes/pdf-constructor/',
        DESCRIPTION:
          'Es una página web que recibe las imágenes cargadas por el usuario, las configura a gusto y finalmente genera un archivo PDF que se guarda en el computador del mismo. Todo el proceso ocurre del lado del Front-end.',
        TECHNOLOGIES: ['React.js', 'SortableJS', 'jsPDF']
      },
      {
        NAME: 'My Global Chat',
        LINK: 'https://my-global-chat.vercel.app/',
        IMAGE: 'my-global-chat.png',
        GITHUB: 'https://github.com/BastianParedes/my-global-chat/',
        DESCRIPTION:
          'Aplicación web que pide al usuario un nombre y lo lleva a una sala donde todos los conectados a la página en ese momento pueden conversar al mismo tiempo.',
        TECHNOLOGIES: ['React.js', 'Socket.IO']
      },
      {
        NAME: 'TstMaker',
        LINK: '',
        IMAGE: 'tstmaker.png',
        GITHUB: 'https://github.com/BastianParedes/tstmaker/',
        DESCRIPTION:
          'Aplicación de escritorio que construye evaluaciones de seleción única de matemática para el nivel secundario de las escuelas chilenas.',
        TECHNOLOGIES: ['Python3', 'Tkinter', 'MiKTeX']
      }
    ]
  },
  CONTACT: {
    LINKS: {
      GITHUB: 'https://github.com/BastianParedes',
      EMAIL: '/contact',
      LINKEDIN: 'https://www.linkedin.com/in/bastianparedes/',
      INSTAGRAM: 'https://www.instagram.com/bastian.p.95/'
    }
  },
  FOOTER: {
    MESSAGE: 'Portfolio designed by @Bastián Paredes, © 2022'
  }
};

export default constants;
