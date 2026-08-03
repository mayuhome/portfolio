export interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
  filePath?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Systems Analyst',
    issuer:
      'China Computer Federation (CCF) - National Professional Qualification',
    date: '2026',
    color: '#FF9900',
    filePath: '/public/certifications/系统分析师.pdf',
  },
  {
    title: 'Systems Architect (Level 2)',
    issuer:
      'China Computer Federation (CCF) - National Professional Qualification',
    date: '2023',
    color: '#0668E1',
    filePath: '/public/certifications/软件设计师.pdf',
  },
  {
    title: 'Deutsch B1.1',
    issuer: 'speexx',
    date: '2026',
    color: '#4CAF50',
    filePath: '/public/certifications/german-B1.1-certificate.pdf',
  },
  {
    title: 'Deutsch A2',
    issuer: 'speexx',
    date: '2025',
    color: '#FF9800',
    filePath: '/public/certifications/german-A2-certificate.pdf',
  },
  {
    title: 'Accounting Professional Qualification',
    issuer: 'China Association for Accounting Professionals',
    date: '2020',
    color: '#9C27B0',
    filePath: '/public/certifications/会计从业资格.pdf',
  }
];
