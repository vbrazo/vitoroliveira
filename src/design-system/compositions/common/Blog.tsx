import Header from '@/design-system/compositions/common/Header';
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { Button } from "@/design-system/compositions/ui/button";
import { useNavigate } from "react-router-dom";
import { posts, tags, type PostType } from "@/data/blog";

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
