import React from 'react';
import { Users, BarChart, Shield, FileText, Code, GraduationCap, MessageSquare, Group, UsersRound, Map } from 'lucide-react';
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
    title: "Engineering Team Building & Leadership",
    description: "Recruit, structure, and mentor high-performing engineering teams tailored to your startup's stage. Create a sustainable and scalable engineering culture.",
    icon: <Group className="h-8 w-8 text-black" />
  },
  {
    id: 4,
    title: "Technology Roadmapping & Prioritization",
    description: "Design and implement a clear, actionable technology roadmap that balances short-term wins and long-term vision, ensuring alignment with business objectives",
    icon: <Map className="h-8 w-8 text-black" />
  },
  {
    id: 5,
    title: "Regulatory & Compliance Assistance",
    description: "Secure data and build trust with focused, strategic guidance, propelling your business towards secure growth. Get help navigating regulated industries",
    icon: <Shield className="h-8 w-8 text-black" />
  },
  {
    id: 6,
    title: "Due Diligence & Investor Support",
    description: "Support founders with technical due diligence assessments, pitch deck refinement, and strategic investor introductions to strengthen fundraising efforts and unlock growth opportunities",
    icon: <FileText className="h-8 w-8 text-black" />
  },
  {
    id: 7,
    title: "Web & Mobile App Development",
    description: "Custom web and mobile application development, from concept to deployment. Specializing in both traditional coding and no-code/low-code solutions to match your needs and budget",
    icon: <Code className="h-8 w-8 text-black" />,
    linkUrl: "https://mentorcruise.com/mentor/vitoroliveira/",
    linkText: "Book a session"
  },
  {
    id: 8,
    title: "Engineering & Management Mentoring",
    description: "Personalized mentoring for software engineers and technical managers looking to advance their careers, improve their leadership skills, or navigate challenging professional situations",
    icon: <GraduationCap className="h-8 w-8 text-black" />,
    linkUrl: "https://mentorcruise.com/mentor/vitoroliveira/",
    linkText: "Book a session"
  },
  {
    id: 9,
    title: "Interview Preparation",
    description: "Comprehensive interview preparation for software engineering roles, including system design, coding challenges, behavioral interviews, and technical discussions. Get personalized coaching and mock interviews",
    icon: <MessageSquare className="h-8 w-8 text-black" />,
    linkUrl: "https://mentorcruise.com/mentor/vitoroliveira/",
    linkText: "Book a session"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 scroll-mt-5">
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
              icon={service.icon}
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
