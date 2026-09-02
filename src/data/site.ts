export const site = {
  name: 'Uday Kiran Reddy Vonteddu',
  shortName: 'Uday Vonteddu',
  initials: 'UV',
  role: 'Data Analyst',
  roleLine: 'Data Analyst',
  location: 'Jersey City, NJ',
  email: 'vontedduudaykiran@gmail.com',
  phone: '201-993-4034',
  phoneHref: 'tel:+12019934034',
  linkedin: 'https://www.linkedin.com/in/udaykiranreddyvonteddu/',
  linkedinLabel: 'linkedin.com/in/udaykiranreddyvonteddu',
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeDownloadName: 'Uday_Kiran_Reddy_Vonteddu_Resume.pdf',
  heroHook:
    'I turn large, messy datasets into dashboards and decisions, from cybersecurity risk to economic trade analysis. Using SQL, Python, and BI tools like Power BI and Tableau, I turn raw numbers into clear insight that both technical and non-technical stakeholders can act on.',
  summary:
    'Results-driven Data Analyst with an M.S. in Information Systems from Stevens Institute of Technology and a background in Computer Science Engineering. I design end-to-end analytics solutions, from data extraction and modeling to interactive dashboard development, and I’m comfortable moving between strategic analysis, IT risk assessment, and business process evaluation. I care most about communicating complex findings clearly, to technical and non-technical stakeholders alike.',
} as const

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
