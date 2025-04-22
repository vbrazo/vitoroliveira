
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-200 text-black">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <Quote className="h-12 w-12 mx-auto mb-6 text-black opacity-90" />
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-6 leading-relaxed">
          "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
        </blockquote>
        <cite className="text-zinc-500 text-xl block">
          ― Stewart Brand
        </cite>
      </div>
    </section>
  );
};

export default TestimonialSection;
