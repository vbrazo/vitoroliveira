import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { SpringModal } from "./SpringModal";
import { ShiftHightlightTabs } from "./Tags";

import Strides from "/study-cases/strides.webp";
import Napice from "/study-cases/napice.png";
import Paywith from "/study-cases/paywith.jpeg";
import Scena from "/study-cases/scena.webp";
import GoBooks from "/study-cases/gobooks.webp";
import ScalablePath from "/study-cases/scalable-path.png";
import Michelin from "/study-cases/michelin.jpg";
import TwoOneTwoOneTwo from "/study-cases/21212.jpg";
import BancoBBM from "/study-cases/banco-bbm.jpg";
import MRSLogistica from "/study-cases/mrs-logistica.jpg";
import FakerRuby from "/study-cases/faker-ruby.png";
import FakerElixir from "/study-cases/faker-elixir.png";
import TheAlgorithms from "/study-cases/the-algorithms.png";
import Cuid from "/study-cases/cuid-mx.png";
import JornadaMima from "/study-cases/jornada-mima.png";
import DeltaAI from "/study-cases/delta-ai.png";
import Investidores from "/study-cases/investidores-vc.png";
import NextGen from "/study-cases/nextgen-vp.jpeg";
import HustleFund from "/study-cases/hustle-fund.webp";
import Leadsales from "/study-cases/leadsales.webp";
import PlataformaImpact from "/study-cases/plataforma-impact.jpeg";
import SuperCharger from "/study-cases/supercharger-ventures.jpg";
import LISA from "/study-cases/lisa-accelerator.png";
import InvestOttawa from "/study-cases/invest-ottawa.jpeg";
import Gunio from "/study-cases/gun-io.webp";

const caseStudies = {
  "1": [
    {
      heading: "Strides Tech Community",
      description: "A lifelong learning platform for career growth through mentorship, training and knowledge sharing",
      imgSrc: Strides
    },
    {
      heading: "Napice",
      description: "Education and community platform for software engineering leaders. Live courses, cohorts, tech talks, and trainings focused on leadership",
      imgSrc: Napice
    },
    {
      heading: "Paywith",
      description: "PayWith's payment innovations platform allows businesses to create powerful, mobile-centric payment programs, faster, cheaper, and with more security and control",
      imgSrc: Paywith
    },
    {
      heading: "Scena Labs",
      description: "Scena was a visual recommendation engine that helps you find restaurants and nightlife that fit your style",
      imgSrc: Scena
    },
    {
      heading: "GoBooks",
      description: "GoBooks was the first textbook rental company in Brazil",
      imgSrc: GoBooks
    },
  ],
  "2": [
    {
      heading: "Scalable Path",
      description: "Scalable Path is a network of 26,000+ remote software developers from more than 179 countries",
      imgSrc: ScalablePath
    },
    {
      heading: "Michelin",
      description: "Michelin is a world-leading manufacturer of life-changing composites and experiences",
      imgSrc: Michelin
    },
    {
      heading: "21212 Digital Accelerator",
      description: "21212 is Brazil's leading accelerator and a member of Startup Brasil-- a federally funded program to support entrepreneurship in Brazil",
      imgSrc: TwoOneTwoOneTwo
    },
    {
      heading: "Banco BBM",
      description: "A talent identification and development center that systematically pursues cutting-edge knowledge and prioritizes people who aim to achieve their professional goals, adding value to the organization",
      imgSrc: BancoBBM
    },
    {
      heading: "MRS Logística",
      description: "MRS Logística is a concessionary that controls, operates and monitors the Southeastern Federal Railroad Network",
      imgSrc: MRSLogistica
    }
  ],
  "3": [
    {
      heading: "Faker Ruby",
      description: "A library for generating fake data such as names, addresses, and phone numbers",
      imgSrc: FakerRuby,
      externalLink: "https://github.com/faker-ruby/faker"
    },
    {
      heading: "Faker Elixir",
      description: "Faker is a pure Elixir library for generating fake data",
      imgSrc: FakerElixir,
      externalLink: "https://github.com/elixirs/faker"
    },
    {
      heading: "The Algorithms",
      description: "Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language",
      imgSrc: TheAlgorithms,
      externalLink: "https://github.com/TheAlgorithms"
    }
  ],
  "4": [
    {
      heading: "Cuid.mx",
      description: "Reliable AI-powered security for homes and businesses",
      imgSrc: Cuid,
    },
    {
      heading: "Jornada Mima",
      description: "Jornada Mima takes care of the feeding journey of babies and children",
      imgSrc: JornadaMima,
    },
    {
      heading: "DeltaAI",
      description: "DeltaAI democratizes access to law in Brazil by solving problems in just a few clicks",
      imgSrc: DeltaAI,
    },
    // {
    //   heading: "Flapper",
    //   description: "Aerial mobility, just like you always imagined it. Get an instant price estimate. Charter your aircraft within minutes",
    //   imgSrc: "https://flyflapper.com/stories/wp-content/uploads/2019/05/Flapper-Team-large-1024x682.jpg"
    // },
    // {
    //   heading: "Brota Company",
    //   description: "A smart and autonomous vegetable garden that allows anyone to plant whatever they want at home without having to work or make a mess",
    //   imgSrc: "https://brotacompany.com.br/cdn/shop/files/classica_04-min.jpg?v=1741372712&width=1445"
    // },
    {
      heading: "Investidores.vc",
      description: "The best platform to invest in startups in Brazil",
      imgSrc: Investidores,
    },
    {
      heading: "NextGen Venture Partners",
      description: "NextGen Venture Partners works with over 1,800 Venture Partners to invest $1 million in seed stage companies and $2 million to $10 million in companies with more than $10 million in revenue",
      imgSrc: NextGen,
    },
    {
      heading: "Hustle Fund",
      description: "Hustle Fund is a venture capital firm investing in hilariously-early pre-seed founders",
      imgSrc: HustleFund,
    }
  ],
  "5": [
    {
      heading: "Jornada Mima",
      description: "Jornada Mima takes care of the feeding journey of babies and children",
      imgSrc: JornadaMima,
    },
    {
      heading: "Leadsales",
      description: "El primer CRM y plataforma de Comercio Conversacional para WhatsApp, Facebook y Instagram",
      imgSrc: Leadsales,
    },
    {
      heading: "Plataforma Impact",
      description: "Plataforma Impact helps people in underserved communities start and grow transformative careers in technology",
      imgSrc: PlataformaImpact,
    },
    {
      heading: "SuperCharger Ventures",
      description: "SuperCharger Ventures is a leading EdTech ecosystem located in London, Singapore, and Malta",
      imgSrc: SuperCharger,
    },
    {
      heading: "LISA Stanford Accelerator",
      description: "An ecosystem for Innovators and Startup founders of Stanford GSB Alumni community",
      imgSrc: LISA,
    },
    {
      heading: "Invest Ottawa",
      description: "Ottawa's leading economic development agency for fostering the advancement of the region's globally competitive knowledge-based institutions and industries",
      imgSrc: InvestOttawa,
    },
  ],
  "6": [
    {
      heading: "Gun.io",
      description: "Gun.io sources and manages world-class developers for world class companies",
      imgSrc: Gunio,
    },
  ]
};

const ColorChangeCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [caseStudy, setCaseStudy] = useState("");
  const [selectedTag, setSelectedTag] = useState("1");

  return (
    <section id="study-cases" className="py-5 scroll-mt-[110px] md:scroll-mt-5 bg-slate-100">
      <div className="p-4 md:p-8 bg-slate-100">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-cto-dark">
            Case Studies
          </h2>
          <p className="text-center text-cto-gray max-w-3xl mx-auto mb-6">
            A showcase of my work across engineering leadership, software development, open source contributions, talent management, angel investing, and startup advisory.
          </p>
        </div>

        <ShiftHightlightTabs selected={selectedTag} setSelected={setSelectedTag} />

        <div className="relative mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
            {caseStudies[selectedTag].map((study, index) => (
              <div 
                key={index} 
                onClick={() => { 
                  if (study.externalLink) {
                    window.open(study.externalLink, "_blank");
                  } else {
                    setIsOpen(true); 
                    setCaseStudy(study.heading); 
                  }
                }}
              >
                <Card
                  heading={study.heading}
                  description={study.description}
                  imgSrc={study.imgSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} caseStudy={caseStudy} channel="Website - Homepage" />
    </section>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
}: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <>
      <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      <div className="p-4 relative z-5 h-full text-white md:text-slate-300 md:group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl md:group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div className="space-y-2">
          <h4 className="text-xl md:text-3xl font-semibold">
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p className="text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
    </>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-2xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
