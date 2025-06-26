export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  department: 'leadership' | 'engineering' | 'sales';
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'With over 20 years of experience in renewable energy, Sarah founded Nature Biomass Solutions with a vision to revolutionize the biomass industry.',
    department: 'leadership'
  },
  {
    name: 'David Chen',
    role: 'Chief Technical Officer',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'David leads our technical innovation, bringing expertise from his previous roles at leading energy technology companies and his Ph.D. in Mechanical Engineering.',
    department: 'leadership'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Operations Director',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Michael oversees all operational aspects of our business, ensuring efficient production, quality control, and timely delivery of our biomass solutions.',
    department: 'leadership'
  },
  {
    name: 'Lisa Wong',
    role: 'Chief Financial Officer',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'With a background in sustainable investment and corporate finance, Lisa ensures our financial strategies align with our mission of promoting green energy solutions.',
    department: 'leadership'
  },
  {
    name: 'James Peterson',
    role: 'Lead Engineer, Boiler Systems',
    photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'James specializes in high-efficiency boiler design and has been instrumental in developing our award-winning steam boiler technology.',
    department: 'engineering'
  },
  {
    name: 'Priya Patel',
    role: 'Senior Engineer, Thermic Systems',
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Priya leads the development of our thermic fluid heating systems, focusing on maximizing energy transfer efficiency and system longevity.',
    department: 'engineering'
  },
  {
    name: 'Robert Kim',
    role: 'Biomass Fuel Specialist',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Robert\'s expertise in biomass materials science helps us develop fuels that maximize energy output while minimizing environmental impact.',
    department: 'engineering'
  },
  {
    name: 'Emma Thompson',
    role: 'Automation Engineer',
    photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Emma designs the control systems that make our biomass solutions smart, efficient, and user-friendly, with a focus on remote monitoring capabilities.',
    department: 'engineering'
  },
  {
    name: 'Thomas Wilson',
    role: 'Sales Director',
    photo: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Thomas leads our global sales strategy, helping clients find the perfect biomass solutions for their specific energy needs.',
    department: 'sales'
  },
  {
    name: 'Maria Garcia',
    role: 'Customer Success Manager',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Maria ensures our clients achieve maximum value from their biomass systems through training, support, and ongoing optimization.',
    department: 'sales'
  },
  {
    name: 'Daniel Jackson',
    role: 'Technical Support Lead',
    photo: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bio: 'Daniel heads our support team, providing expert technical assistance to ensure our clients\' biomass systems operate at peak performance.',
    department: 'sales'
  }
];