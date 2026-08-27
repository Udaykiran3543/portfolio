export type Education = {
  id: string
  institution: string
  degree: string
  tags: string[]
}

export const education: Education[] = [
  {
    id: 'stevens',
    institution: 'Stevens Institute of Technology',
    degree: 'Master of Science in Information Systems',
    tags: ['Data Analytics', 'IT Strategy', 'Systems Design'],
  },
  {
    id: 'veltech',
    institution: 'Vel Tech University',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    tags: ['Computer Science', 'Software Engineering'],
  },
]
