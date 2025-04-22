import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import ServicesSection from '@/components/ServicesSection';
import EngagementSection from '@/components/EngagementSection';
import WhyCTOSection from '@/components/WhyCTOSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <TestimonialSection />
        <ServicesSection />
        <EngagementSection />
        <WhyCTOSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
