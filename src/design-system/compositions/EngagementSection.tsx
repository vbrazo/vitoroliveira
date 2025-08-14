import React from 'react';
import { engagements } from '@/data/engagements';

const EngagementSection: React.FC = () => {
  return (
    <section id="engagement" className="py-20 scroll-mt-20 md:scroll-mt-5 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cto-dark">
          Engaged When and How You Need
        </h2>
        <p className="text-center text-cto-gray max-w-3xl mx-auto mb-16">
          Flexible engagement models tailored to your specific needs and timing requirements.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {engagements.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 bg-black -translate-x-full group-hover:translate-x-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-cto-dark mb-2 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-600 font-medium mb-4 transition-colors duration-300 group-hover:text-gray-300">
                  {item.hours}
                </p>
                <p className="text-zinc-500 transition-colors duration-300 group-hover:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
