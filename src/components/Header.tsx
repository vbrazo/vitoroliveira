
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm py-4 border-gray-200">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-cto-dark">&nbsp;</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-cto-gray hover:text-cto-blue transition-colors">Services</a>
          <a href="#engagement" className="text-cto-gray hover:text-cto-blue transition-colors">Engagement</a>
          <a href="#why" className="text-cto-gray hover:text-cto-blue transition-colors">Why a CTO?</a>
        </nav>
        <Button 
          className="bg-cto-blue hover:bg-cto-blue/90"
          onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
        >
          Book a Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
