export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: "Users" | "BarChart" | "Shield" | "FileText" | "Code" | "GraduationCap" | "MessageSquare" | "Group" | "Map";
  linkUrl: string;
  linkText: string;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Fractional Chief Technology Officer (CTO)",
    description:
      "Overseeing technology strategy, ensuring that technological resources align with business goals, and leading R&D to gain a competitive edge",
    icon: "Users",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Start Your Tech Strategy",
  },
  {
    id: 2,
    title: "Early-Stage Technology Advisor & Coach",
    description:
      "Bridge the gap between technology and strategic business growth. A tailored, hands-on approach not only supports but also accelerates the path to success",
    icon: "BarChart",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Get Growth Guidance",
  },
  {
    id: 3,
    title: "Engineering Team Building & Leadership",
    description:
      "Recruit, structure, and mentor high-performing engineering teams tailored to your startup's stage. Create a sustainable and scalable engineering culture.",
    icon: "Group",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Build Your Dream Team",
  },
  {
    id: 4,
    title: "Technology Roadmapping & Prioritization",
    description:
      "Design and implement a clear, actionable technology roadmap that balances short-term wins and long-term vision, ensuring alignment with business objectives",
    icon: "Map",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Chart Your Tech Path",
  },
  {
    id: 5,
    title: "Regulatory & Compliance Assistance",
    description:
      "Secure data and build trust with focused, strategic guidance, propelling your business towards secure growth. Get help navigating regulated industries",
    icon: "Shield",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Secure Your Compliance",
  },
  {
    id: 6,
    title: "Due Diligence & Investor Support",
    description:
      "Support founders with technical due diligence assessments, pitch deck refinement, and strategic investor introductions to strengthen fundraising efforts and unlock growth opportunities",
    icon: "FileText",
    linkUrl: "https://tally.so/r/mOA0zY",
    linkText: "Pitch your startup",
  },
  {
    id: 7,
    title: "Web & Mobile App Development",
    description:
      "Custom web and mobile application development, from concept to deployment. Specializing in both traditional coding and no-code/low-code solutions to match your needs and budget",
    icon: "Code",
    linkUrl: "https://intro.co/VitorOliveira",
    linkText: "Build Your App",
  },
  {
    id: 8,
    title: "Engineering & Management Mentoring",
    description:
      "Personalized mentoring for software engineers and technical managers looking to advance their careers, improve their leadership skills, or navigate challenging professional situations",
    icon: "GraduationCap",
    linkUrl: "https://tally.so/r/wAK49W",
    linkText: "Level Up Your Career",
  },
  {
    id: 9,
    title: "Interview Preparation",
    description:
      "Comprehensive interview preparation for software engineering roles, including system design, coding challenges, behavioral interviews, and technical discussions. Get personalized coaching and mock interviews",
    icon: "MessageSquare",
    linkUrl: "https://mentorcruise.com/mentor/vitoroliveira/",
    linkText: "Ace Your Interview",
  },
];


