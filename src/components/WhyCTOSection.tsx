import React from 'react';
import { ArrowRight, Zap, Lock, Activity } from 'lucide-react';

const WhyCTOSection: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cto-dark">Need for a<br />Chief Technology Officer</h2>
        </div>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-cto-gray mb-6 leading-relaxed">
              A CTO's role extends beyond mere technology. They architect the digital framework that positions a company for scalability and adaptability in a rapidly changing digital environment.
            </p>
            
            <p className="text-xl md:text-2xl font-light mb-6 text-cto-dark italic">
              Imagine a world where the way you do things is not only a competitive advantage, but the reason you keep coming out on top as an industry leader.
            </p>
            
            <p className="text-cto-gray mb-6">
              The role of a CTO can vary significantly depending on the company's size, industry, and technology needs. In startup environments, a CTO might be more hands-on with software development, while in larger companies, the focus might be more on strategic planning and leadership.
            </p>
          </div>
          
          {/* Right Column: Image */}
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
        
        {/* Full-width section for cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="mb-4">
              <Activity className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cto-dark">Software Development Lifecycle (SDLC)</h3>
            <p className="text-cto-gray">
              Building great technology is a team sport. The CTO is the coach or the team captain that ensures the team is working together to deliver the best outcome possible.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="mb-4">
              <Lock className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cto-dark">Security First</h3>
            <p className="text-cto-gray">
              The digital frontier is fraught with threats that can jeopardize your business's integrity and customer trust. The CTO is the first line of defense to stop threats before they start and maintaining safe and secure operations.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="mb-4">
              <Zap className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cto-dark">Antifragility</h3>
            <p className="text-cto-gray">
              Developing technical and operational systems that are not only resilient to change, but thrive as pressure and chaos increase is critical to surviving hyper-growth within your organization to become the industry leader.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3 text-cto-dark">No Budget? No problem.</h3>
          <p className="text-cto-gray mb-6">
            The reality is that you don't need a full-time CTO to get the benefits of having a CTO. You can have a fractional CTO that can provide the same level of expertise and guidance at a fraction of the cost of a full-time executive role.
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
