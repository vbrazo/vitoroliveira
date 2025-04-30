import Header from '@/components/Header';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const MARGIN = 20;
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const Blog = () => {
  return (
    <section id="blog" className="py-[80px] scroll-mt-[1rem]">
      <div className="flex flex-col">
        <Header />
        <main>
          <section className="flex relative flex-col text-center md:text-left items-center justify-center gap-16 md:items-start w-full min-h-[screen]">
            <div className="container flex flex-col md:flex-row max-w-7xl justify-center items-center gap-8 md:gap-0">
              <BlogPostCarousel />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_WIDTH = width > BREAKPOINTS.lg ? 350 : 300;
  const CARD_SIZE = CARD_WIDTH + MARGIN;

  const CARD_BUFFER =
    width > BREAKPOINTS.xl ? 4 : 
    width > BREAKPOINTS.lg ? 3 : 
    width > BREAKPOINTS.md ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-white w-full" ref={ref}>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cto-dark">Blog</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} cardWidth={CARD_WIDTH} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ link, imgUrl, author, title, description, cardWidth }: PostType & { cardWidth: number }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: cardWidth,
        marginRight: MARGIN,
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={imgUrl}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a blog post titled ${title}`}
        />
        <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
          {author}
        </span>
        <p className="mt-1.5 text-base sm:text-lg font-medium line-clamp-2">{title}</p>
        <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
      </a>
    </div>
  );
};

export default Blog;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  link: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "https://www.sinnaps.com/wp-content/uploads/2019/08/project-planning-in-software-engineering-min.jpg",
    author: "Vitor Oliveira",
    title: "My Practical Guide for Engineering Managers Growing Into Organizational Leadership",
    description:
      "Steps to build trust, improve delivery, and drive performance across multiple teams",
    link: "https://open.substack.com/pub/vitoroliveira/p/my-practical-guide-for-engineering?r=3osz1&utm_campaign=post&utm_medium=web",
  },
  {
    id: 2,
    imgUrl: "https://talkstar-photos.s3.amazonaws.com/uploads/33b74579-2ab0-4d22-8ad3-c867c87f3ff5/AdamGrant_2016S-stageshot.jpg",
    author: "Vitor Oliveira",
    title: "Are you a taker, a giver, or a compensator?",
    description:
      "Learn How Smart Generosity Can Elevate Your Work, Your Network, and Your Legacy",
    link: "https://vitoroliveira.substack.com/p/are-you-a-taker-a-giver-or-a-matcher",
  },
  {
    id: 3,
    imgUrl: "https://gun.io/wp-content/uploads/2024/03/etienne-girardet-ktUX4KHlU8-unsplash.jpg",
    author: "Vitor Oliveira",
    title: "P.S. A Journey Beyond Recruitment: Life as a Talent Success Manager",
    description:
      "From Startup Founder to Talent Success Manager: Enhancing Developer Experiences at Gun.io",
    link: "https://gun.io/guest-posts/2024/03/p-s-a-journey-beyond-recruitment-life-as-a-talent-success-manager/",
  },
  {
    id: 9,
    imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/ec/0e/e3/ec0ee3da-785b-12ca-4ee5-dee443819f88/mza_14427237716915326589.jpg/600x600bb.webp",
    author: "Vitor Oliveira",
    title: "Preventing Software Defects with Vitor Oliveira",
    description:
      "",
    link: "https://www.codewithjason.com/podcast/12394897-175-preventing-software-defects-with-vitor-oliveira/",
  },
  {
    id: 9,
    imgUrl: "https://i.ytimg.com/vi/-94XWhDToI4/maxresdefault.jpg",
    author: "Vitor Oliveira",
    title: "Software Engineering Leadership | Developing Your Skills",
    description:
      "A guide to becoming a better software engineering leader",
    link: "https://www.youtube.com/watch?v=-94XWhDToI4",
  },
  {
    id: 4,
    imgUrl: "https://cdn.prod.website-files.com/5e7878021f083273253e36bd/656480c57acc6b9113bb6bf2_65255b1.webp",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #4",
    description:
      "Breaking into Tech as a Clinical Laboratory Scientist",
    link: "https://open.substack.com/pub/vitoroliveira/p/4?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  {
    id: 4,
    imgUrl: "https://thescimus.com/blog/wp-content/uploads/2023/02/Tech-Lead-vs-Engineering-Manager-1600%D0%BD%D0%B0400-e1676936691632.png",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #3",
    description:
      "From First-Time Manager to Engineering Manager",
    link: "https://open.substack.com/pub/vitoroliveira/p/3?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  {
    id: 5,
    imgUrl: "https://www.rioonwatch.org/wp-content/uploads/2016/08/1385727_368399686625642_510219592_n.jpg",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #2",
    description:
      "From Brazilian favelas to the world: Talent wins",
    link: "https://open.substack.com/pub/vitoroliveira/p/2?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  {
    id: 6,
    imgUrl: "https://images.ctfassets.net/0d3i1kfsuaq3/zv85KLhzWnMKcXAiVDkIY/8b8882065c6bbe92276f43fa69652cdb/Hero_7BestPracticesforSuccess.jpg",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #1",
    description:
      "From strong to success: Talent conquers",
    link: "https://open.substack.com/pub/vitoroliveira/p/1?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  // {
  //   id: 8,
  //   imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJ2OPxJ7BP3hiq5Dy4NJIVyhNIChc6cXCzw&s",
  //   author: "Vitor Oliveira",
  //   title: "VanHackCON - Career Path in Canada",
  //   description:
  //     "Career path how Vitor got a leadership position after a few months in Canada",
  //   link: "https://www.youtube.com/watch?v=5s-phH3B4DA",
  // },
  {
    id: 7,
    imgUrl: "https://substackcdn.com/image/fetch/w_1040,h_545,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c806857-68ec-420e-9521-145498ebd924_2460x774.png",
    author: "Vitor Oliveira",
    title: "Welcome",
    description:
      "My notes about software engineering, software architecture, tech leadership, soft skills, working with people, and career growth.",
    link: "https://open.substack.com/pub/vitoroliveira/p/welcome?r=3osz1&utm_campaign=post&utm_medium=web",
  },
];
