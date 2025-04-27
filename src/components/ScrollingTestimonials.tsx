import { motion } from "framer-motion";
import { TESTIMONIAL_DATA } from "../data/testimonials";

// Add hash function
const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
};

const ScrollingTestimonials = () => {
  // Split testimonials into two groups for the scrolling effect
  const topTestimonials = TESTIMONIAL_DATA.slice(0, 5);
  const middleTestimonials = TESTIMONIAL_DATA.slice(5);

  return (
    <>
      <div id="success-stories" className="h-[50px]" />
      <div className="bg-black relative">
        <div className="p-4 overflow-x-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

          <div className="flex items-center mb-4">
            <TestimonialList list={topTestimonials} duration={300} />
            <TestimonialList list={topTestimonials} duration={300} />
            <TestimonialList list={topTestimonials} duration={300} />
          </div>
          <div className="flex items-center">
            <TestimonialList list={middleTestimonials} duration={400} reverse />
            <TestimonialList list={middleTestimonials} duration={400} reverse />
            <TestimonialList list={middleTestimonials} duration={400} reverse />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
        </div>
      </div>
    </>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof TESTIMONIAL_DATA;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        const testimonialHash = hashString(`${t.by}${t.testimonial}`);
        return (
          <div
            key={t.tempId}
            className="shrink-0 w-[350px] md:w-[500px] grid grid-cols-[5rem,_1fr] md:grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative bg-white"
          >
            <div className="relative h-full">
              <img 
                src={t.imgSrc} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={t.by}
              />
            </div>
            <div className="p-3 md:p-4 text-black">
              <span className="block font-semibold text-base md:text-lg mb-1">{t.by}</span>
              <span className="block text-xs md:text-sm text-black line-clamp-3 md:line-clamp-none">{t.testimonial}</span>
              <span className="hidden" data-testimonial-hash={testimonialHash} />
            </div>
            <span className="text-5xl md:text-7xl absolute top-1 md:top-2 right-1 md:right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ScrollingTestimonials;
