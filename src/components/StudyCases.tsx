import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <section id="study-cases" className="scroll-mt-20">
      <div className="p-4 md:p-8 bg-slate-100">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-cto-dark">
            Case Studies
          </h2>
          <p className="text-center text-cto-gray max-w-3xl mx-auto mb-16">
            Real-world examples of my technical leadership, software architecture, and team management expertise.
          </p>
        </div>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
          <Card
            heading="Strides Tech Community"
            description="A lifelong learning platform for career growth through mentorship, training and knowledge sharing."
            imgSrc="https://www.strides.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-it-works-1.604b0dd5.webp&w=3840&q=75"
          />
          <Card
            heading="Gun.io"
            description="Gun.io sources and manages world-class developers for world class companies."
            imgSrc="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a98c826f7c2f123f62d9d9eff63c4d92/gun-io.png"
          />
          <Card
            heading="Paywith"
            description="PayWith's payment innovations platform allows businesses to create powerful, mobile-centric payment programs, faster, cheaper, and with more security and control."
            imgSrc="https://media.licdn.com/dms/image/v2/C561BAQE2zdpkRzc5Aw/company-background_10000/company-background_10000/0/1620549922242/paywith_australia_cover?e=2147483647&v=beta&t=ltw-imeCOBDF0zX9sVUzaKKJ54HmuGnWUZYMdkCSaSk"
          />
          <Card
            heading="Faker Ruby"
            description="A library for generating fake data such as names, addresses, and phone numbers."
            imgSrc="https://opengraph.githubassets.com/d79339dd850aa45e1c2bc5cf809beefda6b7ed19e96ffb448d02494c0183b6e2/faker-ruby/faker"
          />
        </div>
      </div>
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
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