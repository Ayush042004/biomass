import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const HotAirGeneratorsPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What temperature range can be achieved?",
        content: "Our hot air generators can produce temperatures from ambient to 200°C with precise control."
      },
      {
        title: "What is the maximum airflow capacity?",
        content: "Airflow capacities range from 1,000 to 50,000 m³/hr depending on the model."
      },
      {
        title: "What applications are suitable?",
        content: "Common applications include industrial drying, space heating, and process heating."
      },
      {
        title: "How is temperature controlled?",
        content: "Temperature is controlled through advanced PLC systems with multiple temperature sensors."
      },
      {
        title: "What fuel types can be used?",
        content: "Units can operate on biomass fuels including wood chips, pellets, and agricultural waste."
      },
      {
        title: "What are the maintenance requirements?",
        content: "Monthly filter cleaning, quarterly inspection, and annual comprehensive service are recommended."
      },
      {
        title: "How efficient are the units?",
        content: "Our hot air generators achieve thermal efficiency up to 85% with heat recovery systems."
      },
      {
        title: "What safety features are included?",
        content: "Standard features include overtemperature protection, airflow monitoring, and emergency shutdown."
      },
      {
        title: "Can the system be automated?",
        content: "Yes, full automation is available with programmable schedules and remote monitoring."
      },
      {
        title: "What is the typical lifespan?",
        content: "With proper maintenance, units typically last 15-20 years or more."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hot Air Generators</h1>
            <p className="text-xl text-primary-100">
              Industrial-grade hot air generators for efficient drying and heating processes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2846615/pexels-photo-2846615.jpeg"
                alt="Industrial Hot Air Generator"
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
                    <h3 className="text-xl font-semibold mb-2">Precise Temperature Control</h3>
                    <p className="text-gray-600">
                      Advanced control systems for accurate temperature management across the entire range.
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
                    <h3 className="text-xl font-semibold mb-2">Energy Efficient Design</h3>
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
                    <h3 className="text-xl font-semibold mb-2">Multiple Fuel Options</h3>
                    <p className="text-gray-600">
                      Compatible with various biomass fuels for flexible operation.
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
              <h3 className="text-xl font-bold mb-3">Industrial Drying</h3>
              <p className="text-gray-600">
                Perfect for drying agricultural products, timber, and industrial materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Space Heating</h3>
              <p className="text-gray-600">
                Efficient heating solution for large industrial and commercial spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Process Heating</h3>
              <p className="text-gray-600">
                Ideal for manufacturing processes requiring controlled hot air flow.
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
            Contact us to learn more about our hot air generator solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default HotAirGeneratorsPage;