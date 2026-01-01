import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/design-system/compositions/common/Header';
import Footer from '@/design-system/compositions/common/Footer';
import { Section, Container, CalModal, Heading, Text } from '@/design-system';
import { jobs } from '@/data/jobs';
import { ArrowLeft } from 'lucide-react';
import { JobDetailHeader, JobDetailSidebar, JobContentSection } from './components';

const JobDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  const job = jobs.find((j) => j.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mt-[70px]">
          <Section className="bg-white">
            <Container maxWidth="2xl" className="text-center py-16">
              <Heading as="h1" size="3xl" className="mb-4 text-gray-900">
                Job Not Found
              </Heading>
              <Text className="text-lg text-gray-600 mb-8">
                The job you're looking for doesn't exist or has been removed.
              </Text>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Jobs
              </Link>
            </Container>
          </Section>
        </main>
        <Footer 
          title="Vitor Oliveira" 
          description="Strategic Leadership in Technology, Product, and Growth" 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-[70px]">
        {/* Header Section */}
        <Section className="bg-white border-b border-gray-200">
          <Container maxWidth="6xl">
            <JobDetailHeader job={job} />
          </Container>
        </Section>

        {/* Content Section */}
        <Section className="bg-gray-50">
          <Container maxWidth="6xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-6 md:space-y-8">
                <JobContentSection
                  title="About this role"
                  content={job.description}
                />
                <JobContentSection
                  title="Key Responsibilities"
                  items={job.responsibilities}
                />
                <JobContentSection
                  title="Requirements"
                  items={job.requirements}
                />
                <JobContentSection
                  title="Why you should join"
                  items={job.whyJoin}
                />
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <JobDetailSidebar
                  job={job}
                  onApply={() => setIsCalModalOpen(true)}
                  onScheduleCall={() => setIsCalModalOpen(true)}
                />
              </div>
            </div>
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

export default JobDetailPage;

