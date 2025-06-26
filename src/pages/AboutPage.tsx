import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl text-primary-100">
              Leading the transition to sustainable biomass energy solutions since 2010.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                At Nature Biomass Solutions, we're dedicated to revolutionizing the energy industry by providing sustainable biomass alternatives that reduce environmental impact while meeting modern energy needs.
              </p>
              <p className="text-lg mb-4">
                Our mission is to accelerate the global transition away from fossil fuels by making biomass energy solutions accessible, efficient, and economically viable for businesses across all sectors.
              </p>
              <p className="text-lg mb-6">
                We believe that sustainable energy is not just an environmental imperative but also a tremendous business opportunity. By harnessing the power of biomass, we help our clients reduce their carbon footprint while improving their bottom line.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Biomass energy plant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              These core principles guide everything we do at Nature Biomass Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmental responsibility in everything we do, from sourcing materials to designing energy-efficient systems.
              </p>
            </div>

            <div className="card p-8">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of biomass technology to deliver more efficient, cost-effective, and environmentally friendly solutions.
              </p>
            </div>

            <div className="card p-8">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build long-term relationships with our clients, partners, and communities, working together to create a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our History</h2>
            <div className="space-y-12 mt-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary-500 text-white text-xl font-bold py-2 px-4 rounded-md">2010</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Company Founded</h3>
                  <p className="text-gray-600">
                    Nature Biomass Solutions was established with a vision to revolutionize the biomass energy sector, starting with a small team of engineers and environmental scientists.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary-500 text-white text-xl font-bold py-2 px-4 rounded-md">2013</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">First Major Installation</h3>
                  <p className="text-gray-600">
                    Completed our first large-scale industrial biomass boiler installation, reducing the client's carbon emissions by 60% and energy costs by 40%.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary-500 text-white text-xl font-bold py-2 px-4 rounded-md">2017</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">International Expansion</h3>
                  <p className="text-gray-600">
                    Expanded operations into European and Asian markets, establishing key partnerships with biomass suppliers and local energy companies.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary-500 text-white text-xl font-bold py-2 px-4 rounded-md">2020</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Innovation Award</h3>
                  <p className="text-gray-600">
                    Received the Global Clean Energy Innovation Award for our high-efficiency biomass conversion technology.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="bg-primary-500 text-white text-xl font-bold py-2 px-4 rounded-md">2023</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">Carbon Neutral Certification</h3>
                  <p className="text-gray-600">
                    Achieved carbon neutral status for all operations and launched our comprehensive Electrification Roadmap service to help clients transition to clean energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Ready to Join the Clean Energy Revolution?</h2>
            <p className="section-subtitle">
              Contact us today to learn how our biomass solutions can help your business reduce emissions and costs.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Get Your Electrification Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;