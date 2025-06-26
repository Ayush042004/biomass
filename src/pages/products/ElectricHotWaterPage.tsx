import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';

const ElectricHotWaterPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What is the maximum water temperature?",
        content: "Systems can heat water up to 85°C with precise temperature control."
      },
      {
        title: "What capacity ranges are available?",
        content: "We offer systems from 100 to 5000 liters capacity."
      },
      {
        title: "How energy efficient are the systems?",
        content: "Our systems achieve up to 98% energy efficiency with smart controls."
      },
      {
        title: "What voltage options are available?",
        content: "Systems are available in 230V single-phase and 400V three-phase options."
      },
      {
        title: "What control features are included?",
        content: "Standard features include digital temperature control, timer functions, and remote monitoring."
      },
      {
        title: "How long do the systems last?",
        content: "Expected lifespan is 15-20 years with proper maintenance."
      },
      {
        title: "What maintenance is required?",
        content: "Annual inspection and periodic descaling based on water quality."
      },
      {
        title: "Are the systems suitable for hard water areas?",
        content: "Yes, with built-in scale prevention and optional water treatment systems."
      },
      {
        title: "What safety features are included?",
        content: "Systems include overheat protection, pressure relief, and leak detection."
      },
      {
        title: "Can multiple units be synchronized?",
        content: "Yes, systems can be cascaded for larger capacity requirements."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Electric Hot Water Systems</h1>
            <p className="text-xl text-primary-100">
              High-efficiency electric hot water systems for commercial and industrial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg"
                alt="Electric Hot Water System"
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
                    <h3 className="text-xl font-semibold mb-2">Smart Temperature Management</h3>
                    <p className="text-gray-600">
                      Advanced digital controls for precise temperature regulation and energy optimization.
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
                    <h3 className="text-xl font-semibold mb-2">Energy-Saving Technology</h3>
                    <p className="text-gray-600">
                      Up to 98% energy efficiency with smart power management and insulation.
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
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Safety Features</h3>
                    <p className="text-gray-600">
                      Multiple safety systems including overheat protection and pressure monitoring.
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
              <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
              <p className="text-gray-600">
                Ideal for offices, hotels, and retail establishments requiring reliable hot water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Industrial Processes</h3>
              <p className="text-gray-600">
                Perfect for manufacturing processes requiring precise temperature control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Healthcare Facilities</h3>
              <p className="text-gray-600">
                Meets the demanding requirements of hospitals and medical facilities.
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
            Contact us to learn more about our electric hot water solutions and get a customized quote for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default ElectricHotWaterPage;