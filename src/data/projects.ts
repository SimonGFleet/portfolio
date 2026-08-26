import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "farrier-fleet",
    name: "Farrier Fleet",
    category: "Mobile business management",
    summary:
      "A mobile app helping farriers manage clients, horses, appointments, work records, photos, and invoices.",
    overview:
      "Farrier Fleet brings the day-to-day work of a farrier into one practical system, reducing paperwork and making client and horse histories easier to manage.",
    technologies: ["React Native", "TypeScript", "Expo", "Supabase"],
    features: [
      "Client and horse records",
      "Appointment scheduling",
      "Visit notes and photos",
      "Invoices and follow-up reminders",
    ],
  },
  {
    slug: "window",
    name: "Window",
    category: "Window quoting & ordering",
    summary:
      "A system for designing, pricing, surveying, and managing made-to-measure window orders.",
    overview:
      "Window connects the sales and manufacturing sides of custom window orders, from the first customer details through design, pricing, survey, and approval.",
    technologies: ["React", "React Native", "TypeScript", "SQLite", "Supabase"],
    features: [
      "Visual window configuration",
      "Quotes and commercial pricing",
      "Survey and order workflows",
      "Offline-first mobile data",
    ],
  },
  {
    slug: "beginners-mind",
    name: "The Beginner’s Mind",
    category: "Meditation and personal analytics",
    summary:
      "A meditation tracker combining customizable timers, reflection logging, reviews, and personal trend analysis.",
    overview:
      "The Beginner’s Mind helps meditators understand their practice over time instead of only counting minutes or maintaining a streak.",
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Supabase"],
    features: [
      "Custom meditation timers and bells",
      "Post-session reflections",
      "Weekly and monthly reviews",
      "Personal trends and comparisons",
    ],
  },
  {
    slug: "order-book",
    name: "Order Book Simulator",
    category: "Market microstructure research",
    summary:
      "A simulation for exploring order matching, trading agents, market-making strategies, inventory, and P&L.",
    overview:
      "The simulator models how orders interact in a market and provides a controlled environment for testing trading agents and market-making ideas.",
    technologies: ["Python", "Jupyter", "Simulation", "Data analysis"],
    features: [
      "Limit and market order matching",
      "Multiple trading agents",
      "Inventory and cash tracking",
      "Market and agent analytics",
    ],
  },
];
