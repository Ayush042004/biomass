import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fuels } from '../../data/fuels';

const FuelNavigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <nav className="flex flex-wrap gap-4">
        {fuels.map((fuel) => (
          <Link
            key={fuel.id}
            to={`/biomass-fuels/${fuel.id}`}
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive(`/biomass-fuels/${fuel.id}`)
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {fuel.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FuelNavigation;