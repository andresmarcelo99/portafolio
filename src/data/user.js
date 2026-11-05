const INFO = {
  main: {
    title: 'Marcelo Garcia, Software Engineer',
    name: 'Marcelo Garcia',
    email: 'mg.andres.ga@gmail.com',
    logo: '/logo.svg',
  },

  socials: {
    github: 'https://github.com/andresmarcelo99',
    linkedin: 'https://linkedin.com/in/marcelo-garcia-01b5a2206/',
  },

  homepage: {
    lead: 'Software engineer in Honduras. I build Go backends and the React and TypeScript screens on top of them.',
    description:
      'Six years across stacks, remote on US-based teams. Lately: provisioning, live resizing and quota features on a multi-tenant Database-as-a-Service platform, the database screens in its React console, and an event-driven order service on AWS.',
  },

  about: {
    description: [
      'Since 2022 I have been a Senior Software Engineer at Number8. On a multi-tenant Database-as-a-Service platform I built Go features (the engine translation layer that turns one cluster spec into a PostgreSQL or MySQL cluster, live flavor and volume resizing, multi-tenant resource quotas) and designed its integration test framework. On the same platform I built the database screens of a React/TypeScript console: backup and restore, password management, Grafana metrics and RBAC-driven UI.',
      'I also built an order management service in .NET 8 with CQRS, queue-driven workers and four levels of automated tests, running on AWS.',
      'Before that, at Acklen Avenue, I built React, TypeScript and Redux applications and NestJS APIs over PostgreSQL, held 80%+ automated test coverage, and reviewed code and mentored junior developers.',
      'I work fully remote from Honduras, on US Central time. Spanish is my native language and my English is proficient.',
    ],
    experience: [
      {
        company: 'Number8',
        role: 'Senior Software Engineer',
        years: '2022 to now',
      },
      {
        company: 'Acklen Avenue',
        role: 'Software Engineer',
        years: '2020 to 2022',
      },
    ],
    skills: [
      'Go',
      'React',
      'TypeScript',
      'Node.js and NestJS',
      '.NET 8 and C#',
      'PostgreSQL and MySQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Automated testing',
    ],
    languages: [
      { name: 'Spanish', level: 'native' },
      { name: 'English', level: 'proficient' },
    ],
  },

  projects: [
    {
      title: 'Database-as-a-Service platform',
      description:
        'Go features on a multi-tenant platform: the engine translation layer from one cluster spec to PostgreSQL or MySQL, instance create, update and delete, live flavor and volume resizing, resource quotas, and the integration test framework.',
      stack: 'Go, PostgreSQL, MySQL, Docker',
    },
    {
      title: 'DBaaS web console',
      description:
        'Database screens in a React console: flavor and limits views, backup and restore flows, password management, Grafana metrics and RBAC-driven UI, shipped behind feature flags.',
      stack: 'React, TypeScript',
    },
    {
      title: 'Order management service',
      description:
        'A REST API with CQRS and two worker hosts over MongoDB, integrating Shopify webhooks through SQS, with Keycloak OIDC and tests at four levels.',
      stack: '.NET 8, C#, MongoDB, AWS ECS Fargate, SQS',
    },
    {
      title: 'OTA update platform',
      description:
        'Designed and built the REST API in Go for an over-the-air update system, took part in its microservice architecture design, and built dashboards for admins and end users to monitor OTA operations and device status.',
      stack: 'Go, REST APIs, React, TypeScript, Docker',
    },
    {
      title: 'Healthcare pricing application',
      description:
        'A single-page application that shows the prices of medical procedures.',
      stack: 'React, TypeScript, Redux',
    },
    {
      title: 'Full Stack Template Generator',
      description:
        'My own published npm CLI that scaffolds a React and NestJS full-stack application.',
      stack: 'JavaScript, Node.js',
      linkText: 'View it on npm',
      link: 'https://www.npmjs.com/package/@marcelogarcia/mg-project-cli',
    },
  ],
};

export default INFO;
