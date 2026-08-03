export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Software Developer',
    company: 'Trumpf GmbH + Co. KG',
    duration: 'Jun 2020 - Present',
    description: [
      'Leading the front-end architecture design of industrial IoT platform, adopting Angular 8+ and D3.js to realize real-time visualization of equipment data, supporting concurrent monitoring of 1,000+ devices, and increasing customer coverage by 300%.',
      'Optimize the page performance, compress the first screen loading time from 10s+ to within 2s by lazy loading, code splitting and other techniques.',
      'Design WebSocket data push solution to realize second-level device status warning.',
    ],
    tech: ['Angular', 'TypeScript', 'Nest.js', '.NET', 'Tailwind CSS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Capgemini',
    duration: 'Mar 2015 - Jun 2020',
    description: [
      `1. Front-end Development Responsibilities:
        Development tool: VsCode
        a. angular4 enterprise-level WeChat application development.
        b. Use angular6, angular8 to develop front-end pages.
        c. Logic construction of business scenarios, (medicine and vehicle industry)
        d. Fix bugs on the perspective of technical support

        2. Back-end Development responsibilities:
        Development tools: Visual Studio + MSSql / MySql
        a. .net core 2+ adds new functions for user needs.
        b. SQL server data operation, stored procedure design.
        b. VS.net (webform, MVC) Fix website defects and test the operation.`,
    ],
    tech: ['Node.js', 'Angular', '.NET', 'Vuejs'],
  },
  {
    role: 'Testing Engineer',
    company: 'Compal Electronics Technology Kunshan Co. Ltd.',
    duration: 'Dec 2013 - Mar 2015',
    description: [
      ` *	Follow DELL’s test case and Spec, complete the test in different stages of the notebook that has been sets up.
        *	Analyze the issue in test, and submit it to DTS.
        *	Confirm the issue level with team leader and the designer.
        *	Tracking issue and verify the defect that has been fixed.
        *	Collect test data and submit test report.`,
    ],
    tech: ['JavaScript'],
  },
];
