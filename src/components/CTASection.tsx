
import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-black bg-opacity-90 text-white text-center">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate your tech game.<br />
          Partner with a CTO today.
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Waiting until you know you need a CTO is often too late to reduce the pain of not having one sooner. Don't risk your future.
        </p>
        <div className="hidden md:flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.open('https://www.calendly.com/imvitoroliveira', '_blank')}
          >
            Book a FREE Discovery Call
          </motion.button>
        </div>

        <div className="w-full cursor-pointer flex md:!hidden justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-sm rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.open('https://www.calendly.com/imvitoroliveira', '_blank')}
          >
            Book a FREE Discovery Call
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
