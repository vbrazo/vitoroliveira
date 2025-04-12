
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-cto-dark text-white">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <Quote className="h-12 w-12 mx-auto mb-6 text-cto-blue opacity-60" />
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-6 leading-relaxed">
          "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
        </blockquote>
        <cite className="text-cto-gray text-xl block">
          ― Stewart Brand
        </cite>
      </div>
    </section>
  );
};

export default TestimonialSection;
