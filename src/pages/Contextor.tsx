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
import CTASection from '@/components/CTASection';
import { UndetectableSection } from '@/components/UndetectableSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import useMeasure from "react-use-measure";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white -z-10" />
      <div className="container mx-auto px-4 md:px-6 mt-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-white">
            <span className="text-gray-800">Introducing Contextor</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Everything you need  <span className="gradient-text">before you ask</span>
          </h1>
          <p className="max-w-[42rem] text-muted-foreground text-lg md:text-xl">
            Contextor is an AI-powered platform that helps you understand your ideal company match before you even apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/imvitoroliveira/" className="scroll-smooth" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-black hover:bg-gray-800">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            {/* <a href="#how-it-works" className="scroll-smooth">
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-100">
                Learn How it Works
              </Button>
            </a> */}
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
      title: "Sees what you see",
      description: "Contextor sees and understands all the content on your screen — code, documents, presentations, and dashboards with perfect context awareness."
    },
    {
      icon: <Target className="h-8 w-8 text-gray-800" />,
      title: "Hears what you hear",
      description: "Listens silently in the background and understands your meetings in real time — without ever joining them or being detected."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-gray-800" />,
      title: "Answers anything instantly",
      description: "Just press a key. Contextor knows what you're doing and responds with exactly what matters — no switching tabs, no guesswork, no interruptions."
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white pt-32 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Future of Intelligence</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Contextor helps with anything it sees or understands.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Contextor?",
      answer: "Contextor is an AI assistant that listens to your meetings and coding sessions in real-time, providing context-aware responses and helping you stay on top of conversations. It works silently in the background, understanding everything from pair programming sessions to technical interviews, 1:1 meetings, and product demos."
    },
    {
      question: "How does Contextor work?",
      answer: "Contextor runs in the background of your meetings and coding sessions, listening and understanding the conversation in real-time. It provides instant, context-aware responses to questions and helps recall information from earlier in the discussion, ensuring you never lose track of important points or code context."
    },
    {
      question: "Is Contextor detectable in meetings?",
      answer: "No, Contextor operates completely undetectably in the background. It doesn't join your meetings or appear as a participant - it simply listens and provides assistance without anyone knowing it's there. This makes it perfect for both formal meetings and casual pair programming sessions."
    },
    {
      question: "What types of sessions does Contextor support?",
      answer: "Contextor works with various types of sessions including pair programming, technical interviews, 1:1 conversations, and product demos. It adapts to each context, providing relevant assistance based on whether you're coding, interviewing, or in a meeting."
    },
    {
      question: "How does Contextor maintain context?",
      answer: "Contextor uses advanced AI to understand the full conversation flow, remembering key points, code snippets, and references from earlier in the discussion. This allows it to provide relevant, context-aware responses that take into account both the conversation history and technical context."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Contextor
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Question key={index} title={faq.question}>
              {faq.answer}
            </Question>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contextor = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <KeyDifferentiators />
        <UndetectableSection />
        <UseCasesSection />
        <FAQ />
        <CTASection
         title="All the answers before you need them"
         description="Contextor leverages AI to give you deep insights into your perfect company match, helping you make informed decisions before submitting applications."
         buttonText="Book a Demo"
         buttonLink="https://calendly.com/imvitoroliveira/" />
      </main>
      <Footer title="Contextor" description="By Vitor Oliveira" />
    </div>
  );
};

export default Contextor;
