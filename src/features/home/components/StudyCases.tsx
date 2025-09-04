import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

import { SpringModal, ShiftHightlightTabs } from "@/features/home/components";

import { caseStudies } from "@/data/study-cases";

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
