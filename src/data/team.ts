import pics from '../assets/5.png'
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
    photo: pics,
    bio: 'A strategic leader with deep domain knowledge in biomass energy systems and infrastructure development, Viren is the driving force behind Nature Bio Works growth and national expansion. His leadership integrates innovation, rural development, and climate action into one cohesive vision.',
    department: 'leadership'
  },
  {
    name: 'Diya Kukreja',
    role: 'Director –  Strategy, Partnerships & Communications',
    photo: pics,
    bio: "Diya steers Nature Bio Works’ strategic direction and external partnerships, while driving communication that positions the company as a global leader in clean energy and circular economy solutions. Her focus on process optimisation and opportunity creation ensures impact.",
    department: 'leadership'
  },
  {
    name: 'Kanika Mehra',
    role: 'Director – Sustainability & Compliance',
    photo: pics,
    bio: ' Kanika leads our environmental governance and compliance framework. With a focus on regulatory adherence and SDG integration, she ensures our operations remain transparent, responsible, and aligned with national and global climate objectives.',
    department: 'leadership'
  },
  {
    name: 'Aditi Malhotra',
    role: 'Advisor – Project Execution',
    photo: pics,
    bio: '  As President of the Women Youth Forum in Delhi, Aditi plays a key role in bridging the gap between Nature Bio Works and communities. She leads awareness and execution initiatives, ensuring that the company’s sustainability projects are not only implemented effectively but also embraced at the grassroots level.',
    department: 'Advisory Board'
  },
  {
    name: 'Dr. Ravindra kumar',
    role: 'Director – Operations',
    photo: pics,
    bio: 'A dynamic professional with a Master’s in Business Administration, Master’s in Political Science, and a PG Diploma in Environmental Law and Policy, combining expertise in management, governance, and sustainability.',
    department: 'leadership'
  },
  {
    name: 'CA Shubham Agarwal',
    role: 'CFO',
    photo: pics,
    bio: 'Shubham is a graduate from Delhi University and qualified Chartered Accountant in the year 2010.',
    department: 'leadership'
  },
  {
    name: "Aishwarya Singh",
    role: 'Director – Operations',
    photo: pics,
    bio: 'Aishwarya is a graduate from Delhi University and qualified Chartered Accountant in the year 2010.',
    department: 'leadership'
  }
];