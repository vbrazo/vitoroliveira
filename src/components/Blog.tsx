import Header from '@/components/Header';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Import blog images
import Blog0 from "/blog/blog-0.webp";
import Blog1 from "/blog/blog-1.jpg";
import Blog2 from "/blog/blog-2.jpg";
import Blog3 from "/blog/blog-3.jpg";
import Blog4 from "/blog/blog-4.webp";
import Blog5 from "/blog/talent-success-1.jpg";
import Blog6 from "/blog/talent-success-2.jpg";
import Blog7 from "/blog/talent-success-3.png";
import Blog8 from "/blog/talent-success-4.webp";
import Blog9 from "/blog/blog-5.jpg";

type PostType = {
  id: number;
  imgUrl: any;
  author: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

const tags = [
  "Leadership",
  "Engineering Management",
  "Software Engineering",
  "Talent Success",
];

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: Blog1,
    author: "Vitor Oliveira",
    title: "My Practical Guide for Engineering Managers Growing Into Organizational Leadership",
    description:
      "Steps to build trust, improve delivery, and drive performance across multiple teams",
    link: "https://open.substack.com/pub/vitoroliveira/p/my-practical-guide-for-engineering?r=3osz1&utm_campaign=post&utm_medium=web",
    tags: ["Leadership", "Engineering Management"],
  },
  {
    id: 2,
    imgUrl: Blog2,
    author: "Vitor Oliveira",
    title: "Are you a taker, a giver, or a compensator?",
    description:
      "Learn How Smart Generosity Can Elevate Your Work, Your Network, and Your Legacy",
    link: "https://vitoroliveira.substack.com/p/are-you-a-taker-a-giver-or-a-matcher",
    tags: ["Leadership", "Organizational Leadership", "Engineering Management"],
  },
  {
    id: 3,
    imgUrl: Blog3,
    author: "Vitor Oliveira",
    title: "P.S. A Journey Beyond Recruitment: Life as a Talent Success Manager",
    description:
      "From Startup Founder to Talent Success Manager: Enhancing Developer Experiences at Gun.io",
    link: "https://gun.io/guest-posts/2024/03/p-s-a-journey-beyond-recruitment-life-as-a-talent-success-manager/",
    tags: ["Talent Success"],
  },
  {
    id: 4,
    imgUrl: Blog4,
    author: "Vitor Oliveira",
    title: "Preventing Software Defects with Vitor Oliveira",
    description:
      "A discussion including learning spoken languages and whether that relates to programming, testing and QA, the false dichotomy of perfect vs. good code, the types of defects, and code review. ",
    link: "https://audio.buzzsprout.com/82l35itq8dqgwldaqykevwvf324v?response-content-disposition=inline&",
    tags: ["Software Engineering", "Engineering Management"],
  },
  {
    id: 5,
    imgUrl: Blog9,
    author: "Vitor Oliveira",
    title: "Software Engineering Leadership | Developing Your Skills",
    description:
      "A guide to becoming a better software engineering leader",
    link: "https://www.youtube.com/watch?v=-94XWhDToI4",
    tags: ["Leadership", "Organizational Leadership", "Engineering Management"],
  },
  {
    id: 6,
    imgUrl: Blog8,
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #4",
    description:
      "Breaking into Tech as a Clinical Laboratory Scientist",
    link: "https://open.substack.com/pub/vitoroliveira/p/4?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 7,
    imgUrl: Blog7,
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #3",
    description:
      "From First-Time Manager to Engineering Manager",
    link: "https://open.substack.com/pub/vitoroliveira/p/3?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 8,
    imgUrl: Blog6,
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #2",
    description:
      "From Brazilian favelas to the world: Talent wins",
    link: "https://open.substack.com/pub/vitoroliveira/p/2?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 9,
    imgUrl: Blog5,
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #1",
    description:
      "From strong to success: Talent conquers",
    link: "https://open.substack.com/pub/vitoroliveira/p/1?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 10,
    imgUrl: Blog0,
    author: "Vitor Oliveira",
    title: "Welcome",
    description:
      "My notes about software engineering, software architecture, tech leadership, soft skills, working with people, and career growth.",
    link: "https://open.substack.com/pub/vitoroliveira/p/welcome?r=3osz1&utm_campaign=post&utm_medium=web",
    tags: ["Leadership", "Engineering Management"],
  },
];

const MARGIN = 20;
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const Blog = () => {
  const navigate = useNavigate();
  
  const handleViewAllClick = () => {
    navigate('/blog', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-[80px] scroll-mt-20">
      <div className="flex flex-col">
        <Header />
        <main>
          <section className="flex relative flex-col text-center md:text-left items-center justify-center gap-16 md:items-start w-full min-h-[screen]">
            <div className="container flex flex-col md:flex-row max-w-7xl justify-center items-center gap-8 md:gap-0">
              <BlogPostCarousel />
            </div>
            <div className="container flex justify-center">
              <Button onClick={handleViewAllClick} variant="outline" className="font-medium">
                View All Articles
              </Button>
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

export { posts, tags };
export default Blog;
