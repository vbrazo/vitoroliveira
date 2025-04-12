
import React from 'react';

const logos = [
  { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Apple', logo: 'https://images.unsplash.com/photo-1580427319346-40aa21a0bacb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1557163639-ba77b370d179?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Facebook', logo: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1605558162119-2d7da229a7a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'IBM', logo: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
  { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80' },
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
