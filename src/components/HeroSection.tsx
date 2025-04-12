
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LogoScroller from './LogoScroller';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cto-dark mb-6 leading-tight">
              Empowering Businesses<br />
              With Strategic Innovation.
            </h1>
            <p className="text-xl md:text-2xl text-cto-gray mb-10 leading-relaxed">
              Bespoke fractional CTO and early-stage advisor services, to guide you from startup to scale with strategic tech leadership.
            </p>
            <Button 
              className="bg-cto-blue hover:bg-cto-blue/90 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
            >
              Book a FREE Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Right Column: Image */}
          <div className="relative h-full flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Tech Executive" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cto-blue/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
        
        {/* Full-width Logo Section */}
        <div className="w-full overflow-hidden">
          <h3 className="text-center text-cto-gray font-medium mb-8">Trusted by innovative companies</h3>
          <LogoScroller />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
