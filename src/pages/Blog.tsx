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
    <section id="blog" className="mb-[80px]">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

// export default BlogPostCarousel;
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
    imgUrl: "https://images.ctfassets.net/0d3i1kfsuaq3/zv85KLhzWnMKcXAiVDkIY/8b8882065c6bbe92276f43fa69652cdb/Hero_7BestPracticesforSuccess.jpg",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #1",
    description:
      "From strong to success: Talent conquers",
    link: "https://open.substack.com/pub/vitoroliveira/p/1?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  {
    id: 3,
    imgUrl: "https://substackcdn.com/image/fetch/w_1040,h_545,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59bacc54-ec85-4237-b237-eb47e873f43a_674x1000.jpeg",
    author: "Vitor Oliveira",
    title: "Você é um tomador, um doador ou um compensador?",
    description:
      "",
    link: "https://open.substack.com/pub/vitoroliveira/p/voce-e-um-tomador-um-doador-ou-um?r=3osz1&utm_campaign=post&utm_medium=web",
  },
  {
    id: 4,
    imgUrl: "https://substackcdn.com/image/fetch/w_1040,h_545,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c806857-68ec-420e-9521-145498ebd924_2460x774.png",
    author: "Vitor Oliveira",
    title: "Welcome",
    description:
      "My notes about software engineering, software architecture, tech leadership, soft skills, working with people, and career growth.",
    link: "https://open.substack.com/pub/vitoroliveira/p/welcome?r=3osz1&utm_campaign=post&utm_medium=web",
  },
];
