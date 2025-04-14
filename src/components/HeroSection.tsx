import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50">
      <div className="container flex flex-col md:flex-row  max-w-7xl justify-center items-center gap-8 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8 md:py-0 px-4 md:px-0">
          <div>
            <div className="text-[26px] md:text-[44px] font-bold uppercase leading-snug md:leading-[46px]">
              Empowering Businesses With Strategic Innovation
            </div>
          </div>

          <div className="mt-4 md:mt-[3vh] w-full md:w-[456px]">
            <span className="text-gray-700 text-[18px] md:text-[20px] font-medium tracking-tight leading-[18px] md:leading-normal">
              Bespoke fractional CTO and early-stage advisor services, to guide you from startup to scale with strategic tech leadership.
            </span>
          </div>

          <div className="mt-6 md:mt-[48px] hidden md:flex">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md uppercase"
              onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
            >
              Book a FREE Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="w-full cursor-pointer flex md:!hidden py-[24px] pt-[30px]">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md uppercase"
              onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
            >
              Book a FREE Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative px-4 md:px-0">
          <div className="relative w-full h-full max-h-[300px] sm:max-h-[400px] md:max-h-none">
            <img
              className="w-full h-full object-cover"
              src="/vitor-v1.jpg"
              alt="Vitor Oliveira"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
