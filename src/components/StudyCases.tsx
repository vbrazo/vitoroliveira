import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { SpringModal } from "./SpringModal";
import { ShiftHightlightTabs } from "./Tags";

const caseStudies = {
  "1": [
    {
      heading: "Strides Tech Community",
      description: "A lifelong learning platform for career growth through mentorship, training and knowledge sharing",
      imgSrc: "https://www.strides.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-it-works-1.604b0dd5.webp&w=3840&q=75"
    },
    {
      heading: "Paywith",
      description: "PayWith's payment innovations platform allows businesses to create powerful, mobile-centric payment programs, faster, cheaper, and with more security and control",
      imgSrc: "https://media.licdn.com/dms/image/v2/C561BAQE2zdpkRzc5Aw/company-background_10000/company-background_10000/0/1620549922242/paywith_australia_cover?e=2147483647&v=beta&t=ltw-imeCOBDF0zX9sVUzaKKJ54HmuGnWUZYMdkCSaSk"
    },
    {
      heading: "Scena Labs",
      description: "Scena was a visual recommendation engine that helps you find restaurants and nightlife that fit your style",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1392/format:webp/1*c_rFCMHDv6WGqTObhF-HdA.jpeg"
    },
    {
      heading: "GoBooks",
      description: "GoBooks was the first textbook rental company in Brazil",
      imgSrc: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qXn-UcKwqXm7J6XRvF45bA.jpeg"
    },
  ],
  "2": [
    {
      heading: "Scalable Path",
      description: "Scalable Path is a network of 26,000+ remote software developers from more than 179 countries",
      imgSrc: "https://cdn1-s3.scalablepath.com/disrupt_intro_frame_38b87c0160.png"
    },
    {
      heading: "Michelin",
      description: "Michelin is a world-leading manufacturer of life-changing composites and experiences",
      imgSrc: "https://dgaddcosprod.blob.core.windows.net/cxf-corporate/attachments/clj5heilq4uf00tmn4cgbejnn-bibendum-mouvement-1.0.0.1920.1080.full.jpg"
    },
    {
      heading: "21212 Digital Accelerator",
      description: "21212 is Brazil's leading accelerator and a member of Startup Brasil-- a federally funded program to support entrepreneurship in Brazil",
      imgSrc: "https://miro.medium.com/v2/resize:fit:4000/1*XJQ6PX6i7m4W2GYC-V_oLw.jpeg"
    },
    {
      heading: "Banco BBM",
      description: "A talent identification and development center that systematically pursues cutting-edge knowledge and prioritizes people who aim to achieve their professional goals, adding value to the organization",
      imgSrc: "https://www.bocombbm.com.br/bbm-content./uploads/2018/12/lt2005.jpg"
    },
    {
      heading: "MRS Logística",
      description: "MRS Logística is a concessionary that controls, operates and monitors the Southeastern Federal Railroad Network",
      imgSrc: "https://live.staticflickr.com/65535/52940210201_a490e07deb_b.jpg"
    }
  ],
  "3": [
    {
      heading: "Faker Ruby",
      description: "A library for generating fake data such as names, addresses, and phone numbers",
      imgSrc: "https://opengraph.githubassets.com/d79339dd850aa45e1c2bc5cf809beefda6b7ed19e96ffb448d02494c0183b6e2/faker-ruby/faker",
      externalLink: "https://github.com/faker-ruby/faker"
    },
    {
      heading: "Faker Elixir",
      description: "Faker is a pure Elixir library for generating fake data",
      imgSrc: "https://opengraph.githubassets.com/cb103939c2b51057a41561ebade6a350fc630bb1f725bd9493ce0c7bd2b0b5f4/elixirs/faker",
      externalLink: "https://github.com/elixirs/faker"
    },
    {
      heading: "The Algorithms",
      description: "Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language",
      imgSrc: "https://repository-images.githubusercontent.com/317667451/6450d900-7ac8-11eb-87c2-6490ed11fbbb",
      externalLink: "https://github.com/TheAlgorithms"
    }
  ],
  "4": [
    {
      heading: "Cuid.mx",
      description: "Reliable AI-powered security for homes and businesses",
      imgSrc: "https://cdn.prod.website-files.com/6630e04058310760b61638d6/672d6af2f2a3c344e2c07677_663cdece6e163475e7744fd5_home-p-800.png"
    },
    {
      heading: "Jornada Mima",
      description: "Jornada Mima takes care of the feeding journey of babies and children",
      imgSrc: "https://www.projetodraft.com/wp-content/uploads/2024/12/084_004-Com-Sal.png"
    },
    {
      heading: "Investidores.vc",
      description: "The best platform to invest in startups in Brazil",
      imgSrc: "https://s.criacaostatic.cc/investidoresvcktt77n5c/uploads/2025/02/INVESTIDORES.png"
    },
    {
      heading: "NextGen Venture Partners",
      description: "NextGen Venture Partners works with over 1,800 Venture Partners to invest $1 million in seed stage companies and $2 million to $10 million in companies with more than $10 million in revenue",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5622AQGe2DLCuJJg8A/feedshare-shrink_800/feedshare-shrink_800/0/1712621092452?e=2147483647&v=beta&t=-k-Hm65EIkn6r0oVFgKyM5vd4Ngl8XmfADvEvWflqPg"
    },
    {
      heading: "Hustle Fund",
      description: "Hustle Fund is a venture capital firm investing in hilariously-early pre-seed founders",
      imgSrc: "https://i.vimeocdn.com/video/1960427049-8a4c0144cdc6c9a9aaa698998bc6818afc4a471e6ae726ae58702b13cd19eddd-d?f=webp"
    },
    {
      heading: "DeltaAI",
      description: "DeltaAI democratizes access to law in Brazil by solving problems in just a few clicks",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Logotipo_da_DeltaAI.png/250px-Logotipo_da_DeltaAI.png"
    },
  ],
  "5": [
    {
      heading: "Jornada Mima",
      description: "Jornada Mima takes care of the feeding journey of babies and children",
      imgSrc: "https://www.projetodraft.com/wp-content/uploads/2024/12/084_004-Com-Sal.png"
    },
    {
      heading: "Leadsales",
      description: "El primer CRM y plataforma de Comercio Conversacional para WhatsApp, Facebook y Instagram",
      imgSrc: "https://leadsales.io/wp-content/uploads/2025/03/Leadsales-what-is-it-and-how-does-this-WhatsApp-CRM-work-1-2.png"
    },
    {
      heading: "Plataforma Impact",
      description: "Plataforma Impact helps people in underserved communities start and grow transformative careers in technology",
      imgSrc: "https://media.licdn.com/dms/image/v2/C5612AQGIRiVy9f1Jgw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1621469964850?e=2147483647&v=beta&t=6MZa4kAY-lD1Ar6e_25h9OKHMz87LAiRN2wesySS3HM"
    },
    {
      heading: "SuperCharger Ventures",
      description: "SuperCharger Ventures is a leading EdTech ecosystem located in London, Singapore, and Malta",
      imgSrc: "https://startinmalta.com/wp-content/uploads/2022/10/supercharger-venture.jpg"
    },
    {
      heading: "LISA Accelerator - Stanford University",
      description: "An ecosystem for Innovators and Startup founders of Stanford GSB Alumni community",
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D12AQEBceSZJSmRjA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683485562925?e=2147483647&v=beta&t=C1SlKfqK5W_CumH6eHzNZeu_y32h0lOYiVZjsLK3jaI"
    },
    {
      heading: "Invest Ottawa",
      description: "Ottawa's leading economic development agency for fostering the advancement of the region's globally competitive knowledge-based institutions and industries",
      imgSrc: "https://pbs.twimg.com/ext_tw_video_thumb/1666462613570478080/pu/img/lTXabLaBw9d1UYLZ?format=jpg&name=large"
    },
  ],
  "6": [
    {
      heading: "Gun.io",
      description: "Gun.io sources and manages world-class developers for world class companies",
      imgSrc: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a98c826f7c2f123f62d9d9eff63c4d92/gun-io.png"
    },
  ]
};

const ColorChangeCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [caseStudy, setCaseStudy] = useState("");
  const [selectedTag, setSelectedTag] = useState("1");

  return (
    <section id="study-cases" className="scroll-mt-20">
      <div className="p-4 md:p-8 bg-slate-100">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cto-dark">
            Case Studies
          </h2>
          <p className="text-center text-cto-gray max-w-3xl mx-auto mb-6 md:mb-16">
            A showcase of my work across engineering leadership, software development, open source contributions, talent management, angel investing, and startup advisory.
          </p>
        </div>

        <ShiftHightlightTabs selected={selectedTag} setSelected={setSelectedTag} />

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      <div className="p-4 relative z-5 h-full text-white md:text-slate-300 md:group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl md:group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
    </>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
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