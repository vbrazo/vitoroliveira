import { distance, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const FlipNavWrapper = () => {
  return (
    <div className="flex justify-center items-center bg-black w-full fixed left-0 right-0 z-50">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4 flex justify-between items-center top-0 max-w-7xl mx-auto w-full px-4">
      <div className="flex-1">
        <NavLeft />
      </div>
      <div className="flex justify-end flex-1">
        <NavRight />
      </div>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const sidebarPages = ['/fit-score', '/fit-score/list', '/fit-score/new', '/user-settings'];
  const shouldCloseSidebar = sidebarPages.some(path => location.pathname.startsWith(path));

  return (
    <div className="flex items-center gap-6">
      <a href="/"><Logo /></a>
      {isHomePage ? (
        <>
          <NavLink text="Services" href="#services" />
          <NavLink text="Engagement" href="#engagement" />
          <NavLink text="Case Studies" href="#study-cases" />
          <NavLink text="Success Stories" href="#success-stories-2" />
          <NavLink text="Blog" href="#blog" />
        </>
      ) : (shouldCloseSidebar ? (
        <>
          <NavLink text="vitoroliveira.ca" href="/" />
          <NavLink text="Blog" href="/blog" />
        </>
      ) : (
        <>
          <NavLink text="vitoroliveira.ca" href="/" />
          <NavLink text="Blog" href="/blog" />
        </>
      ))}
    </div>
  );
};

const NavLink = ({ text, href, isExternal }: { text: string, href: string, isExternal?: boolean }) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === href;
  const isSectionReference = href.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If it's a section reference, always allow navigation
    if (isSectionReference) {
      const distance = 80;
      const targetId = href.replace(/^#/, '');
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - distance;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      return;
    }

    // If it's a different page, navigate to it
    if (!isCurrentPage) {
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      rel="nofollow"
      className={`hidden lg:block h-[30px] overflow-hidden font-medium ${isCurrentPage && !isSectionReference ? 'pointer-events-none opacity-50' : ''}`}
      target={isExternal ? "_blank" : "_self"}
      onClick={handleClick}
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isFitScorePage = location.pathname === '/fit-score';
  let title = "Book a call";
  let href = "https://www.calendly.com/imvitoroliveira";

  if (!isHomePage) {
    title = "Let's build a case study?";
  }

  if (isFitScorePage) {
    title = "Get Fit Score";
    href = "#call-to-action";
  }

  return (
    <div className="lg:flex items-center gap-4 hidden">
      <a href={href} target={isFitScorePage ? "_self" : "_blank"} rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white text-black font-medium rounded-md whitespace-nowrap transition-all duration-300 flex items-center gap-2 hover:bg-white-100 hover:text-black border border-black"
        >
          {title}
        </motion.button>
      </a>
      {!isHomePage && (
        <a href="/sign-in" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-black text-white font-medium rounded-md whitespace-nowrap transition-all duration-300 flex items-center gap-2 border-white"
        >
          Login
        </motion.button>
      </a>
      )}
    </div>
  );
};

const NavMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const sidebarPages = ['/fit-score', '/fit-score/list', '/fit-score/new', '/user-settings'];
  const shouldCloseSidebar = sidebarPages.some(path => location.pathname.startsWith(path));

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      {isHomePage ? (
        <>
          <MenuLink text="Services" href="#services" setIsOpen={setIsOpen} />
          <MenuLink text="Engagement" href="#engagement" setIsOpen={setIsOpen} />
          <MenuLink text="Case Studies" href="#study-cases" setIsOpen={setIsOpen} />
          <MenuLink text="Success Stories" href="#success-stories" setIsOpen={setIsOpen} />
          <MenuLink text="Blog" href="#blog" setIsOpen={setIsOpen} />
        </>
      ) : (shouldCloseSidebar ? (
        <>
          <MenuLink text="Score Fit Analysis" href="/fit-score/list" setIsOpen={setIsOpen} />
          <MenuLink text="User Settings" href="/user-settings" setIsOpen={setIsOpen} />
          <MenuLink text="Sign Out" href="/sign-in" setIsOpen={setIsOpen} />
        </>
      ) : (
        <>
          <NavLink text="vitoroliveira.ca" href="/" />
          <NavLink text="Blog" href="/blog" />
        </>
      ))}
    </motion.div>
  );
};

const MenuLink = ({ text, href, isExternal, setIsOpen }: { text: string, href: string, isExternal?: boolean, setIsOpen: (value: boolean) => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (href === '#success-stories') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.a
      variants={menuLinkVariants}
      target={isExternal ? "_blank" : "_self"}
      rel="nofollow"
      href={href}
      onClick={handleClick}
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
