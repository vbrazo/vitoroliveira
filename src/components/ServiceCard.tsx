import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkUrl?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkUrl, linkText }) => {
  const content = (
    <>
      <div className="mb-5 transition-transform duration-300 group-hover:scale-10 group-hover:rotate-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cto-dark">{title}</h3>
      <p className="text-cto-gray mb-4">{description}</p>
      <div className="inline-flex items-center text-cto-dark group-hover:text-cto-dark/80 transition-all duration-300">
        <span className="mr-2">{linkText}</span>
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </>
  );

  return linkUrl ? (
    <a 
      href={linkUrl} 
      className="block p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className="p-8 border border-gray-200 rounded-lg bg-white">
      {content}
    </div>
  );
};

export default ServiceCard;
