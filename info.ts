import potrait from './src/assests/potrait.jpg'
let info = {
  name: 'Divyesh Gajanan Gaygol',
  logo_name: 'divyesh',
  flat_picture: potrait, // Add your portrait path here
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    'A Computer Science Engineering student at Vellore Institute of Technology (Bhopal Campus) . As a developer, I feel most at home in terminal environments, focusing heavily on backend architecture, logic, and distributed systems. <br><br>I have strong production exposure to scalable REST APIs, authentication systems, and real-time transaction pipelines. I am passionate about optimizing performance, enforcing security, and delivering efficient backend services that yield measurable business outcomes.',
  links: {
    linkedin: 'https://www.linkedin.com/in/divyesh-gaygol-748983302/',
    github: 'https://github.com/The-WarLog',
    email: 'mailto:divyeshgaigol17@gmail.com',
    resume: 'https://drive.google.com/file/d/1gysYO9ioo-7ACsPHJp1OYqql1yi4sIKy/view?usp=sharing',
  },
  education: [
    {
      name: 'Vellore Institute of Technology, Bhopal',
      place: 'India',
      date: 'Expected May 2027',
      degree: 'B.Tech in Computer Science Engineering (Minor in Gaming Technology)',
      gpa: '8.11/10.0',
      description:
        "Currently pursuing my Bachelor's degree with a focus on core computer science fundamentals and software engineering.",
      skills: [
        'Backend Development',
        'Data Structures & Algorithms',
        'Distributed Systems',
        'Database Management',
      ],
    },
  ],
  experience: [
    {
      name: 'Imarticus Learning',
      place: 'Remote / India',
      date: 'May 2025 - June 2025',
      position: 'Android App Development (University Intern)',
      description:
        'Developed production-grade Android application modules using Kotlin and MVVM architecture. Improved UI performance by 40% through Jetpack-based layout optimization, integrated Firebase Authentication for 99.9% session reliability, and reduced API failure rates by 35% using structured error handling.',
      skills: ['Kotlin', 'Android SDK', 'Firebase', 'REST APIs', 'Git', 'MVVM'],
    },
  ],
  skills: [
    {
      title: 'languages',
      info: ['Java', 'Kotlin', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'Go'],
      icon: 'fa fa-code',
    },
    {
      title: 'backend & frameworks',
      info: [
        'Spring Boot',
        'FastAPI',
        'Node.js',
        'Bun.js',
        'Express.js',
        'NestJS',
        'Vue.js/Nuxt',
        'Gin',
      ],
      icon: 'fa fa-server',
    },
    {
      title: 'databases',
      info: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'],
      icon: 'fa fa-database',
    },
    {
      title: 'devops & tools',
      info: [
        'Git',
        'Docker',
        'Postman',
        'Linux (Ubuntu/Kali)',
        'AWS (EC2, S3)',
        'Microsoft Azure',
        'Gemini API',
      ],
      icon: 'fas fa-tools',
    },
  ],
  portfolio: [
    {
      name: 'EdiMix',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'WebSockets (STOMP)',
        'Redis',
        'Vue.js',
        'PostgreSQL',
        'Docker',
        'Azure',
      ],
      category: 'Full Stack',
      date: 'Expected May 2027',
      github: '',
      visit: '',
      description:
        'Engineered a Google Docs-style collaborative document editor supporting concurrent multi-user editing with zero data loss. Built a Spring Boot WebSocket server with CRDT-based conflict resolution. Implemented Redis Pub/Sub for cross-instance state synchronization, reducing sync latency by 65%. Designed a live presence system achieving sub-100ms UI propagation, and persisted document versioning in PostgreSQL.',
    },
    {
      name: 'Recon',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['TypeScript', 'Bun', 'OpenRouter AI SDK', 'Commander', 'Clack', 'Chalk', 'Firecrawl', 'Diff'],
      category: 'Developer Tooling',
      date: '2026',
      github: 'https://github.com/The-WarLog/Recon',
      visit: '',
      description:
        'Built a full-featured CLI tool in TypeScript (Bun runtime) enabling developers to analyze, navigate, and autonomously modify codebases through natural language instructions. Designed a dual-mode architecture — Agent Mode for autonomous file creation, modification, and shell execution, and Ask Mode for safe read-only codebase querying. Integrated OpenRouter AI SDK for flexible multi-model AI backends, implemented a staged approval workflow ensuring zero unreviewed changes reach the filesystem, and incorporated Firecrawl for live web scraping to enrich agent context during sessions.',
    },
    {
      name: 'MonBuyAPI',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['Java', 'Spring Boot', 'Kafka', 'SQL', 'JWT', 'REST'],
      category: 'Backend',
      date: '',
      github: '',
      visit: '',
      description:
        'Architected a fintech-grade Spring Boot backend for wallet management and secure transactions with multi-user concurrency support. Integrated Kafka for event-driven processing, increasing throughput by 50%. Designed idempotent transaction layers to reduce rollback failures by 70%, and deployed rate-limiting and circuit-breaker patterns to cut API abuse and reduce latency.',
    },
    {
      name: 'FARMGUARDPro',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['AI', 'Backend Development', 'Image Analysis'],
      category: 'Backend / AI',
      date: '',
      github: 'https://github.com/The-WarLog/FarmGuardPro.git',
      visit: '',
      description:
        'Developed an AI-powered crop analysis tool designed specifically for Indian farmers to aid in agricultural planning and disease detection through image processing and a robust backend.',
    },
    {
      name: 'SentimindAI',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['FastAPI', 'Python', 'React', 'Gemini API', 'MongoDB'],
      category: 'AI Platform',
      date: '',
      github: 'https://github.com/The-WarLog/SentimindAI.git',
      visit: '',
      description:
        'Built an AI-powered sentiment intelligence system with a FastAPI backend and React frontend. Integrated the Gemini API for real-time emotional detection, improving feedback triage by 45%. Designed async microservices for sentiment streaming with sub-300ms latency and optimized MongoDB indexing to boost query performance.',
    },
    {
      name: 'HealthMetricPlus',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      category: 'Mobile App',
      date: '',
      github: 'https://github.com/The-WarLog/HealthMetricPlus-Core.git',
      visit: '',
      description:
        'Built a fitness tracking app using Jetpack Compose featuring a reactive UI and Firebase Authentication. Implemented encrypted cloud sync for secure real-time health data persistence and optimized background sync, reducing battery drain by 35% and improving task completion.',
    },
    {
      name: 'GoFLUX',
      pictures: [
        {
          img: '',
        },
      ],
      technologies: ['TypeScript', 'VS Code API', 'Node.js'],
      category: 'Developer Tooling',
      date: '2026',
      github: 'https://github.com/The-WarLog/Go-Runner.git',
      visit: 'https://marketplace.visualstudio.com/items?itemName=Divyesh-dev.GoFLUX',
      description:
        'Built and published a VS Code extension that streamlines Go development workflows directly inside the editor. Implemented custom command execution, workspace integration, and developer productivity automation using the VS Code Extension API. Achieved 25+ marketplace acquisitions shortly after launch and received positive community feedback with a 5-star rating.',
    },
  ],
}

export default info
