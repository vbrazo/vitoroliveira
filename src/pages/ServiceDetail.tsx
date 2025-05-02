
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar, FileText, MessageSquare, Package, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Service data
const serviceData = {
  "fractional-cto": {
    title: "Fractional CTO",
    heroSubtitle: "Expert technical leadership without the full-time commitment",
    description: "Get strategic technical guidance and leadership for your startup or growing business with flexible engagement options tailored to your needs.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    problems: [
      "Struggling to make critical technical decisions without experienced guidance",
      "Facing challenges in scaling your infrastructure as you grow",
      "Difficulty attracting and retaining technical talent",
      "Lacking technical strategy aligned with business objectives"
    ],
    solution: "As your Fractional CTO, I provide strategic technical leadership on a part-time basis, bringing over 15 years of experience in scaling startups and building high-performance teams. I'll help you make informed technology decisions, establish development processes, and build a technical roadmap that supports your business goals.",
    benefits: [
      "Access to senior technical expertise at a fraction of full-time cost",
      "Strategic technology planning aligned with business objectives",
      "Improved engineering team performance and processes",
      "Reduced technical debt and infrastructure optimization"
    ],
    process: [
      { title: "Discovery", description: "We start with a comprehensive assessment of your current technical needs and challenges." },
      { title: "Strategy Development", description: "I create a tailored technical roadmap aligned with your business goals." },
      { title: "Implementation", description: "Working with your team, I help execute the strategy and establish best practices." },
      { title: "Ongoing Support", description: "Regular check-ins and guidance to ensure continued success." }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        position: "CEO, TechStartup",
        quote: "Working with Vitor as our Fractional CTO transformed our technical approach. He helped us make critical architecture decisions that saved us months of development time."
      },
      {
        name: "Alex Chen",
        position: "Founder, DataAnalytics",
        quote: "Vitor's guidance as our Fractional CTO was invaluable. He helped us scale our infrastructure while keeping costs under control."
      }
    ],
    pricing: [
      {
        title: "Advisory",
        price: "$2,500/month",
        features: ["Weekly strategy sessions", "Technical direction", "On-call support", "3-month minimum"]
      },
      {
        title: "Active Engagement",
        price: "$5,000/month",
        features: ["Bi-weekly onsite presence", "Team development", "Hands-on technical guidance", "6-month minimum"]
      },
      {
        title: "Full Integration",
        price: "$8,000/month",
        features: ["Weekly onsite presence", "Technical team leadership", "Recruitment assistance", "Strategic planning", "12-month commitment"]
      }
    ],
    faqs: [
      {
        question: "How quickly can you start working with our team?",
        answer: "Typically, I can begin within 2-3 weeks of our initial agreement. The onboarding process involves getting to know your team and understanding your current technical infrastructure."
      },
      {
        question: "Do we need to commit to a minimum engagement period?",
        answer: "Yes, most engagements start with a 3-month minimum to ensure we have enough time to make meaningful impact. After that, we can adjust based on your needs."
      },
      {
        question: "How do you work with our existing technical team?",
        answer: "I work collaboratively with your current team, providing guidance, mentorship, and strategic direction rather than replacing anyone. My goal is to enhance your team's capabilities."
      },
      {
        question: "What industries do you have experience in?",
        answer: "I've worked across various sectors including fintech, healthtech, e-commerce, and SaaS platforms. The technical fundamentals often translate well across industries."
      }
    ]
  },
  "early-stage-advisor": {
    title: "Early Stage Advisor",
    heroSubtitle: "Strategic guidance for your startup's critical first steps",
    description: "Navigate the challenging early stages of your startup with expert technical and strategic advice to build a solid foundation.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
    problems: [
      "Uncertainty about technical architecture and first technology choices",
      "Limited resources to allocate to development",
      "Challenges in validating technical aspects of your MVP",
      "Difficulty attracting technical co-founders or early engineers"
    ],
    solution: "As an Early Stage Advisor, I provide founders with practical guidance on technical decisions, MVP development strategies, and resource allocation. Drawing from my experience working with dozens of startups, I help you avoid common pitfalls and make smart technical choices that align with your business vision.",
    benefits: [
      "Clarity on technical roadmap and architecture decisions",
      "Faster time-to-market with focused MVP development",
      "Reduced risk of costly technical pivots",
      "Better preparedness for technical due diligence"
    ],
    process: [
      { title: "Vision Alignment", description: "Understanding your business goals and translating them to technical requirements." },
      { title: "Technical Strategy", description: "Developing a practical technical approach that balances immediate needs with future scalability." },
      { title: "Resource Planning", description: "Advice on building your initial technical team and resource allocation." },
      { title: "Execution Support", description: "Ongoing guidance as you implement your technical strategy." }
    ],
    testimonials: [
      {
        name: "Michael Wong",
        position: "Founder, HealthApp",
        quote: "Vitor's early stage advice helped us avoid several technical pitfalls that would have cost us dearly. His guidance on our MVP was invaluable."
      },
      {
        name: "Lisa Patel",
        position: "CEO, EdTech Startup",
        quote: "Working with Vitor in our early stages gave us the confidence to make crucial technical decisions. He helped us build a solid foundation that supported our rapid growth."
      }
    ],
    pricing: [
      {
        title: "Starter Package",
        price: "$1,500",
        features: ["2 strategy sessions", "Technical assessment", "Initial roadmap planning", "30 days of email support"]
      },
      {
        title: "Growth Package",
        price: "$3,500",
        features: ["5 strategy sessions", "Comprehensive technical audit", "MVP development guidance", "60 days of support"]
      },
      {
        title: "Launch Package",
        price: "$5,000",
        features: ["8 strategy sessions", "Complete technical strategy", "Team building assistance", "90 days of ongoing support"]
      }
    ],
    faqs: [
      {
        question: "I'm not technical - will your advice still be valuable for me?",
        answer: "Absolutely. In fact, non-technical founders often benefit the most from my advisory services. I translate complex technical concepts into clear business implications to help you make informed decisions."
      },
      {
        question: "We already have some code written. Is it too late to engage your services?",
        answer: "Not at all. I can evaluate your existing codebase and provide guidance on how to improve and scale it. Often, early intervention can prevent significant technical debt down the line."
      },
      {
        question: "Can you help us prepare for technical due diligence for funding?",
        answer: "Yes, this is one of my specialties. I help startups organize their technical assets and prepare for the scrutiny that comes with investment rounds."
      },
      {
        question: "How do we measure the success of your advisory engagement?",
        answer: "We'll establish clear objectives at the beginning of our engagement, which might include technical milestones, successful MVP deployment, or team composition goals. Regular reviews ensure we're tracking progress effectively."
      }
    ]
  },
  "tech-due-diligence": {
    title: "Tech Due Diligence",
    heroSubtitle: "Comprehensive assessment of technical assets for investors and acquirers",
    description: "Get an in-depth evaluation of technology infrastructure, processes, and team capabilities to inform investment or acquisition decisions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    problems: [
      "Uncertainty about the quality and scalability of a target company's technology",
      "Difficulty assessing technical debt and future maintenance costs",
      "Limited understanding of the target's engineering team capabilities",
      "Concerns about security vulnerabilities or compliance issues"
    ],
    solution: "My Tech Due Diligence service provides a comprehensive assessment of a company's technical assets, infrastructure, and engineering practices. I conduct thorough reviews of codebases, architecture, development processes, and team capabilities to identify strengths, weaknesses, risks, and opportunities.",
    benefits: [
      "Detailed understanding of technical assets and liabilities",
      "Clear assessment of scalability and future maintenance requirements",
      "Identification of potential security or compliance risks",
      "Insights on engineering team capabilities and organization"
    ],
    process: [
      { title: "Initial Scope Definition", description: "Defining the specific areas and depth of technical review required." },
      { title: "Comprehensive Review", description: "Thorough analysis of code, architecture, infrastructure, and processes." },
      { title: "Team Assessment", description: "Evaluation of engineering team structure, capabilities, and practices." },
      { title: "Detailed Reporting", description: "Comprehensive report with findings, risks, and recommendations." }
    ],
    testimonials: [
      {
        name: "David Harrison",
        position: "Partner, Venture Capital Firm",
        quote: "Vitor's technical due diligence process uncovered critical issues that would have been costly post-acquisition. His detailed report gave us the leverage we needed in negotiations."
      },
      {
        name: "Emily Chang",
        position: "M&A Director, Tech Enterprise",
        quote: "We rely on Vitor for our technical due diligence needs. His thorough assessments have saved us from making several potentially problematic acquisitions."
      }
    ],
    pricing: [
      {
        title: "Basic Assessment",
        price: "$5,000",
        features: ["Code quality review", "Architecture assessment", "Basic security review", "Summary report"]
      },
      {
        title: "Standard Assessment",
        price: "$12,000",
        features: ["Comprehensive code review", "Detailed architecture analysis", "Security & compliance check", "Team capability assessment", "Detailed report with recommendations"]
      },
      {
        title: "Premium Assessment",
        price: "$25,000+",
        features: ["Full technical audit", "In-depth security analysis", "Extensive scalability testing", "Team & process evaluation", "Comprehensive report", "Integration planning"]
      }
    ],
    faqs: [
      {
        question: "How long does a technical due diligence assessment typically take?",
        answer: "Depending on the scope and complexity, assessments typically take between 2-4 weeks. Expedited reviews can sometimes be arranged for time-sensitive situations."
      },
      {
        question: "What access level do you need to conduct a thorough assessment?",
        answer: "Ideally, I would need access to codebases, infrastructure documentation, and the opportunity to interview key technical team members. However, I can adapt the assessment based on the access level provided."
      },
      {
        question: "Do you sign NDAs for these engagements?",
        answer: "Absolutely. All due diligence work is conducted under strict confidentiality agreements to protect sensitive information."
      },
      {
        question: "Can you assess technologies outside your direct experience?",
        answer: "Yes. While I have deep expertise in certain technologies, my assessment methodology focuses on universal engineering principles that apply across various tech stacks. For highly specialized technologies, I can bring in domain experts as needed."
      }
    ]
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId as keyof typeof serviceData];
  
  if (!service) {
    return <div className="container mx-auto p-8">Service not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 mb-8"
              >
                {service.heroSubtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Challenges You're Facing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-red-100 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-gray-700">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Solution</h2>
                <p className="text-lg text-gray-700 mb-6">{service.solution}</p>
                <FileText className="h-16 w-16 text-blue-600" />
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg relative"
              >
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg border ${
                  index === 1 ? 'border-blue-500 shadow-lg' : 'border-gray-200 shadow-md'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <Package className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                </div>
                <div className="mt-2 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    index === 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  Select Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-10">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take the first step toward solving your technical challenges with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="mr-2 h-5 w-5" /> Schedule a Call
            </Button>
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
