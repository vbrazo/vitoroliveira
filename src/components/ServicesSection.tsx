import React from 'react';
import { Users, BarChart, Shield, FileText } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: "Fractional Chief Technology Officer (CTO)",
    description: "Overseeing technology strategy, ensuring that technological resources align with business goals, and leading R&D to gain a competitive edge",
    icon: <Users className="h-8 w-8 text-black" />
  },
  {
    id: 2,
    title: "Early-Stage Technology Advisor & Coach",
    description: "Bridge the gap between technology and strategic business growth. A tailored, hands-on approach not only supports but also accelerates the path to success",
    icon: <BarChart className="h-8 w-8 text-black" />
  },
  {
    id: 3,
    title: "Regulatory & Compliance Assistance",
    description: "Secure data and build trust with focused, strategic guidance, propelling your business towards secure growth. Get help navigating regulated industries",
    icon: <Shield className="h-8 w-8 text-black" />
  },
  {
    id: 4,
    title: "M&A Diligence & Tech Valuation",
    description: "Navigate mergers and acquisitions with precision; assess technology's true value to make informed decisions that drive successful mergers & acquisitions",
    icon: <FileText className="h-8 w-8 text-black" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 scroll-mt-5">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cto-dark">
          Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
