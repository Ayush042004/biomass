import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fuels } from '../data/fuels';

const FuelsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [filteredFuels, setFilteredFuels] = useState(fuels);
  
  // Extract all unique types
  const types = Array.from(new Set(fuels.map(fuel => fuel.type)));
  
  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setSelectedType(type);
    } else {
      setSelectedType('all');
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (selectedType === 'all') {
      setFilteredFuels(fuels);
    } else {
      setFilteredFuels(fuels.filter(fuel => fuel.type === selectedType));
    }
  }, [selectedType]);
  
  const handleTypeSelect = (type: string) => {
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Biomass Fuels</h1>
            <p className="text-xl text-primary-100">
              Sustainable fuel solutions for cleaner, more efficient energy production.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="section-title">Our Fuel Products</h2>
            <p className="section-subtitle">
              We offer a wide range of biomass fuels designed for various applications, from industrial boilers to residential heating systems.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              className={`px-6 py-3 rounded-md ${
                selectedType === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleTypeSelect('all')}
            >
              All Fuels
            </button>
            {types.map((type) => (
              <button
                key={type}
                className={`px-6 py-3 rounded-md ${
                  selectedType === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => handleTypeSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredFuels.map((fuel, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={fuel.image} 
                    alt={fuel.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{fuel.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium py-1 px-2 rounded">
                      {fuel.type}
                    </span>
                    <span className="bg-secondary-100 text-secondary-800 text-xs font-medium py-1 px-2 rounded">
                      {fuel.calorificValue} kcal/kg
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{fuel.description}</p>
                  <Link 
                    to={`/contact?fuel=${fuel.name}`}
                    className="text-primary-500 font-medium inline-flex items-center group-hover:text-primary-700"
                  >
                    Request quote
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Biomass Fuels?</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Sustainable Sourcing</h3>
                    <p className="text-gray-600">All our biomass fuels are sourced from sustainable, renewable materials and agricultural waste.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">High Energy Density</h3>
                    <p className="text-gray-600">Our processing techniques ensure maximum calorific value and energy output per kg of fuel.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Low Moisture Content</h3>
                    <p className="text-gray-600">Carefully dried and processed to ensure clean burning with minimal smoke and ash production.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Cost-Effective</h3>
                    <p className="text-gray-600">Significant cost savings compared to traditional fossil fuels, with stable pricing.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Consistent Quality</h3>
                    <p className="text-gray-600">Strict quality control measures ensure consistent performance across all our fuel products.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary mt-8 inline-block">
                Get a Custom Quote
              </Link>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Biomass fuel production" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuelsPage;