import Header from '@/design-system/compositions/Header';
import HeroSection from '@/design-system/compositions/HeroSection';
import ServicesSection from '@/design-system/compositions/ServicesSection';
import EngagementSection from '@/design-system/compositions/EngagementSection';
import WhyCTOSection from '@/design-system/compositions/WhyCTOSection';
import CTASection from '@/design-system/compositions/CTASection';
import Footer from '@/design-system/compositions/Footer';
import Blog from '../design-system/compositions/Blog';
import StudyCases from '../design-system/compositions/StudyCases';
import ScrollingTestimonials from '@/design-system/compositions/ScrollingTestimonials';
import { StaggerTestimonials } from '@/design-system/compositions/StaggerTestimonials';

const CTOServices = () => {
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
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CTOServices;
