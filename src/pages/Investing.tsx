import Header from '@/components/Header';
import EngagementSection from '@/components/EngagementSection';
import Footer from '@/components/Footer';

const Investing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="flex relative flex-col text-center md:text-left items-center justify-center gap-16 md:items-start w-full min-h-[screen]">
          <div className="container mt-20 flex flex-col md:flex-row max-w-7xl justify-center items-center gap-8 md:gap-0">
            <EngagementSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investing;
