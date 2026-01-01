import React, { useEffect, useState } from 'react';
import Header from '@/design-system/compositions/common/Header';
import Footer from '@/design-system/compositions/common/Footer';
import { Section, Container, Heading, Text, AnimatedGridBackground, TrustIndicators, CTASection, CalModal } from '@/design-system';
import { jobs } from '@/data/jobs';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { JobCard, EmptyState } from './components';

const JobsListPage = () => {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow mt-[70px]">
        {/* Hero Section */}
        <Section className="relative overflow-hidden bg-slate-950 text-white">
          <AnimatedGridBackground />
          <Container maxWidth="4xl" className="relative z-20 text-center py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <Text className="text-sm font-medium text-white/90">
                {jobs.length} Open Position{jobs.length !== 1 ? 's' : ''}
              </Text>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading as="h1" size="4xl" className="mb-4 md:mb-6 text-white text-2xl md:text-3xl lg:text-4xl">
                Open Engineering Roles
              </Heading>
              <Text className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Pre-vetted engineering opportunities at high-growth startups. 
                Each role has been carefully matched to ensure the right fit for both you and the company.
              </Text>
            </motion.div>

            <TrustIndicators
              indicators={[
                { label: 'Pre-vetted companies' },
                { label: 'Fast-track applications' },
                { label: 'Competitive compensation' },
              ]}
              className="mt-6 md:mt-8 px-4"
            />
          </Container>
        </Section>

        {/* Jobs List */}
        <Section className="bg-gray-50 -mt-8 relative z-10">
          <Container maxWidth="6xl">
            {jobs.length === 0 ? (
              <EmptyState
                title="No open positions at the moment"
                description="Check back soon or get in touch to learn about upcoming opportunities."
                actionLabel="Get in touch"
                onAction={() => setIsCalModalOpen(true)}
              />
            ) : (
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    index={index}
                    showActiveBadge={index === 1}
                  />
                ))}
              </div>
            )}

            {/* CTA Section */}
            <CTASection
              title="Don't see the right role?"
              description="We're always adding new opportunities. Get in touch to learn about upcoming roles or to discuss how we can help you find the perfect engineering position."
              buttonLabel="Get in touch"
              onAction={() => setIsCalModalOpen(true)}
              icon={Sparkles}
              variant="dark"
              className="mt-16"
            />
          </Container>
        </Section>
      </main>
      <Footer 
        title="Vitor Oliveira" 
        description="Strategic Leadership in Technology, Product, and Growth" 
      />

      <CalModal open={isCalModalOpen} onOpenChange={setIsCalModalOpen} />
    </div>
  );
};

export default JobsListPage;
