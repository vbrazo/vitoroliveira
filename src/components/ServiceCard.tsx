import React, { ReactNode, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkUrl?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, linkUrl, linkText }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

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
      onMouseMove={handleMouseMove}
    >
      {content}
      <span 
        className="absolute opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-black text-white text-sm py-1 px-2 rounded pointer-events-none z-10"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, 20px)'
        }}
      >
        Learn more
      </span>
    </a>
  ) : (
    <div className="p-8 border border-gray-200 rounded-lg bg-white">
      {content}
    </div>
  );
};

export default ServiceCard;
