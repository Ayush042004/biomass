import React from 'react';
import { Link } from 'react-router-dom';
import { fuels } from '../data/fuels';

const FuelsOverviewPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Biomass Fuels</h1>
            <p className="text-xl text-primary-100">
              Discover our range of sustainable biomass fuel solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fuels.map((fuel) => (
              <Link 
                key={fuel.id}
                to={`/fuels/${fuel.id}`}
                className="group"
              >
                <div className="card overflow-hidden h-full">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={fuel.image}
                      alt={fuel.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Learn More</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{fuel.name}</h2>
                    <p className="text-gray-600 mb-4">{fuel.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-500 font-medium group-hover:text-primary-600">
                        View Details →
                      </span>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        {fuel.type}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FuelsOverviewPage;