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
      <div className="mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cto-dark">{title}</h3>
      <p className="text-cto-gray">{description}</p>
    </>
  );

  return linkUrl ? (
    <a 
      href={linkUrl} 
      className="group/card relative block p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white cursor-pointer overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
      <div className="mt-4 text-black hover:underline">
        {linkText || 'Learn more'} →
      </div>
    </a>
  ) : (
    <div className="p-8 border border-gray-200 rounded-lg bg-white">
      {content}
    </div>
  );
};

export default ServiceCard;
