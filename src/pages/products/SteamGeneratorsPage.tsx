import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const SteamGeneratorsPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What is the steam output capacity?",
        content: "Our generators produce from 50 to 1000 kg/hr of steam."
      },
      {
        title: "What pressure ranges are available?",
        content: "Operating pressures from 3 to 8 bar are standard."
      },
      {
        title: "How quickly can steam be generated?",
        content: "Full steam production is achieved within 5-10 minutes from cold start."
      },
      {
        title: "What is the steam quality?",
        content: "99.5% dry saturated steam is standard, with superheated options available."
      },
      {
        title: "What control systems are included?",
        content: "PLC-based controls with touchscreen interface and remote monitoring."
      },
      {
        title: "What are the maintenance requirements?",
        content: "Weekly blowdown and annual service are recommended."
      },
      {
        title: "What safety features are standard?",
        content: "Includes pressure control, water level monitoring, and emergency shutdown."
      },
      {
        title: "How energy efficient are the units?",
        content: "Thermal efficiency up to 98% with economizer options."
      },
      {
        title: "What is the warranty coverage?",
        content: "2-year standard warranty with extended options available."
      },
      {
        title: "Are units customizable?",
        content: "Yes, we offer customization for specific industry requirements."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Steam Generators</h1>
            <p className="text-xl text-primary-100">
              Compact and efficient steam generation solutions for various industrial processes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                alt="Industrial Steam Generator"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Product Features</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Rapid Steam Production</h3>
                    <p className="text-gray-600">
                      Quick start-up and fast response to demand changes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">High Thermal Efficiency</h3>
                    <p className="text-gray-600">
                      Up to 98% efficiency with advanced heat recovery systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Advanced Controls</h3>
                    <p className="text-gray-600">
                      PLC-based system with touchscreen interface and remote monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Food Processing</h3>
              <p className="text-gray-600">
                Ideal for cooking, sterilization, and cleaning processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Textile Industry</h3>
              <p className="text-gray-600">
                Perfect for dyeing, finishing, and pressing operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Chemical Processing</h3>
              <p className="text-gray-600">
                Suitable for heating, distillation, and reaction processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQ 
              data={faqData}
              styles={{
                bgColor: 'white',
                titleTextColor: '#1a1a1a',
                rowTitleColor: '#1a1a1a',
                rowContentColor: '#4a4a4a',
                arrowColor: '#48944f',
              }}
              config={{
                animate: true,
                openOnload: 0,
                expandIcon: '+',
                collapseIcon: '-',
              }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle">
            Contact us to learn more about our steam generator solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default SteamGeneratorsPage;