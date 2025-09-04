import React from 'react';
import { Users, BarChart, Shield, FileText, Code, GraduationCap, MessageSquare, Group, Map } from 'lucide-react';

import { ServiceCard } from '@/features/home/components';

import { services } from '@/data/services';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 scroll-mt-20 md:scroll-mt-5">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cto-dark">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={renderIcon(service.icon)}
              linkUrl={service.linkUrl}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

function renderIcon(name: (typeof services)[number]['icon']) {
  const map = {
    Users: <Users className="h-8 w-8 text-black" />,
    BarChart: <BarChart className="h-8 w-8 text-black" />,
    Shield: <Shield className="h-8 w-8 text-black" />,
    FileText: <FileText className="h-8 w-8 text-black" />,
    Code: <Code className="h-8 w-8 text-black" />,
    GraduationCap: <GraduationCap className="h-8 w-8 text-black" />,
    MessageSquare: <MessageSquare className="h-8 w-8 text-black" />,
    Group: <Group className="h-8 w-8 text-black" />,
    Map: <Map className="h-8 w-8 text-black" />,
  } as const;
  return map[name];
}
