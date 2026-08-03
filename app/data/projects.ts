export interface Project {
  title: string;
  timeRange?: string;
  description: string;
  Responsibilities: string[];
  Achievements: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: 'Industrial IoT Platform',
    timeRange: '2026 - Present',
    description:
      ' A comprehensive Industrial IoT platform that enables real-time monitoring, predictive maintenance, and data analytics for manufacturing equipment. It integrates with various sensors and devices to provide actionable insights.',
    Responsibilities: [
      'Led the design and implementation of the front-end architecture for the Industrial IoT platform.',
      'Collaborated with cross-functional teams to define requirements and deliver solutions.',
    ],
    Achievements: [
      'Reduced system latency by 40% through optimized data processing pipelines.',
      'Improved user engagement by 60% with enhanced UI/UX design.',
    ],
    tech: ['Angular', '.NET', 'MQTT', 'PostgreSQL', 'Tailwind'],
    image: '/projects/ecommerce.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    color: '#9670df',
  },
  {
    title: 'Console Management',
    timeRange: '2024/07 - 2025/03',
    description: `A management and maintenance platform for factory customer information and various container connection information.
      This is a multinational team cooperation development project.
      Based on vue3 + nestjs + .netcore development platform system.`,
    Responsibilities: [
      'Front-end leader of China team, mainly responsible for front-end function development and bug fixing, code review and communication with German team.',
    ],
    Achievements: [
      '1. using vue3 + pinia to realize front-end business functions.',
      '2. Use vitest to make the front-end project unit test cases cover more than 90%, so that the front-end code has better robustness.',
      '3. Use AI development tools to realize business development more quickly and conveniently.',
    ],
    tech: ['Vue3', 'NestJS', '.NET Core', 'PostgreSQL', 'Docker'],

    image: '/projects/console.jpg',
    github: 'https://github.com',
    color: '#4FC08D',
  },
  {
    title: 'Machine analysis platform',
    timeRange: '2023/07 - 2024/06',
    description:
      'The smart factory project at the German headquarters uses machine tool data collection to analyze and summarize machine tool utilization and to find solutions for efficiency improvements.',
    Responsibilities: [
      `In a multinational teamwork, as a front-end development leader in China, mainly responsible for
        1. Business function development.
        2. Front-end code review.
        3. UI library design and development.
        4. Teamwork and requirement analysis.`,
    ],
    Achievements: [
      '1. Use Angular 15 + Tailwind CSS to realize the front-end business functions.',
      '2. Use vitest to make the front-end project unit test cases cover more than 90%, so that the front-end code has better robustness.',
      '3. Use AI development tools to realize business development more quickly and conveniently.',
    ],
    tech: ['Angular', 'NestJS', '.NET Core', 'PostgreSQL', 'Docker'],
    image: '/projects/machine.jpg',
    github: 'https://github.com',
    color: '#DD0031',
  },
  {
    title: 'Smart Factory',
    timeRange: '2020/06 - 2023/06',
    description: `The implementation of Industry 4.0 concept.
1. Differing from traditional industrial processing, the smart factory project is based on real-time collection of signal data from the bottom of machine tools and equipment, and the joint Siemens platform to achieve data visualization.
2. Worker operation side based on the data management of the team can jointly generate data to analyze the operation data.
3. The management side can analyze the data based on the time period to find the production steps that can be optimized to improve efficiency.`,
    Responsibilities: [
      `Mainly responsible for front-end architecture, using angular 9+ to build front-end code framework.
1. Integrate business data and use d3.js to create big visualization screen and implement multiple interactive charts on business side.
2. Use websocket/socket.io to realize real-time data update and page rendering. 3.
3. page performance optimization, reduce page loading time, improve user experience.`,
    ],
    Achievements: [
      `Front-end architecture design to drive visualization of large screens and real-time data streaming solutions to the ground.
System optimization: Before I took over there were multiple pages loading speed more than 10s, even will timeout. At the back, the page opening speed is less than 2s.
Customer Usage: From the very beginning, there were only 3 customers using the smart factory system, and the usage frequency was very low. By the end of 23 years, nearly 100 customers have been using the system for a long time.
Product design: Several effective function points were proposed to increase customer usage. For example, adding punch card promotions, interactive chart operations, and automatic page refresh animations.`,
    ],
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    image: '/projects/chat.jpg',
    github: 'https://github.com',
    color: '#61DAFB',
  },
  {
    title: 'Financial personnel reporting system',
    timeRange: '2019/05 - 2020/05',
    description: `Calculate the personnel information and project workload of company employees and supplier employees, and finally generate corresponding financial statements according to different personnel`,
    Responsibilities: [],
    Achievements: [],
    tech: ['angular 8', '.netcore 2.1', 'sqlServer', 'Redis'],
    image: '/projects/task.jpg',
    github: 'https://github.com',
    color: '#4FC08D',
  },
  {
    title: 'Volvo rebate system',
    timeRange: '2018/10 - 2019/05',
    description: `The volvo sales rebate system was originally based on excel manual import calculation, and now with the java(back-end) and angular6(front-end)  build a system that can increase the efficiency by at least 80%.`,
    Responsibilities: [],
    Achievements: [],
    tech: ['angular 8', '.netcore 2.1', 'mysql', 'Redis'],
    image: '/projects/volvo.jpg',
    github: 'https://github.com',
    color: '#61DAFB',
  },
  {
    title: 'Sanofi wechat platform',
    timeRange: '2017/10 - 2018/09',
    description:
      'Sanofi user conference management platform. And user management system.',
    Responsibilities: [],
    Achievements: [],
    tech: ['Angular 4', '.netcore', 'sqlServer', 'mongodb'],
    image: '/projects/sanofi.jpg',
    github: 'https://github.com',
    color: '#EC4899',
  },
  {
    title: 'ALE MicroSoft Support',
    timeRange: '2015/03 - 2017/09',
    description:
      'ALE Microsoft support system. The system is used to manage the customer information of the company and the information of various containers connected to the customer.',
    Responsibilities: [
      `1. Maintain customer eBuy sales website, CRD customer background management website, ELP data management website.
2. The management website goes online.
3. Handle user shopping, authority and other maintenance issues.
4. Defect repaired.`,
    ],
    Achievements: [],
    tech: ['sqlServer', 'asp.net'],
    image: '/projects/fitness.jpg',
    github: 'https://github.com',
    color: '#10B981',
  },
];
