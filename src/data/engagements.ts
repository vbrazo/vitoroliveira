export type Engagement = {
  id: number;
  title: string;
  hours: string;
  description: string;
};

export const engagements: Engagement[] = [
  { id: 1, title: "Virtual", hours: "1-4 hours/week", description: "Highly fractional, advisory leadership and coaching" },
  { id: 2, title: "Fractional", hours: "1-3 days/week", description: "Part-time leadership where full-time isn't needed" },
  { id: 3, title: "Interim", hours: "3-5 days a week", description: "Full-time leadership during an unplanned or forced vacancy" },
  { id: 4, title: "Full-time", hours: "5 days a week", description: "Dedicated partnership for long-term success" },
];


