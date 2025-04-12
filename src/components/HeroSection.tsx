
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LogoScroller from './LogoScroller';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cto-dark mb-6 leading-tight">
            Empowering Businesses<br />
            With Strategic Innovation.
          </h1>
          <p className="text-xl md:text-2xl text-cto-gray mb-10 leading-relaxed">
            Bespoke fractional CTO and early-stage advisor services, to guide you from startup to scale with strategic tech leadership.
          </p>
          <Button className="bg-cto-blue hover:bg-cto-blue/90 text-white px-8 py-6 text-lg rounded-md">
            Book a FREE Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-20 overflow-hidden">
          <h3 className="text-center text-cto-gray font-medium mb-8">Trusted by innovative companies</h3>
          <LogoScroller />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
