import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../../data/products';

const ProductNavigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <nav className="flex flex-wrap gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive(`/products/${product.id}`)
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {product.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProductNavigation;