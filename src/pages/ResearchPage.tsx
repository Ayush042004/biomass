import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Research & Development</h1>
            <p className="text-xl text-primary-100">
              Pioneering the future of sustainable biomass technology through innovative research and development.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Innovation at Our Core</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our R&D team is dedicated to pushing the boundaries of biomass technology, 
                developing new solutions that maximize efficiency while minimizing environmental impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Advanced Combustion Technology</h3>
                    <p className="text-gray-600">
                      Developing next-generation combustion systems for improved efficiency and reduced emissions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Smart Control Systems</h3>
                    <p className="text-gray-600">
                      Creating intelligent monitoring and control systems for optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                    <p className="text-gray-600">
                      Researching new biomass materials and processing techniques for improved efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                alt="Research and Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Current Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Biomass Optimization</h3>
              <p className="text-gray-600 mb-4">
                Investigating new methods to improve biomass fuel efficiency and reduce waste in the conversion process.
              </p>
              <Link to="/contact" className="text-primary-500 font-medium hover:text-primary-600">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Emission Control</h3>
              <p className="text-gray-600 mb-4">
                Developing advanced filtration systems to minimize environmental impact of biomass energy production.
              </p>
              <Link to="/contact" className="text-primary-500 font-medium hover:text-primary-600">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-4">
                Implementing artificial intelligence for predictive maintenance and optimization of biomass systems.
              </p>
              <Link to="/contact" className="text-primary-500 font-medium hover:text-primary-600">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Partner with Us</h2>
            <p className="section-subtitle">
              Join us in developing the next generation of sustainable biomass solutions.
            </p>
            <Link to="/contact" className="btn-primary mt-6">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;