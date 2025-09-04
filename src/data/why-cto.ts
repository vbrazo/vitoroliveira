export type WhyCard = {
  icon: "Activity" | "Lock" | "Zap" | "Map" | "Users" | "Layout" | "BarChart2" | "Brain" | "MessageSquare";
  title: string;
  description: string;
};

export const whyCtoCards: WhyCard[] = [
  { icon: "Activity", title: "Software Development Lifecycle (SDLC)", description: "Building great technology is a team sport. The CTO is the coach or the team captain that ensures the team is working together to deliver the best outcome possible" },
  { icon: "Lock", title: "Security First", description: "The digital frontier is fraught with threats that can jeopardize your business's integrity and customer trust. The CTO is the first line of defense to stop threats before they start and maintaining safe and secure operations" },
  { icon: "Zap", title: "Antifragility", description: "Developing technical and operational systems that are not only resilient to change, but thrive as pressure and chaos increase is critical to surviving hyper-growth within your organization to become the industry leader" },
  { icon: "Map", title: "Technical Strategy & Roadmapping", description: "Strategic technology roadmapping aligned with business goals, ensuring tech investments are intentional, scalable, and efficient. Bridging the gap between business vision and technical execution" },
  { icon: "Users", title: "Talent Acquisition & Development", description: "Building and nurturing high-performing technical teams is crucial. A CTO helps attract top talent, fosters a culture of continuous learning, and ensures the right people are in the right roles to drive innovation and growth" },
  { icon: "Layout", title: "Platform & Architecture Decisions", description: "Guiding critical architecture decisions like cloud infrastructure, system design patterns, and technology investments that maximize scalability and performance. Ensuring your technical foundation supports long-term growth and innovation" },
  { icon: "BarChart2", title: "Metrics, KPIs & Engineering Ops", description: "Implementing dashboards and operational practices to track engineering performance (velocity, deployment frequency, bug rate, etc.), ensuring continuous improvement and accountability" },
  { icon: "Brain", title: "AI & Automation", description: "Leveraging artificial intelligence and automation to streamline operations, enhance decision-making, and create competitive advantages. A CTO ensures these technologies are implemented responsibly and effectively to drive business growth" },
  { icon: "MessageSquare", title: "Stakeholder & Investor Communication", description: "Acting as a translator between tech and non-tech stakeholders, and often representing the tech vision to boards or investors during fundraising rounds or strategic planning sessions" },
];


