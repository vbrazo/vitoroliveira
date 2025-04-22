import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cto-dark">{title}</h3>
      <p className="text-cto-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
