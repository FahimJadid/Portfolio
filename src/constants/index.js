import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  firebase,
  express,
  material_ui,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  nextjs,
  vue,
  vite,
  nestjs,
  nginx,
  npm,
  c_plus,
  python,
  bootstrap,
  mongodb,
  figma,
  docker,
  postgresql,
  rubyrails,
  mysql,
  graphql,
  successo,

  campulse,
  auth,
  zephora,
  jatri,
  devs,
  payment
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
  // {
  //   name: 'Next JS',
  //   icon: nextjs,
  // },
  {
    name: 'MongoDB',  
    icon: mongodb,
  },
  // {
  //   name: 'Firebase',
  //   icon: firebase,
  // },
  {
    name: 'Express JS', 
    icon: express,
  },
  // {
  //   name: 'Material UI',
  //   icon: material_ui,
  // },
  {
    name: 'MySQL',
    icon: mysql,
  },
  // {
  //   name: 'Vue JS',
  //   icon: vue,
  // },
  // {
  //   name: 'Vite JS',
  //   icon: vite,
  // },
  {
    name: 'Nest JS',
    icon: nestjs,
  },
  // {
  //   name: 'Nginx',
  //   icon: nginx,
  // },
  {
    name: 'npm',
    icon: npm,
  },
  // {
  //   name: 'C++',
  //   icon: c_plus,
  // },
  {
    name: 'Python',
    icon: python,
  },
  // {
  //   name: 'Bootstrap',
  //   icon: bootstrap,
  // },
  
];

const experiences = [
  {
    title: 'Back-End Developer Intern',
    company_name: 'Jatri Services Ltd.',
    icon: jatri,
    iconBg: '#f3f3f3',
    date: 'Jun 2023 - Aug 2023',
  },
  {
    title: 'Software Engineer',
    company_name: '100Devs',
    icon: devs,
    iconBg: '#f3f3f3',
    date: 'Sep 2022 - Present',
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'random',
  //   icon: random,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'random',
  //   icon: random,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Payment-Service',
    description: 'A payment-service that facilitates the processing of online transactions for online businesses.',
    tags: [
      {
        name: 'nestjs',
        color: 'purple-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'SSLCOMMERZ',
        color: 'blue-text-gradient',
      },
    ],
    image: payment,
    repo: 'https://github.com/FahimJadid/payment-service/',
    demo: 'https://github.com/FahimJadid/payment-service/',
  },
  {
    id: 'project-2',
    name: 'Successo App',
    description:
      'Successo is a comprehensive JOB & Career Guidance platform designed for students.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: successo,
    repo: 'https://github.com/FahimJadid/successo-career-app/',
    demo: 'https://github.com/FahimJadid/successo-career-app/',
  },
  {
    id: 'project-3',
    name: 'Campulse+',
    description: 'Campulse+ is a full-stack social networking application for students & faculties.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'socket.io',
        color: 'black-text-gradient',
      },
    ],
    image: campulse,
    repo: 'https://github.com/FahimJadid/campulse-app-final/',
    demo: 'https://github.com/FahimJadid/campulse-app-final/',
  },
  {
    id: 'project-4',
    name: 'Role-based Auth',
    description: `This Role-based authorization simplifies access control within an application.`,
    tags: [
      {
        name: 'nestjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoose',
        color: 'green-text-gradient',
      },
      {
        name: 'jwt',
        color: 'black-text-gradient',
      },
    ],
    image: auth,
    repo: 'https://github.com/FahimJadid/role-based-auth-nestJS/',
    demo: 'https://github.com/FahimJadid/role-based-auth-nestJS/',
  },
  {
    id: 'project-5',
    name: 'Zephora Ecommerce',
    description:
      'Zephora is a demo E-commerce platform where user can order products with online transactions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongo',
        color: 'green-text-gradient',
      },
      {
        name: 'sslcommerz',
        color: 'blue-text-gradient',
      },
    ],
    image: zephora,
    repo: 'https://github.com/FahimJadid/zephora-e-commerce/',
    demo: 'https://github.com/FahimJadid/zephora-e-commerce/',
  },
];

export { services, technologies, experiences, projects };
