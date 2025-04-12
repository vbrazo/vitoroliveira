
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-cto-dark text-white text-center">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate your tech game.<br />
          Partner with a CTO today.
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Waiting until you know you need a CTO is often too late to reduce the pain of not having one sooner. Don't risk your future.
        </p>
        <Button 
          size="lg" 
          className="bg-cto-blue hover:bg-cto-blue/90 text-white px-8 py-6 text-lg rounded-md"
          onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
        >
          Book a FREE Discovery Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
