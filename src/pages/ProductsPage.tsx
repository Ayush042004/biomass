import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import CategoryFilter from '../components/products/CategoryFilter';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Extract all unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  const handleCategorySelect = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Products & Services</h1>
            <p className="text-xl text-primary-100">
              Discover our comprehensive range of biomass solutions designed for efficiency and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === 'all' ? 'All Products & Services' : `${selectedCategory}`}
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    category={product.category}
                  />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-gray-600">Try selecting a different category or clearing filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title">Need a Custom Solution?</h2>
            <p className="section-subtitle">
              Our team of experts can design a tailored biomass system to meet your specific requirements.
            </p>
            <button className="btn-primary mt-6">
              Request a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;