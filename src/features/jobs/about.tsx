import React, { useEffect, useState } from 'react';
import Header from '@/design-system/compositions/common/Header';
import Footer from '@/design-system/compositions/common/Footer';
import { 
  Section, 
  Container, 
  Heading, 
  Text, 
  TrustIndicators,
  ValueCard,
  ProcessStep,
  DifferentiatorCard,
  CTASection,
  CalModal
} from '@/design-system';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/design-system/compositions/ui/accordion';
import { 
  MessageSquare, 
  Target, 
  Search, 
  Shield, 
  Send, 
  Clock, 
  DollarSign,
  CheckCircle2,
  Users,
  TrendingUp,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const JobsAboutPage = () => {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      subtitle: 'Understand your needs',
      icon: MessageSquare,
      description: 'We start with a deep conversation about your technical requirements, team dynamics, budget constraints, and company culture. This alignment ensures we\'re looking for the perfect fit from day one.',
      outcome: 'Clear candidate profile and success criteria defined'
    },
    {
      step: 2,
      title: 'Strategy',
      subtitle: 'Define the ideal candidate',
      icon: Target,
      description: 'Together, we map your needs to specific candidate archetypes, considering: local vs. international talent, fractional/advisory vs. full-time engagement, contract vs. permanent positions, and required seniority and specialization.',
      outcome: 'Customized sourcing strategy aligned with your constraints'
    },
    {
      step: 3,
      title: 'Sourcing',
      subtitle: 'Source qualified candidates',
      icon: Search,
      description: 'Leveraging our network of vetted engineers and fractional consultants, we identify candidates who match your profile. We tap into both active job seekers and passive talent open to the right opportunity.',
      outcome: '12-15 qualified candidates identified from our network'
    },
    {
      step: 4,
      title: 'Vetting',
      subtitle: 'Technical vetting & assessment',
      icon: Shield,
      description: 'We thoroughly vet approximately a dozen candidates through code reviews, technical interviews, portfolio assessments, and reference checks. We evaluate technical skills, communication abilities, and cultural alignment.',
      outcome: 'Top 2-3 candidates ready for your review'
    },
    {
      step: 5,
      title: 'Delivery',
      subtitle: 'Receive curated options',
      icon: Send,
      description: 'Instead of overwhelming you with dozens of resumes, we send you 2-3 highly qualified candidates. Each comes with a detailed assessment, so you can make informed decisions quickly and efficiently.',
      outcome: 'Hire-ready candidates delivered with full context'
    }
  ];

  const faqs = [
    {
      question: 'How do you vet candidates?',
      answer: 'Every candidate goes through a rigorous multi-stage vetting process: code review of their portfolio or GitHub, technical interview covering system design and problem-solving, behavioral assessment for communication and cultural fit, and reference checks with previous employers or clients. We spend 12+ hours vetting each candidate before they reach you.'
    },
    {
      question: 'How do you make money?',
      answer: 'We charge a placement fee only when you successfully hire a candidate we\'ve matched. Our fee is a percentage of the first year\'s compensation, typically 15-20% depending on the role and engagement type. No upfront costs, no retainer fees—we only get paid when you hire.'
    },
    {
      question: 'How long does the process take?',
      answer: 'From initial discovery call to receiving your first candidates: typically 5-7 days. The entire process from start to offer acceptance averages 14 days. We move fast without compromising on quality.'
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Fit-First Matching',
      description: 'We prioritize cultural and technical alignment over speed. Better to wait 2 weeks for the right person than hire the wrong one in 2 days.'
    },
    {
      icon: Shield,
      title: 'Rigorous Vetting',
      description: '12+ hours of vetting per candidate. Code reviews, technical interviews, and reference checks—all done before they reach your inbox.'
    },
    {
      icon: Users,
      title: 'Curated Quality',
      description: '2-3 perfectly matched candidates, not 50 resumes. Each comes with detailed technical assessments and team fit analysis.'
    }
  ];

  const testimonials = [
    {
      quote: 'Fit-first mindset paired with speed of execution makes this our go-to partner for hiring needs.',
      author: 'Ravi Boppana',
      role: 'Director of Engineering',
      company: 'Bluesight'
    },
    {
      quote: 'Quality talent compared to the rest. They understand both technical requirements and team dynamics.',
      author: 'Scott Barber',
      role: 'Head of Engineering',
      company: 'Level'
    },
    {
      quote: 'Niche skillsets on short notice. They delivered exactly what we needed when we needed it.',
      author: 'Noemi Millman',
      role: 'VP Engineering',
      company: 'Getthru'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-[70px]">
        {/* Hero Section */}
        <Section className="bg-white">
          <Container maxWidth="6xl" className="text-center">
            <Heading as="h1" size="4xl" className="mb-3 md:mb-4 text-gray-900 text-2xl md:text-3xl lg:text-4xl px-4">
              Stop Wasting Time on Bad Hires
            </Heading>
            <Text className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 md:mb-6 max-w-3xl mx-auto px-4">
              Find engineers who fit, not just fill roles
            </Text>
            <Text className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Our fit-first methodology matches you with vetted engineers and fractional consultants 
              who align with your culture, technical needs, and growth stage—typically in under 2 weeks.
            </Text>
            <TrustIndicators
              indicators={[
                { label: '2-3 curated candidates, not 50 resumes' },
                { label: 'Technical vetting included' },
                { label: '90%+ placement success rate' },
              ]}
              iconColor="text-green-600"
              textColor="text-gray-600"
              className="mb-6 md:mb-8 px-4"
            />
            <motion.button
              onClick={() => setIsCalModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-black text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Schedule a call
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </motion.button>
          </Container>
        </Section>

        {/* Value Proposition */}
        <Section className="bg-white">
          <Container maxWidth="6xl">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
              <Heading as="h2" size="3xl" className="mb-3 md:mb-4 text-gray-900 text-xl md:text-2xl lg:text-3xl">
                The Right Engineer, Faster
              </Heading>
              <Text className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
                Thoroughly vetted talent matched to your technical needs, team dynamics, and budget. 
                From fractional experts to full-time builders.
              </Text>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 px-4">
              <ValueCard
                icon={Clock}
                title="Save 20+ Hours Per Hire"
                description="No more sifting through hundreds of resumes. We do the sourcing, screening, and technical vetting so you can focus on building."
                iconBgColor="bg-blue-100"
                iconColor="text-blue-600"
              />
              <ValueCard
                icon={TrendingUp}
                title="Reduce Hiring Risk"
                description="Every candidate is pre-vetted for technical skills, communication, and cultural fit. Our 90-day guarantee means you hire with confidence."
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
              />
              <ValueCard
                icon={Zap}
                title="Match in 5-7 Days"
                description="Fast turnaround without compromising quality. Most clients receive their first candidates within a week of our discovery call."
                iconBgColor="bg-purple-100"
                iconColor="text-purple-600"
              />
            </div>
          </Container>
        </Section>

        {/* Process Timeline */}
        <Section className="bg-gray-50">
          <Container maxWidth="6xl">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 px-4">
              <Heading as="h2" size="3xl" className="mb-3 md:mb-4 text-gray-900 text-xl md:text-2xl lg:text-3xl">
                The Fit-First Process
              </Heading>
              <Text className="text-base md:text-lg lg:text-xl text-gray-700">
                A streamlined process designed to find you the right talent, fast
              </Text>
            </div>

            <div className="relative max-w-4xl mx-auto px-4">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  subtitle={step.subtitle}
                  description={step.description}
                  outcome={step.outcome}
                  icon={step.icon}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Key Differentiators */}
        <Section className="bg-white">
          <Container maxWidth="6xl">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
              <Heading as="h2" size="3xl" className="mb-3 md:mb-4 text-gray-900 text-xl md:text-2xl lg:text-3xl">
                Why We're Different
              </Heading>
              <Text className="text-base md:text-lg lg:text-xl text-gray-700">
                The same standards I bring to CTO consulting, I apply to talent matching
              </Text>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
              {differentiators.map((diff, index) => (
                <DifferentiatorCard
                  key={index}
                  icon={diff.icon}
                  title={diff.title}
                  description={diff.description}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-white">
          <Container maxWidth="6xl">
            <div className="max-w-3xl mx-auto px-4">
              <Heading as="h2" size="3xl" className="mb-6 md:mb-8 text-center text-gray-900 text-xl md:text-2xl lg:text-3xl">
                Frequently Asked Questions
              </Heading>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm md:text-base">
                      <div className="flex items-center gap-2 md:gap-3">
                        {index === 0 && <Clock className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />}
                        {index === 1 && <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />}
                        {index > 1 && <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />}
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Text className="text-sm md:text-base text-gray-600 pl-6 md:pl-8">
                        {faq.answer}
                      </Text>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section className="bg-black text-white">
          <Container maxWidth="6xl" className="text-center">
            <CTASection
              title="Ready to find your next engineer?"
              description="Right talent. Right fit. Right now."
              buttonLabel="Get in touch"
              onAction={() => setIsCalModalOpen(true)}
              variant="dark"
              className="px-4"
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

export default JobsAboutPage;

