import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col text-center md:text-left items-center justify-center gap-16 md:items-start w-full bg-black min-h-[screen]">
      <div className="container mt-20 flex flex-col md:flex-row max-w-7xl justify-center items-center gap-8 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center pt-8 md:pt-0 px-4 md:px-0">
          <div>
            <div className="text-[26px] md:text-[44px] font-bold uppercase leading-snug md:leading-[46px] text-white">
              Empowering Businesses With Strategic Innovation
            </div>
          </div>

          <div className="mt-4 md:mt-[3vh] w-full md:w-[456px]">
            <span className="text-gray-100 text-[18px] md:text-[20px] font-medium tracking-tight leading-[18px] md:leading-normal">
              Bespoke fractional CTO and early-stage advisor services, to guide you from startup to scale with strategic tech leadership.
            </span>
          </div>

          <div className="mt-6 md:mt-[48px] hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-lg rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
            >
              Book a FREE Discovery Call
            </motion.button>
          </div>

          <div className="w-full cursor-pointer flex md:!hidden py-[24px] pt-[30px] justify-center">
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-sm rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={() => window.open('https://www.calendly.com/vbrazo', '_blank')}
            >
              Book a FREE Discovery Call
            </motion.button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end relative">
          <div className="relative w-full h-auto md:h-[500px] lg:h-screen">
            <img
              className="w-full h-full object-cover"
              src="/vitor-v2.JPG"
              alt="Vitor Oliveira"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 10%),
                  linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 10%),
                  linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 10%),
                  linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 10%)
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
