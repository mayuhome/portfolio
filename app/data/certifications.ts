export interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    title: 'Systems Analyst',
    issuer:
      'China Computer Federation (CCF) - National Professional Qualification',
    date: '2026',
    color: '#FF9900',
  },
  {
    title: 'Systems Architect (Level 2)',
    issuer:
      'China Computer Federation (CCF) - National Professional Qualification',
    date: '2022',
    color: '#0668E1',
  },
];
