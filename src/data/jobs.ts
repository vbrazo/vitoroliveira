export type JobType = {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Fractional';
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  whyJoin: string[];
  tags: string[];
  applyUrl?: string;
};

export const jobs: JobType[] = [
  {
    id: '1',
    slug: 'senior-fullstack-engineer-healthcare',
    title: 'Senior Full-Stack Engineer',
    company: 'Healthcare Startup',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$170K - $215K',
    description: 'As a software engineer at this healthcare startup, you\'ll help build and scale a healthcare store that makes it delightfully simple to shop for any type of care. You\'ll work across the stack whilst collaborating directly with clinical staff to understand workflows and integrate with healthcare systems like EHRs and insurance platforms.',
    requirements: [
      '4+ years of experience as a full-stack or frontend engineer wearing multiple hats in uncertain environments',
      'Demonstrable track record in ambiguous situations and excited to work in a fast-paced environment (prior startup experience ideal)',
      'Experience across the stack or strong front-end leaning and aspire to be scrappy generalists that wear many hats',
      'Proficient in at least one modern tech stack (and eager to learn if there are gaps)',
      'Strong communicator – able to articulate complex/technical problems in a methodical manner and explain their thinking succinctly',
      'Entrepreneurial drive beyond the code (e.g., built something but can also speak about their GTM strategy or strategy to find the first customer)',
      'Strong mission alignment and resonates with the vision (but no prior experience in the healthcare space required)'
    ],
    responsibilities: [
      'Build and maintain full-stack features spanning pricing engines, appointment booking, and payment systems',
      'Write product requirements documents, SQL analytics queries, and own QA for your features',
      'Work directly with clinicians and operations teams to understand needs and shadow their workflows',
      'Integrate with complex healthcare infrastructure including EHRs, insurance systems, and lab providers',
      'Handle ambiguous problems in a fast-paced startup environment where engineers wear multiple hats'
    ],
    whyJoin: [
      'Transforming an incredibly outdated yet important industry',
      'Working side-by-side with the former founders of PillPack (exited to Amazon)',
      'Recently closed Series A ($32m funding total) and rapidly scaling at this inflection point',
      'Hybrid model and a collaborative work environment'
    ],
    tags: ['React', 'Next.js', 'Ruby on Rails', 'PostgreSQL', 'AWS', 'Healthcare'],
  },
  {
    id: '2',
    slug: 'backend-engineer-payments',
    title: 'Backend Engineer',
    company: 'Payments Startup',
    location: 'Palo Alto, CA',
    type: 'Full-time',
    salary: '$200K - $300K',
    description: 'We are looking for a Backend Engineer, Payments with a proven track record at a high-growth startup to join our payments team. We need someone who is passionate about building robust payment infrastructure and has experience in the payments, marketplace, fintech, social, or creator space. This individual will be crucial in scaling our Payments product and integrating with our platform customers.',
    requirements: [
      '5-12 years of experience as a full-stack engineer (strong back-end tilt) or back-end engineer in the payments / fintech / creator sectors',
      'Experience specifically in payments and payment products in a marketplace/fintech/social/creator space',
      'Proven track record at a high-growth startup (e.g., promotions, awards, etc.)',
      'Startup experience or evidence of 0 to 1 mentality (Y Combinator ideal)',
      'Computer science degree from a top school. Top 10 CS programs (e.g., Stanford, Waterloo, CMU)',
      'Proficient with Ruby on Rails for back-end and Next.js for the front-end',
      'Excellent communication skills (written and verbal)',
      'Experience talking to customers for product integration',
      'Work in-office 5 days/week in Palo Alto, CA'
    ],
    responsibilities: [
      'Learning our Payments product inside-and-out',
      'Working with our platform customers to integrate our Payments into their product',
      'Traveling to customer offices to assist with integrations when necessary',
      'Making backend contributions to improve and scale our Payments product'
    ],
    whyJoin: [
      'Mission to deliver everyone a sustainable income',
      'Last month, more than 27,000 people earned over $115M in earnings',
      'Unique opportunity to choose your team and influence the office setup as the first engineer in the Palo Alto office',
      'Competitive equity package'
    ],
    tags: ['Ruby on Rails', 'Next.js', 'TypeScript', 'Payments', 'Fintech'],
  },
];

