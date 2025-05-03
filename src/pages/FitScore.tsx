import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Target, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SpringModal } from "@/components/SpringModal";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white">
            <span className="text-gray-800">Introducing Company Fit Score</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Discover your <span className="gradient-text">perfect company fit</span>
          </h1>
          <p className="max-w-[42rem] text-muted-foreground text-lg md:text-xl">
            Find out if you're the ideal candidate for your dream company with our data-driven Fit Score system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#call-to-action" className="scroll-smooth">
              <Button size="lg" className="gap-2 bg-black hover:bg-gray-800">
                Calculate Your Fit Score <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works" className="scroll-smooth">
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-100">
                Learn How it Works
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyDifferentiators = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-gray-800" />,
      title: "Data-Driven Insights",
      description: "Leverage real-time market data and company culture analysis to understand your fit score."
    },
    {
      icon: <Target className="h-8 w-8 text-gray-800" />,
      title: "Personalized Recommendations",
      description: "Get tailored advice on how to improve your fit for specific companies."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-gray-800" />,
      title: "Comprehensive Analysis",
      description: "We analyze over 50 data points to create your detailed company fit profile."
    },
    {
      icon: <Users className="h-8 w-8 text-gray-800" />,
      title: "Cultural Alignment",
      description: "Understand how well your values and work style align with potential employers."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Company Fit Score?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our platform offers unique advantages that help you understand your ideal company match better than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-opacity-50 hover:border-gray-800 transition-all duration-300">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Profile",
      description: "Enter your LinkedIn URL, contact details, and target company.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes your profile against company culture and requirements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "03",
      title: "Receive Your Fit Score",
      description: "Get a detailed score from 0-10 with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "04",
      title: "Take Informed Action",
      description: "Use insights to improve your application or focus on better matches.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Company Fit Score Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A simple four-step process to discover your ideal company match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48">
                <img 
                  src={step.image} 
                  alt={`Step ${step.number}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoIntroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
          {isPlaying ? (
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="ICPC Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
                }}
              ></div>
              
              <Button 
                onClick={handlePlayVideo}
                className="relative z-10 rounded-full h-20 w-20 flex items-center justify-center bg-black/90 hover:bg-black hover:scale-105 transition-all shadow-lg"
              >
                <Play className="h-10 w-10" />
                <span className="sr-only">Play Video</span>
              </Button>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
                <h3 className="text-xl font-bold">Discover Your Perfect Company Match</h3>
                <p className="text-white/80">Learn how our AI-powered system evaluates your profile</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const HowToUse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    linkedin: "",
    email: "",
    phone: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.linkedin || !formData.email || !formData.company) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const payload = {
        channel: "#site",
        username: "BotNotifier",
        text: `New Fit Score Request:\nLinkedIn: ${formData.linkedin}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTarget Company: ${formData.company}`,
        icon_emoji: ":robot_face:"
      };

      const response = await fetch("https://hooks.slack.com/services/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", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `payload=${encodeURIComponent(JSON.stringify(payload))}`,
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Slack");
      }

      toast.success("Your Fit Score request has been submitted!");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error sending message to Slack:", error);
      toast.error("Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="call-to-action" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Your Fit Score Today</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take the first step toward finding your ideal company match. Our simple process takes less than 5 minutes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-1 rounded-full">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Enter your LinkedIn profile URL</h3>
                    <p className="text-muted-foreground">We'll analyze your professional experience and skills</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-1 rounded-full">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Provide your contact information</h3>
                    <p className="text-muted-foreground">So we can send your personalized Fit Score report</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-1 rounded-full">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Select your target company</h3>
                    <p className="text-muted-foreground">Tell us where you're applying or interviewing</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Calculate Your Company Fit Score</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="linkedin">
                    LinkedIn URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.linkedin}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="company">
                    Target Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="e.g., Google, Microsoft, Amazon"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Calculate My Fit Score"}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <SpringModal 
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        caseStudy="Fit Score Analysis"
        channel="Fit Score"
      />
    </>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Company Fit Score?",
      answer: "Fit Score is a data-driven assessment that evaluates how well your professional profile, skills, and experience align with a specific company's culture, values, and requirements. The system provides a score from 0-10 along with detailed insights."
    },
    {
      question: "How accurate is the Fit Score?",
      answer: "Our Fit Score is based on comprehensive analysis of your professional profile, company data, and industry benchmarks. While no system can predict with 100% accuracy, our algorithm has been fine-tuned to provide highly reliable assessments that have helped thousands of candidates make informed career decisions."
    },
    {
      question: "How do you evaluate my profile?",
      answer: "We analyze your LinkedIn profile data, including your experience, skills, education, and recommendations. This information is compared against our database of company profiles, which includes culture, values, technical requirements, and success patterns of current employees."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we take data privacy very seriously. All information you provide is encrypted and stored securely. We do not share your personal data with third parties without your explicit consent, and we comply with all relevant data protection regulations."
    },
    {
      question: "Can I assess my fit for multiple companies?",
      answer: "Absolutely! You can request Fit Scores for multiple companies to compare and find your best potential matches. After your first assessment, additional company evaluations can be requested from your dashboard."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our Company Fit Score system
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const FitScore = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <KeyDifferentiators />
        <HowItWorks />
        {/* <VideoIntroSection /> */}
        <HowToUse />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FitScore;
