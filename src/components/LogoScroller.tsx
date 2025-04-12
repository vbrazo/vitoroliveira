
import React from 'react';

const logos = [
  { name: 'Company 1', logo: 'placeholder.svg' },
  { name: 'Company 2', logo: 'placeholder.svg' },
  { name: 'Company 3', logo: 'placeholder.svg' },
  { name: 'Company 4', logo: 'placeholder.svg' },
  { name: 'Company 5', logo: 'placeholder.svg' },
  { name: 'Company 6', logo: 'placeholder.svg' },
  { name: 'Company 7', logo: 'placeholder.svg' },
  { name: 'Company 8', logo: 'placeholder.svg' },
];

const LogoScroller: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="animate-logo-scroll inline-flex items-center space-x-16 whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-12 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img 
              src={logo.logo} 
              alt={`${logo.name} logo`} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <div key={`dup-${index}`} className="flex items-center justify-center h-12 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img 
              src={logo.logo} 
              alt={`${logo.name} logo`} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
