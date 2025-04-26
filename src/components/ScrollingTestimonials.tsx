import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <>
      <div id="success-stories" className="h-[50px]" />
      <div className="bg-black py-12">
        <div className="mb-8 px-4">
          <h3 className="text-slate-50 text-4xl font-semibold text-center">
            Success Stories
          </h3>
          <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto">
            This many happy customers can't be wrong...
          </p>
        </div>
        <div className="p-4 overflow-x-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

          <div className="flex items-center mb-4">
            <TestimonialList list={testimonials.top} duration={125} />
            <TestimonialList list={testimonials.top} duration={125} />
            <TestimonialList list={testimonials.top} duration={125} />
          </div>
          <div className="flex items-center mb-4">
            <TestimonialList list={testimonials.middle} duration={75} reverse />
            <TestimonialList list={testimonials.middle} duration={75} reverse />
            <TestimonialList list={testimonials.middle} duration={75} reverse />
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
  list: typeof testimonials.top;
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
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative bg-white"
          >
            <div className="relative h-full">
              <img 
                src={t.img} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={t.name}
              />
            </div>
            <div className="p-4 text-black">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-black">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    // {
    //   id: 1,
    //   img: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/1415f084c08857ccbd931fda76ca8717",
    //   name: "Paula Cunha",
    //   title: "CEO @ Jornada Mima",
    //   info: "Vitor provided invaluable support to our tech team, offering clear guidance on product and UX decisions while helping shape our team's formation. His ability to bridge technical and business needs while fostering team growth was instrumental in our success.",
    // },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BODM3MGEyYmItNDk0MS00OTVjLTlkNDQtMjRkMzM1YmQ4NTE4XkEyXkFqcGc@._V1_.jpg",
      name: "Yee Jee Tso",
      title: "CTO @ Paywith",
      info: "Vitor demonstrated exceptional leadership at Paywith, building and managing high-performing teams of 20+ developers. His technical expertise in infrastructure design and PCI compliance, combined with his passion for mentorship and team development, was instrumental in Paywith's growth. His balanced approach to work and life set a positive example for the entire organization.",
    },
    {
      id: 2,
      img: "https://findinghumansintech.com/wp-content/uploads/2023/01/1656878268319.jpg",
      name: "Garry Carrier",
      title: "CEO @ Plataforma Impact",
      info: "Vitor was instrumental in our early-stage growth, he mentored our team and played a key role in helping us find the perfect technical co-founder. His strategic insights and mentorship were invaluable in shaping our company's foundation.",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/v2/C4D03AQEHTCBOFl_bHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639413908539?e=1750896000&v=beta&t=H8Ep6po1oN97UJuek4ra5WT1fEQd4MlCQcqpGOx53tQ",
      name: "Leandro França",
      title: "Co-Founder @ Krafters",
      info: "As Vice President of Engineering at Paywith, Vitor's leadership transformed our team. His genuine passion for mentorship and team development created a culture of continuous learning and high performance. His ability to celebrate team victories and drive professional growth resulted in consistently outstanding results.",
    },
    {
      id: 4,
      img: "https://www.elixirconf.eu/assets/images/Anderson_Konzen.jpg",
      name: "Anderson Konzen",
      title: "Staff Engineer @ Arvore de Livros",
      info: "I met Vitor through open-source collaboration, where he generously shared his leadership expertise. His guidance on team organization and personal development was invaluable. He even invited me to join one of his leadership programs, creating opportunities for growth and networking. Vitor remains a trusted mentor I can always count on.",
    },
    {
      id: 5,
      img: "https://media.licdn.com/dms/image/v2/D4E03AQFajF7Js5FqXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694233415827?e=1750896000&v=beta&t=6cuTpE9nhDu2a2_9hrX8F_cSV-g35sSn8TfU65sStus",
      name: "Jan Vicent Hoffbauer",
      title: "CTO @ Fluento.ai",
      info: "I highly recommend Vitor as a coach for CTOs and startup founders. His guidance significantly improved my leadership and communication skills, while facilitating valuable networking opportunities.",
    },
  ],
  middle: [
    // {
    //   id: 1,
    //   img: "https://media.licdn.com/dms/image/v2/C4D03AQFLEwTm7FK92A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643906133948?e=2147483647&v=beta&t=753i41cN5XEEHa4DBIppzkQ2o3METFNLJMy5wlCbaQ8",
    //   name: "Luciana Melhorim",
    //   title: "COO @ Jornada Mima",
    //   info: "Vitor's comprehensive technical audit and roadmap planning transformed our technology strategy. He helped us identify critical improvements and set a clear path forward.",
    // },
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/v2/D5603AQHH_uAEDYcu8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725788671058?e=1750896000&v=beta&t=h5_RfUe1r02yX7-x8LTEqkaSr1G7-Kh7sXaF1vcDmUg",
      name: "Jesse Gonzalez",
      title: "Senior Account Executive @ Gun.io",
      info: "Vitor is one of the most adaptable and hardworking professionals I've met. He excels at wearing multiple hats, approaches challenges with a positive attitude, and is always eager to learn. His collaborative spirit and supportive nature make him an exceptional coworker.",
    },
    {
      id: 2,
      img: "https://avatars.githubusercontent.com/u/7218334?v=4",
      name: "Leonardo Ribeiro",
      title: "CEO @ Verstand",
      info: "One of the best people that I've worked with. Excellent professional with high resilience! I've learnt a lot about Ruby on Rails and architecture design.",
    },
    {
      id: 3,
      img: "https://media.licdn.com/dms/image/v2/C4E03AQHEzbPspWfhNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517430622802?e=2147483647&v=beta&t=jEq-DRnNRuUxCu3DeHGZfgwmNb0OIZzBnl1CaJp9Kmc",
      name: "Wagner Santos",
      title: "Principal Engineer @ Moteefe",
      info: "Vitor is an exceptional developer and talented entrepreneur. His technical skills and mindset drive solutions to their best. I've seen him build robust, well-tested Ruby on Rails code in record time. He's a top-notch engineer and businessperson who would be an outstanding addition to any team.",
    },
    {
      id: 4,
      img: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/e25048886a630eec72056344533ea944",
      name: "Alexandre Cabral",
      title: "CTO @ Banco BBM",
      info: "Vitor combines technical excellence with founder mindset. His ability to balance technical debt with business growth, make data-driven decisions, and build scalable systems makes him an invaluable partner for any founder looking to build a sustainable tech business.",
    },
    {
      id: 5,
      img: "https://media.licdn.com/dms/image/v2/C4E03AQEWIG5MF2q3rA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629315203984?e=1750896000&v=beta&t=qaaUzpaE87T-gKpnLiTrohCfrqnKrZe8p7ohIZ24sZo",
      name: "Victoria Stahr",
      title: "Talent Growth @ Gun.io",
      info: "Vitor is a thoughtful, strategic leader and creative problem solver. His ability to break down concepts and teach others, combined with his growth mindset, makes him an exceptional teammate and mentor.",
    },
  ],
};

export default ScrollingTestimonials;
