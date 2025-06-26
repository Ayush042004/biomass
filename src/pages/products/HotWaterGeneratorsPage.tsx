import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const HotWaterGeneratorsPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What is the maximum water temperature?",
        content: "Systems can produce hot water up to 95°C."
      },
      {
        title: "What capacity ranges are available?",
        content: "From 100 to 10,000 liters per hour capacity."
      },
      {
        title: "What fuel options are available?",
        content: "Systems available in biomass, electric, and hybrid configurations."
      },
      {
        title: "How is temperature controlled?",
        content: "Digital control systems with ±1°C accuracy."
      },
      {
        title: "What efficiency levels are achieved?",
        content: "Up to 95% thermal efficiency with heat recovery."
      },
      {
        title: "What maintenance is required?",
        content: "Quarterly inspection and annual comprehensive service."
      },
      {
        title: "What safety features are included?",
        content: "Temperature limiting, pressure relief, and low water protection."
      },
      {
        title: "Can the system be integrated with existing infrastructure?",
        content: "Yes, compatible with most existing hot water systems."
      },
      {
        title: "What is the warranty period?",
        content: "2-year standard warranty with extension options."
      },
      {
        title: "Is remote monitoring available?",
        content: "Yes, with real-time monitoring and alert systems."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hot Water Generators</h1>
            <p className="text-xl text-primary-100">
              Reliable hot water generation systems for industrial and commercial applications.
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
                alt="Hot Water Generator"
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
                    <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
                    <p className="text-gray-600">
                      Up to 95% thermal efficiency with advanced heat recovery systems.
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
                    <h3 className="text-xl font-semibold mb-2">Smart Controls</h3>
                    <p className="text-gray-600">
                      Digital control systems with precise temperature management.
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
                    <h3 className="text-xl font-semibold mb-2">Durable Construction</h3>
                    <p className="text-gray-600">
                      Built with high-quality materials for long-term reliability.
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
              <h3 className="text-xl font-bold mb-3">Industrial Processing</h3>
              <p className="text-gray-600">
                Ideal for manufacturing and processing facilities requiring reliable hot water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
              <p className="text-gray-600">
                Perfect for hotels, hospitals, and large commercial complexes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">District Heating</h3>
              <p className="text-gray-600">
                Suitable for centralized heating systems and district networks.
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
            Contact us to learn more about our hot water generator solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default HotWaterGeneratorsPage;