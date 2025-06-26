import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from 'react-faq-component';
import { fuels } from '../../data/fuels';

const BriquettesPage: React.FC = () => {
  const briquettes = fuels.find(fuel => fuel.id === 'briquettes')!;

  const faqData = {
    rows: briquettes.faqs.map(faq => ({
      title: faq.question,
      content: faq.answer
    }))
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{briquettes.name}</h1>
            <p className="text-xl text-primary-100">
              {briquettes.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={briquettes.image}
                alt={briquettes.name}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Advantages</h2>
              <div className="space-y-4">
                {briquettes.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white">
                        ✓
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">{advantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {briquettes.applications.map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">{application}</h3>
                <p className="text-gray-600">
                  Optimal solution for {application.toLowerCase()} requiring high-energy biomass fuel.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Calorific Value</h3>
                  <p className="text-gray-600">{briquettes.calorificValue} kcal/kg</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Type</h3>
                  <p className="text-gray-600">{briquettes.type}</p>
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
    </>
  );
};

export default BriquettesPage;