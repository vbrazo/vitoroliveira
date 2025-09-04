import Header from '@/design-system/compositions/common/Header';
import Footer from '@/design-system/compositions/common/Footer';

import {
  Blog,
  StudyCases,
  HeroSection,
  ServicesSection,
  EngagementSection,
  WhyCTOSection,
  CTASection,
  ScrollingTestimonials,
  StaggerTestimonials,
} from '@/features/home/components';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <EngagementSection />
        <StudyCases />
        <WhyCTOSection />
        <div className="md:hidden flex">
          <StaggerTestimonials />
        </div>
        <div className="hidden md:flex">
          <ScrollingTestimonials />
        </div>
        <Blog />
        <CTASection
          title = "Take your technology to the next level. <br />Bring a CTO on board."
          description = "By the time you realize you need a CTO, the damage of not having one may already be done. Don't wait! Secure the leadership your future depends on."
          buttonText = "Book a FREE Discovery Call"
          buttonLink = "https://intro.co/VitorOliveira" />
      </main>
      <Footer title="Vitor Oliveira" description="Strategic Leadership in Technology, Product, and Growth" />
    </div>
  );
};

export default HomePage;
