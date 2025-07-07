import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section className="section flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
      <div className="container-custom text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-500 mb-3 sm:mb-4 md:mb-6">404</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Page Not Found</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;