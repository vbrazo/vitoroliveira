export type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

import YJ from "/testimonials/yj.jpg";
import Garry from "/testimonials/garry.jpg";
import Leandro from "/testimonials/leandro.jpeg";
import Anderson from "/testimonials/anderson.jpg";
import Jan from "/testimonials/jan.jpeg";
import Jesse from "/testimonials/jesse.jpeg";
import Leonardo from "/testimonials/leonardo.jpeg";
import Wagner from "/testimonials/wagner.jpeg";
import Alexandre from "/testimonials/alexandre.jpg";
import Victoria from "/testimonials/victoria.jpeg";

export const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial: "Vitor demonstrated exceptional leadership at Paywith, building and managing high-performing teams of 20+ developers. His technical expertise in infrastructure design and PCI compliance, combined with his passion for mentorship and team development, was instrumental in Paywith's growth. His balanced approach to work and life set a positive example for the entire organization.",
    by: "Yee Jee Tso, CTO @ Paywith",
    imgSrc: YJ,
  },
  {
    tempId: 1,
    testimonial: "Vitor was instrumental in our early-stage growth, he mentored Plataforma Impact students and played a key role in helping us define sales and business strategies. His strategic insights and mentorship were invaluable in shaping our company's foundation.",
    by: "Garry Carrier, CEO @ Plataforma Impact",
    imgSrc: Garry,
  },
  {
    tempId: 2,
    testimonial: "As Vice President of Engineering at Paywith, Vitor's leadership transformed our team. His genuine passion for mentorship and team development created a culture of continuous learning and high performance. His ability to celebrate team victories and drive professional growth resulted in consistently outstanding results.",
    by: "Leandro França, Co-Founder @ Krafters",
    imgSrc: Leandro,
  },
  {
    tempId: 3,
    testimonial: "I met Vitor through open-source collaboration, where he generously shared his leadership expertise. His guidance on team organization and personal development was invaluable. He even invited me to join one of his leadership programs, creating opportunities for growth and networking. Vitor remains a trusted mentor I can always count on.",
    by: "Anderson Konzen, Staff Engineer @ Arvore de Livros",
    imgSrc: Anderson,
  },
  {
    tempId: 4,
    testimonial: "I highly recommend Vitor as a coach for CTOs and startup founders. His guidance significantly improved my leadership and communication skills, while facilitating valuable networking opportunities.",
    by: "Jan Vicent Hoffbauer, CTO @ Fluento.ai",
    imgSrc: Jan,
  },
  {
    tempId: 5,
    testimonial: "Vitor is one of the most adaptable and hardworking professionals I've met. He excels at wearing multiple hats, approaches challenges with a positive attitude, and is always eager to learn. His collaborative spirit and supportive nature make him an exceptional coworker.",
    by: "Jesse Gonzalez, Senior Account Executive @ Gun.io",
    imgSrc: Jesse,
  },
  {
    tempId: 6,
    testimonial: "One of the best people that I've worked with. Excellent professional with high resilience! I've learnt a lot about Ruby on Rails and architecture design.",
    by: "Leonardo Ribeiro, CEO @ Verstand",
    imgSrc: Leonardo,
  },
  {
    tempId: 7,
    testimonial: "Vitor is an exceptional developer and talented entrepreneur. His technical skills and mindset drive solutions to their best. I've seen him build robust, well-tested Ruby on Rails code in record time. He's a top-notch engineer and businessperson who would be an outstanding addition to any team.",
    by: "Wagner Santos, Principal Engineer @ Moteefe",
    imgSrc: Wagner,
  },
  {
    tempId: 8,
    testimonial: "Vitor combines technical excellence with founder mindset. His ability to balance technical debt with business growth, make data-driven decisions, and build scalable systems makes him an invaluable partner for any founder looking to build a sustainable tech business.",
    by: "Alexandre Cabral, CTO @ Banco BBM",
    imgSrc: Alexandre,
  },
  {
    tempId: 9,
    testimonial: "Vitor is a thoughtful, strategic leader and creative problem solver. His ability to break down concepts and teach others, combined with his growth mindset, makes him an exceptional teammate and mentor.",
    by: "Victoria Stahr, Talent Growth @ Gun.io",
    imgSrc: Victoria
  }
]; 