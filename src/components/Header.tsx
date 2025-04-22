import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";

const FlipNavWrapper = () => {
  return (
    <div>
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <NavLeft />
      <NavRight />
      <NavMenu isOpen={isOpen} />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </motion.button>
    </nav>
  );
};

const Logo = () => {
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Logo />
      <NavLink text="Services" href="#services" />
      <NavLink text="Engagement" href="#engagement" />
      <NavLink text="Blog" href="https://vitoroliveira.substack.com/" isExternal />
    </div>
  );
};

const NavLink = ({ text, href, isExternal }: { text: string, href: string, isExternal?: boolean }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
      target={isExternal ? "_blank" : "_self"}
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-gray-300">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="lg:flex items-center gap-4 hidden">
      <a href="https://www.calendly.com/vbrazo" target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r bg-white font-medium rounded-md whitespace-nowrap"
      >
        Book a Call
      </motion.button>
      </a>
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Services" href="#services" />
      <MenuLink text="Engagement" href="#engagement" />
      <MenuLink text="Blog" href="https://vitoroliveira.substack.com/" isExternal />
    </motion.div>
  );
};

const MenuLink = ({ text, href, isExternal }: { text: string, href: string, isExternal?: boolean }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      target={isExternal ? "_blank" : "_self"}
      rel="nofollow"
      href={href}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
