import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const SteamBoilersPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What is the maximum steam output capacity?",
        content: "Our steam boilers range from 100 kg/hr to 5000 kg/hr steam output capacity."
      },
      {
        title: "What pressure ranges can the boiler operate at?",
        content: "The boilers can operate at pressures ranging from 3 bar to 10 bar, depending on your requirements."
      },
      {
        title: "What fuel types can be used?",
        content: "Our boilers are designed to work with various biomass fuels including wood chips, pellets, and briquettes."
      },
      {
        title: "What safety features are included?",
        content: "Standard features include pressure relief valves, water level controls, flame monitoring, and emergency shutdown systems."
      },
      {
        title: "What is the expected efficiency?",
        content: "Our steam boilers achieve thermal efficiency rates of up to 85% with advanced heat recovery systems."
      },
      {
        title: "How long does installation take?",
        content: "Typical installation takes 3-5 days, including setup, testing, and operator training."
      },
      {
        title: "What maintenance is required?",
        content: "Regular maintenance includes daily checks, weekly cleaning, and annual comprehensive service."
      },
      {
        title: "What control systems are included?",
        content: "Our boilers feature PLC-based control systems with touchscreen interfaces and remote monitoring capabilities."
      },
      {
        title: "What is the warranty period?",
        content: "We offer a standard 2-year warranty with options to extend up to 5 years."
      },
      {
        title: "Are spare parts readily available?",
        content: "Yes, we maintain a comprehensive inventory of spare parts with 24-hour delivery for critical components."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Steam Boilers</h1>
            <p className="text-xl text-primary-100">
              Advanced steam boilers engineered for safe and efficient steam generation, perfect for industrial applications.
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
                alt="Industrial Steam Boiler"
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
                    <h3 className="text-xl font-semibold mb-2">Fully Automated Operation</h3>
                    <p className="text-gray-600">
                      Advanced control systems for optimal performance and minimal operator intervention.
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
                    <h3 className="text-xl font-semibold mb-2">High Energy Efficiency</h3>
                    <p className="text-gray-600">
                      Up to 85% thermal efficiency with advanced heat recovery systems.
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
                    <h3 className="text-xl font-semibold mb-2">Advanced Safety Features</h3>
                    <p className="text-gray-600">
                      Comprehensive safety systems including pressure relief and emergency shutdown.
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
            Contact us to learn more about our steam boiler solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default SteamBoilersPage;