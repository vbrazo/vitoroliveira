import React from 'react';
import { 
  ArrowRight, 
  Zap, 
  Lock, 
  Activity, 
  Brain, 
  Users, 
  Map, 
  Layout, 
  MessageSquare, 
  BarChart2 
} from 'lucide-react';

type CardData = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const WhyCTOSection: React.FC = () => {
  const cards: CardData[] = [
    {
      icon: Activity,
      title: "Software Development Lifecycle (SDLC)",
      description: "Building great technology is a team sport. The CTO is the coach or the team captain that ensures the team is working together to deliver the best outcome possible"
    },
    {
      icon: Lock,
      title: "Security First",
      description: "The digital frontier is fraught with threats that can jeopardize your business's integrity and customer trust. The CTO is the first line of defense to stop threats before they start and maintaining safe and secure operations"
    },
    {
      icon: Zap,
      title: "Antifragility",
      description: "Developing technical and operational systems that are not only resilient to change, but thrive as pressure and chaos increase is critical to surviving hyper-growth within your organization to become the industry leader"
    },
    {
      icon: Map,
      title: "Technical Strategy & Roadmapping",
      description: "Strategic technology roadmapping aligned with business goals, ensuring tech investments are intentional, scalable, and efficient. Bridging the gap between business vision and technical execution"
    },
    {
      icon: Users,
      title: "Talent Acquisition & Development",
      description: "Building and nurturing high-performing technical teams is crucial. A CTO helps attract top talent, fosters a culture of continuous learning, and ensures the right people are in the right roles to drive innovation and growth"
    },
    {
      icon: Layout,
      title: "Platform & Architecture Decisions",
      description: "Guiding critical architecture decisions like cloud infrastructure, system design patterns, and technology investments that maximize scalability and performance. Ensuring your technical foundation supports long-term growth and innovation"
    },
    {
      icon: BarChart2,
      title: "Metrics, KPIs & Engineering Ops",
      description: "Implementing dashboards and operational practices to track engineering performance (velocity, deployment frequency, bug rate, etc.), ensuring continuous improvement and accountability"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Leveraging artificial intelligence and automation to streamline operations, enhance decision-making, and create competitive advantages. A CTO ensures these technologies are implemented responsibly and effectively to drive business growth"
    },
    {
      icon: MessageSquare,
      title: "Stakeholder & Investor Communication",
      description: "Acting as a translator between tech and non-tech stakeholders, and often representing the tech vision to boards or investors during fundraising rounds or strategic planning sessions"
    },
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cto-dark">Need for a<br />Chief Technology Officer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <p className="text-cto-gray mb-6 leading-relaxed">
              A CTO's role goes far beyond managing technology—they design the digital foundation that enables a company to scale and adapt in an ever-evolving landscape.
            </p>
            <p className="text-xl md:text-2xl font-light mb-6 text-cto-dark italic">
              A CTO's responsibilities can differ widely based on the company’s size, industry, and tech priorities. In startups, they’re often deeply involved in hands-on development, while in larger organizations, the role tends to center around strategic leadership and long-term planning.
            </p>
            <p className="text-cto-gray mb-6">
              The scope of a CTO's role often depends on the company’s size, industry, and technological demands. In startups, they may take a hands-on approach to development, whereas in larger organizations, the emphasis typically shifts to strategy, vision, and executive leadership.
            </p>
          </div>
          <div className="relative h-full flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="CTO Leadership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-cto-blue/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-130 group-hover:rotate-1">
                <card.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cto-dark">{card.title}</h3>
              <p className="text-cto-gray">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3 text-cto-dark">No Budget? No problem.</h3>
          <p className="text-cto-gray mb-6">
            The truth is, you don't need a full-time CTO to access top-tier technical leadership. A fractional CTO can offer the same strategic insight and expertise—without the full-time cost.
          </p>
          <a href="#services" className="inline-flex items-center text-black hover:underline">
            Learn more about my fractional CTO services 
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyCTOSection;
