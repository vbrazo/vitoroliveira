export type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const tags: string[] = [
  "Leadership",
  "Engineering Management",
  "Software Engineering",
  "Talent Success",
];

export const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/blog/blog-1.jpg",
    author: "Vitor Oliveira",
    title:
      "My Practical Guide for Engineering Managers Growing Into Organizational Leadership",
    description:
      "Steps to build trust, improve delivery, and drive performance across multiple teams",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/my-practical-guide-for-engineering?r=3osz1&utm_campaign=post&utm_medium=web",
    tags: ["Leadership", "Engineering Management"],
  },
  {
    id: 2,
    imgUrl: "/blog/blog-2.jpg",
    author: "Vitor Oliveira",
    title: "Are you a taker, a giver, or a compensator?",
    description:
      "Learn How Smart Generosity Can Elevate Your Work, Your Network, and Your Legacy",
    link:
      "https://vitoroliveira.substack.com/p/are-you-a-taker-a-giver-or-a-matcher",
    tags: ["Leadership", "Organizational Leadership", "Engineering Management"],
  },
  {
    id: 3,
    imgUrl: "/blog/blog-3.jpg",
    author: "Vitor Oliveira",
    title:
      "P.S. A Journey Beyond Recruitment: Life as a Talent Success Manager",
    description:
      "From Startup Founder to Talent Success Manager: Enhancing Developer Experiences at Gun.io",
    link:
      "https://gun.io/guest-posts/2024/03/p-s-a-journey-beyond-recruitment-life-as-a-talent-success-manager/",
    tags: ["Talent Success"],
  },
  {
    id: 4,
    imgUrl: "/blog/blog-4.webp",
    author: "Vitor Oliveira",
    title: "Preventing Software Defects with Vitor Oliveira",
    description:
      "A discussion including learning spoken languages and whether that relates to programming, testing and QA, the false dichotomy of perfect vs. good code, the types of defects, and code review. ",
    link:
      "https://audio.buzzsprout.com/82l35itq8dqgwldaqykevwvf324v?response-content-disposition=inline&",
    tags: ["Software Engineering", "Engineering Management"],
  },
  {
    id: 5,
    imgUrl: "/blog/blog-5.jpg",
    author: "Vitor Oliveira",
    title: "Software Engineering Leadership | Developing Your Skills",
    description: "A guide to becoming a better software engineering leader",
    link: "https://www.youtube.com/watch?v=-94XWhDToI4",
    tags: ["Leadership", "Organizational Leadership", "Engineering Management"],
  },
  {
    id: 6,
    imgUrl: "/blog/talent-success-4.webp",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #4",
    description: "Breaking into Tech as a Clinical Laboratory Scientist",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/4?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 7,
    imgUrl: "/blog/talent-success-3.png",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #3",
    description: "From First-Time Manager to Engineering Manager",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/3?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 8,
    imgUrl: "/blog/talent-success-2.jpg",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #2",
    description: "From Brazilian favelas to the world: Talent wins",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/2?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 9,
    imgUrl: "/blog/talent-success-1.jpg",
    author: "Vitor Oliveira",
    title: "Harnessing Talent Success Stories #1",
    description: "From strong to success: Talent conquers",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/1?r=3osz1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    tags: ["Talent Success"],
  },
  {
    id: 10,
    imgUrl: "/blog/blog-0.webp",
    author: "Vitor Oliveira",
    title: "Welcome",
    description:
      "My notes about software engineering, software architecture, tech leadership, soft skills, working with people, and career growth.",
    link:
      "https://open.substack.com/pub/vitoroliveira/p/welcome?r=3osz1&utm_campaign=post&utm_medium=web",
    tags: ["Leadership", "Engineering Management"],
  },
];


