export type ProjectCategory = 'security' | 'trade' | 'podcast' | 'strategy'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  tags: string[]
  challenge: string
  approach: string
  impact: string
  stats: { label: string; value: string }[]
  image?: string
  imagePosition?: string
  imageFit?: 'cover' | 'contain'
}

export const projects: Project[] = [
  {
    id: 'citibank-cybersecurity',
    title: 'Citibank Cybersecurity Threat Analysis',
    category: 'security',
    categoryLabel: 'Risk & Security Governance',
    tags: ['Risk Assessment', 'Threat Modeling', 'GDPR/CCPA'],
    image: `${import.meta.env.BASE_URL}citibank-cybersecurity.jpg`,
    imagePosition: '50% 38%',
    challenge:
      'Citibank needed a clear, prioritized view of where it was exposed — across ten distinct threat vectors including DDoS attacks, ransomware, insider threats, third-party vendor risk, and poor data governance.',
    approach:
      'I built a Threat Matrix mapping High/Medium/Low risk levels across six asset categories — Users, Intellectual Property, Work Stations, Servers, Security Devices, and Facilities — then designed a Risk Control Matrix of layered preventive, detective, and corrective controls, including MFA, endpoint detection, vendor due diligence, and data loss prevention.',
    impact:
      'The resulting framework aligned mitigation priorities with GDPR and CCPA compliance requirements, giving stakeholders a single reference for where to invest in controls first.',
    stats: [
      { label: 'Threat vectors evaluated', value: '10' },
      { label: 'Asset categories mapped', value: '6' },
    ],
  },
  {
    id: 'brexit-uk-trade',
    title: "Analysis of Brexit's Impact on UK Foreign Trade",
    category: 'trade',
    categoryLabel: 'Economic & BI Analysis',
    tags: ['Power BI', 'Excel', 'Data Analysis'],
    image: `${import.meta.env.BASE_URL}brexit-uk-trade.jpg`,
    imagePosition: '50% 32%',
    challenge:
      'Understanding Brexit’s real economic effect on UK trade required reconciling over a decade of import/export data and separating short-term noise from a genuine long-term trend.',
    approach:
      'I analyzed a large-scale dataset of UK trade statistics from 2010 to 2023 and built comprehensive Power BI and Excel dashboards to visualize trends, comparing trade patterns between EU and non-EU countries.',
    impact:
      'The analysis showed that while trade initially declined post-Brexit, it recovered over time — with non-EU markets demonstrating significantly greater resilience and growth than EU markets.',
    stats: [
      { label: 'Years of trade data analyzed', value: '13' },
      { label: 'Dataset span', value: '2010–2023' },
    ],
  },
  {
    id: 'stevens-podcast',
    title: 'Stevens Podcast Launch Initiative',
    category: 'podcast',
    categoryLabel: 'Business Strategy',
    tags: ['Business Strategy', 'Project Management'],
    image: `${import.meta.env.BASE_URL}find-your-flock.jpg`,
    imagePosition: '50% 52%',
    challenge:
      'Stevens Institute of Technology had no university-wide podcast — the opportunity was to define one from scratch, with a clear audience, purpose, and path to sustainability.',
    approach:
      'I developed a strategic business plan defining the podcast’s mission, target audience, and value proposition, then designed an operational framework covering content strategy, production workflow, team roles, and equipment/software budget.',
    impact:
      'The plan included a multi-channel marketing and launch strategy — built on social media and campus partnerships — designed to drive student engagement and build a sustainable listener base.',
    stats: [
      { label: 'Strategy workstreams', value: '3' },
      { label: 'Launch channels planned', value: 'Multi-channel' },
    ],
  },
  {
    id: 'ibm-strategy',
    title: 'IBM IT Strategy Analysis and Modernization',
    category: 'strategy',
    categoryLabel: 'Strategic & Competitive Analysis',
    tags: ['Strategic Analysis', 'Competitive Positioning'],
    image: `${import.meta.env.BASE_URL}ibm-strategy.jpg`,
    challenge:
      'IBM’s shift from a hardware-centric business to a services-oriented one raised the question of whether its current strategy was positioned to win in the market it was moving toward.',
    approach:
      'I analyzed IBM’s historical IT strategy and the challenges in that transition, then evaluated its current core strategy centered on Hybrid Cloud and AI — anchored by the Red Hat acquisition and the Kyndryl infrastructure services spin-off.',
    impact:
      'I proposed strategic improvements to strengthen market perception and accelerate adoption, recommending a more integrated go-to-market framework across IBM’s software and consulting divisions.',
    stats: [
      { label: 'Strategic pillars evaluated', value: 'Hybrid Cloud + AI' },
      { label: 'Key transaction analyzed', value: 'Red Hat / Kyndryl' },
    ],
  },
]
