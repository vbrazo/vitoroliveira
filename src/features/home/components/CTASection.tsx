
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from "@/design-system";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <Section className="bg-black bg-opacity-90 text-white text-center">
      <Container className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="hidden md:flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.open(buttonLink, '_blank')}
          >
            {buttonText}
          </motion.button>
        </div>

        <div className="w-full cursor-pointer flex md:!hidden justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-sm rounded-md uppercase bg-white border duration-200 border-neutral-700 border-opacity-40 text-neutral-700 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.open(buttonLink, '_blank')}
          >
            {buttonText}
          </motion.button>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;
