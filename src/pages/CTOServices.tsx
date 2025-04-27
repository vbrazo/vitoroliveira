import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import EngagementSection from '@/components/EngagementSection';
import WhyCTOSection from '@/components/WhyCTOSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Blog from '../components/Blog';
import StudyCases from '../components/StudyCases';
import ScrollingTestimonials from '@/components/ScrollingTestimonials';
import { StaggerTestimonials } from '@/components/StaggerTestimonials';

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
