import React from 'react';
import { ArrowRight, Zap, Lock, Activity, Brain, Users, Map, Layout, MessageSquare, BarChart2 } from 'lucide-react';
import { whyCtoCards } from '@/data/why-cto';

const WhyCTOSection: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cto-dark">From Tech Chaos to Strategic Clarity</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyCtoCards.map((card, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-130 group-hover:rotate-1">
                {renderIcon(card.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-cto-dark">{card.title}</h3>
              <p className="text-cto-gray">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3 text-cto-dark">Budget tight? We've got you covered.</h3>
          <p className="text-cto-gray mb-6">
            The truth is, you don't need a full-time CTO to access top-tier technical leadership. A fractional CTO can offer the same strategic insight and expertise, without the full-time cost.
          </p>
          <a href="#services" className="inline-flex items-center text-black hover:underline">
            Learn more about my services 
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyCTOSection;

function renderIcon(name: (typeof whyCtoCards)[number]['icon']) {
  const map = {
    Activity: <Activity className="h-8 w-8 text-black" />,
    Lock: <Lock className="h-8 w-8 text-black" />,
    Zap: <Zap className="h-8 w-8 text-black" />,
    Map: <Map className="h-8 w-8 text-black" />,
    Users: <Users className="h-8 w-8 text-black" />,
    Layout: <Layout className="h-8 w-8 text-black" />,
    BarChart2: <BarChart2 className="h-8 w-8 text-black" />,
    Brain: <Brain className="h-8 w-8 text-black" />,
    MessageSquare: <MessageSquare className="h-8 w-8 text-black" />,
  } as const;
  return map[name];
}
