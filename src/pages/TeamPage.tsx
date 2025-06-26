import React from 'react';
import TeamMemberCard from '../components/team/TeamMemberCard';
import { teamMembers } from '../data/team';

const TeamPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Team</h1>
            <p className="text-xl text-primary-100">
              Meet the experts driving innovation in biomass energy solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Our experienced leadership brings decades of expertise in renewable energy, engineering, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers
              .filter(member => member.department === 'leadership')
              .map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  bio={member.bio}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="section-title">Engineering Team</h2>
            <p className="section-subtitle">
              The brilliant minds behind our innovative biomass technologies and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter(member => member.department === 'engineering')
              .map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  bio={member.bio}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="section-title">Sales & Support</h2>
            <p className="section-subtitle">
              Our dedicated team ensuring your biomass journey is smooth and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter(member => member.department === 'sales')
              .map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  bio={member.bio}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Join Our Team</h2>
            <p className="section-subtitle">
              We're always looking for talented individuals passionate about sustainable energy solutions.
            </p>
            <div className="mt-8">
              <a href="#" className="btn-primary">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;