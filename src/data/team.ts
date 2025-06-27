export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  department: 'leadership' | 'Advisory Board';
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Viren Mehra',
    role: 'Managing Director',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'A strategic leader with deep domain knowledge in biomass energy systems and infrastructure development, Viren is the driving force behind Nature Bio Works growth and national expansion. His leadership integrates innovation, rural development, and climate action into one cohesive vision.',
    department: 'leadership'
  },
  {
    name: 'Diya Kukreja',
    role: 'Director – Strategy & Communications',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: ' Diya spearheads strategic partnerships, brand storytelling, and ESG advocacy. Her work bridges the gap between grassroots innovation and global sustainability goals, positioning Nature Bio Works as a thought leader in the circular economy space.',
    department: 'leadership'
  },
  {
    name: 'Kanika Mehra',
    role: 'Director – Sustainability & Compliance',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: ' Kanika leads our environmental governance and compliance framework. With a focus on regulatory adherence and SDG integration, she ensures our operations remain transparent, responsible, and aligned with national and global climate objectives.',
    department: 'leadership'
  },
  {
    name: 'Aditi Malhotra',
    role: 'Advisor – Waste Management & Project Execution',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: '  Aditi brings over a decade of operational experience in executing biomass and municipal solid waste projects at scale. As a strategic advisor, she guides implementation best practices, quality standards, and workforce training protocols that drive project success across urban and rural deployments.',
    department: 'Advisory Board'
  },
];