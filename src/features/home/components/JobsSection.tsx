import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, animate, useInView, MotionConfig } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { 
  Target, 
  Shield, 
  Zap, 
  ArrowRight,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  Search,
  Send
} from 'lucide-react';
import { Section, Container, Heading, Text } from '@/design-system';

interface SpringCardProps {
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  className?: string;
}

const SpringCard: React.FC<SpringCardProps> = ({
  title,
  subtitle,
  stat,
  statLabel,
  icon: Icon,
  bgColor,
  iconColor,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={twMerge("w-full", className)}
    >
      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.5,
        }}
      >
        <motion.div
          whileHover="hovered"
          className={twMerge(
            "group w-full border-2 border-black",
            bgColor,
            className
          )}
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            variants={{
              hovered: {
                x: -8,
                y: -8,
              },
            }}
            className={twMerge(
              "-m-0.5 border-2 border-black",
              bgColor,
              className
            )}
          >
            <motion.div
              initial={{
                x: 0,
                y: 0,
              }}
              variants={{
                hovered: {
                  x: -8,
                  y: -8,
                },
              }}
              className={twMerge(
                "relative -m-0.5 flex min-h-[400px] flex-col justify-between overflow-hidden border-2 border-black p-6 md:p-8",
                bgColor,
                className
              )}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${bgColor.replace('300', '400')} rounded-xl flex items-center justify-center mb-4 border-2 border-black`}>
                <Icon className={`h-8 w-8 ${iconColor}`} />
              </div>

              {/* Title */}
              <p className="flex items-center text-xl md:text-2xl font-bold uppercase mb-4">
                <FiArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
                {title}
              </p>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
                  {subtitle}
                </p>

                {/* Stat Section */}
                <div className="pt-4 border-t-2 border-black mt-auto">
                  <p className="text-3xl md:text-4xl font-black mb-1">{stat}</p>
                  <p className="text-xs md:text-sm font-medium leading-tight text-gray-800">{statLabel}</p>
                </div>

                {/* Button */}
                <Link
                  to="/jobs/about"
                  className="mt-4 translate-y-full border-2 border-black bg-white px-4 py-3 text-black font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-center block"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Rotating SVG Text */}
              <motion.svg
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                style={{
                  top: "0",
                  right: "0",
                  x: "50%",
                  y: "-50%",
                  scale: 0.75,
                }}
                width="200"
                height="200"
                className="pointer-events-none absolute z-10 rounded-full"
              >
                <path
                  id={`circlePath-${title.replace(/\s+/g, '-')}`}
                  d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href={`#circlePath-${title.replace(/\s+/g, '-')}`}
                    fill="black"
                    className="fill-black text-xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  >
                    LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                  </textPath>
                </text>
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
};

interface CountUpStatProps {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const CountUpStat: React.FC<CountUpStatProps> = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex min-w-[140px] flex-col items-center py-4 sm:py-0">
      <p className="mb-2 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <Text className="max-w-48 text-center text-xs md:text-sm text-gray-600 leading-tight">{subheading}</Text>
    </div>
  );
};

const JobsSection: React.FC = () => {
  return (
    <Section id="talent-solutions" className="bg-gray-50 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <Container maxWidth="6xl" className="relative z-10">
        {/* Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-block mb-4 hidden md:block">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              Beyond Leadership and Management
            </span>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-gray-300 opacity-50"></div>
            <div className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-gray-300 opacity-50"></div>
            <Text className="text-base md:text-lg lg:text-xl text-gray-800 italic font-light px-8 py-6 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm">
              "The same standards I bring to CTO support, I apply to talent matching."
            </Text>
          </div>
        </motion.div>

        {/* Enhanced Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <Heading as="h2" size="4xl" className="mb-6 text-gray-900 leading-tight text-2xl md:text-3xl lg:text-4xl">
            Engineering Talent That{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Actually Fits</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-100 opacity-60 -z-0"></span>
            </span>
          </Heading>
          <Text className="mb-6 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-lg lg:text-xl">
            Pre-vetted engineers and fractional consultants matched to your culture, tech stack, and growth stage, not just resumes.
          </Text>
          <Text className="max-w-2xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg">
            Through my fractional CTO work, I've built and scaled engineering teams at dozens of startups.
            Now I help other founders access the same caliber of talent, with the same rigorous vetting and
            cultural fit focus that's made my clients successful.
          </Text>
        </motion.div>

        {/* Enhanced Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          <SpringCard
            title="No More Resume Roulette"
            subtitle="We match on culture and technical fit first, not just keywords. Every candidate is pre-screened through technical interviews, code reviews, and reference checks before reaching your inbox."
            stat="3:1"
            statLabel="Average candidates to hire (vs industry average 12:1)"
            icon={Target}
            bgColor="bg-blue-300"
            iconColor="text-blue-600"
          />
          <SpringCard
            title="Technical Vetting You Can Trust"
            subtitle="Every engineer goes through code reviews, system design interviews, and behavioral assessments. We evaluate technical skills, communication abilities, and cultural alignment, so you don't have to."
            stat="12+"
            statLabel="Hours of vetting per candidate"
            icon={Shield}
            bgColor="bg-green-300"
            iconColor="text-green-600"
            className="md:-translate-y-6"
          />
          <SpringCard
            title="Speed Without Compromise"
            subtitle="Receive 2-3 perfectly matched, hire-ready candidates within 5-7 days. Each comes with detailed technical assessments and team fit analysis, so you can make informed decisions quickly."
            stat="5-7"
            statLabel="Days to first candidates"
            icon={Zap}
            bgColor="bg-purple-300"
            iconColor="text-purple-600"
          />
        </div>

        {/* Process Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
            <Heading as="h3" size="xl" className="mb-10 text-center text-lg md:text-xl">The Process</Heading>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
              {[
                { step: 'Discovery Call', time: '1 day', icon: Users },
                { step: 'Candidate Search', time: '3-5 days', icon: Search },
                { step: 'Technical Vetting', time: '2-3 days', icon: Shield },
                { step: 'Match Delivery', time: 'Same day', icon: Send },
                { step: 'Ongoing Support', time: '90 days', icon: Clock }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex-1 text-center group">
                      <div className="relative mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto text-white font-bold text-base md:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Icon className="h-3 w-3 md:h-3 md:w-3 text-white" />
                        </div>
                      </div>
                      <Text className="font-bold text-gray-900 mb-2 text-xs md:text-sm lg:text-base">{item.step}</Text>
                      <Text className="text-[10px] md:text-xs text-gray-500 font-medium">{item.time}</Text>
                    </div>
                    {index < 4 && (
                      <div className="hidden md:flex flex-1 items-center justify-center px-2">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Animated Count-Up Stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col items-center justify-center sm:flex-row flex-wrap gap-8 md:gap-12">
            <CountUpStat
              num={100}
              suffix="+"
              subheading="successful placements"
            />
            <div className="h-[1px] w-12 bg-gray-300 sm:h-12 sm:w-[1px]" />
            <CountUpStat
              num={92}
              suffix="%"
              subheading="retention after 12 months"
            />
            <div className="h-[1px] w-12 bg-gray-300 sm:h-12 sm:w-[1px]" />
            <CountUpStat
              num={14}
              suffix=" days"
              subheading="average time to hire"
            />
            <div className="h-[1px] w-12 bg-gray-300 sm:h-12 sm:w-[1px]" />
            <CountUpStat
              num={50}
              suffix="+"
              subheading="startups served"
            />
          </div>
        </div>

        {/* Enhanced Dual CTA Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            to="/jobs/about"
            className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300 text-base md:text-lg shadow-xl hover:shadow-2xl"
          >
            Find Your Next Engineer
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/jobs/about"
            className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 text-base md:text-lg border-2 border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg"
          >
            See How Our Vetting Works
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        {/* For Engineers Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/jobs" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium group">
            <span>Are you an engineer? View opportunities</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
};

export default JobsSection;
