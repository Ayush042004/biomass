import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const ThermicFluidPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What temperature range can be achieved?",
        content: "Systems operate from 50°C to 350°C with precise control."
      },
      {
        title: "What heating capacity is available?",
        content: "Units range from 100 kW to 5000 kW heating capacity."
      },
      {
        title: "What types of thermal fluid can be used?",
        content: "Compatible with mineral and synthetic heat transfer fluids."
      },
      {
        title: "How accurate is temperature control?",
        content: "Temperature control accuracy of ±1°C is standard."
      },
      {
        title: "What safety features are included?",
        content: "Features include temperature limiting, flow monitoring, and pressure control."
      },
      {
        title: "What is the system efficiency?",
        content: "Thermal efficiency up to 90% with heat recovery options."
      },
      {
        title: "What maintenance is required?",
        content: "Annual fluid analysis and system inspection recommended."
      },
      {
        title: "Can the system be automated?",
        content: "Full automation with PLC controls and remote monitoring available."
      },
      {
        title: "What is the expected lifespan?",
        content: "20+ years with proper maintenance and fluid management."
      },
      {
        title: "Are backup systems available?",
        content: "Redundant systems and backup options can be incorporated."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Thermic Fluid Heaters</h1>
            <p className="text-xl text-primary-100">
              Advanced heat transfer solutions for precise temperature control in industrial processes.
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
                alt="Thermic Fluid Heater"
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
                    <h3 className="text-xl font-semibold mb-2">Optimal Heat Transfer</h3>
                    <p className="text-gray-600">
                      Advanced design ensures efficient and uniform heat distribution.
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
                    <h3 className="text-xl font-semibold mb-2">Precise Control</h3>
                    <p className="text-gray-600">
                      Temperature control accuracy of ±1°C for critical processes.
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
                    <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
                    <p className="text-gray-600">
                      Up to 90% thermal efficiency with heat recovery systems.
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
              <h3 className="text-xl font-bold mb-3">Chemical Processing</h3>
              <p className="text-gray-600">
                Ideal for reaction vessels and distillation processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Pharmaceutical</h3>
              <p className="text-gray-600">
                Perfect for precise temperature control in drug manufacturing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Food Processing</h3>
              <p className="text-gray-600">
                Suitable for cooking, drying, and sterilization processes.
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
            Contact us to learn more about our thermic fluid heating solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThermicFluidPage;