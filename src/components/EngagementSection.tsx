import React from 'react';

const engagements = [
  {
    id: 1,
    title: "Virtual",
    hours: "1-4 hours/week",
    description: "Highly fractional, advisory leadership and coaching"
  },
  {
    id: 2,
    title: "Fractional",
    hours: "1-3 days/week",
    description: "Part-time leadership where full-time isn't needed"
  },
  {
    id: 3,
    title: "Interim",
    hours: "3-5 days a week",
    description: "Full-time leadership during an unplanned or forced vacancy"
  },
  {
    id: 4,
    title: "Full-time",
    hours: "5 days a week",
    description: "Dedicated partnership for long-term success"
  }
];

const EngagementSection: React.FC = () => {
  return (
    <section id="engagement" className="py-20 scroll-mt-5 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cto-dark">
          Engaged When and How You Need
        </h2>
        <p className="text-center text-cto-gray max-w-3xl mx-auto mb-16">
          Flexible engagement models tailored to your specific needs and timing requirements.
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {engagements.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-cto-dark mb-2">{item.title}</h3>
              <p className="text-zinc-600 font-medium mb-4">{item.hours}</p>
              <p className="text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
