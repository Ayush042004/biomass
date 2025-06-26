import React from 'react';

interface FeatureItem {
  icon: string;
  title: string;
  bulletPoints: string[];
}

interface FeatureSectionProps {
  features: FeatureItem[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">The 3 Rules of Sustainable Energy</h2>
        <p className="section-subtitle">
          These principles guide our approach to creating a cleaner future through biomass solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 bg-white hover:translate-y-[-10px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;