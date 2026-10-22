import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projects = [
  {
    id: 1,
    title: "Bazar-Dor (বাজার দর) — Daily Commodity Price Tracker",
    image: project1,
    category: "Fullstack Next.js Web App",
    filterGroup: "nextjs",
    tags: ["Next.js", "Fullstack", "React"],
    technologies: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "REST API",
      "Iconify"
    ],
    description:
      "A modern, responsive commodity price tracking web application for Bangladesh. Enables users to view real-time market prices of essential daily goods (Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs & Milk, Spices), track price trends against yesterday and last week, and examine localized price breakdowns across major markets and divisions.",
    live: "https://bazar-dor-ashen.vercel.app/",
    github: "https://github.com/nowazisahmad/Bazar-Dor",
    challenges: [
      "Designing responsive multi-category filtering with localized Bengali typography and numeric price datasets",
      "Structuring dynamic price fluctuation metrics (today vs. yesterday vs. last month percentage changes) across regional markets",
      "Implementing secure user authentication flow with Better Auth and real-time REST API data integration"
    ],
  },
  {
    id: 2,
    title: "FitLog — Workout Tracker & Gym Companion",
    image: project2,
    category: "Fitness & Health Web Application",
    filterGroup: "nextjs",
    tags: ["Next.js", "TypeScript", "React"],
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Context API",
      "React Toastify"
    ],
    description:
      "A sleek, dark-themed workout tracking web application designed for fitness enthusiasts. Features a comprehensive library of 12+ lifts covering every major muscle group, dynamic exercise sorting by duration and calories, an interactive dual-tab 'Today's Plan' and 'Saved Workouts' manager, and real-time toast feedback.",
    live: "https://fit-log-eight-sepia.vercel.app/",
    github: "https://github.com/nowazisahmad/Fit-Log",
    challenges: [
      "Architecting global workout state management using React Context API without unnecessary component re-renders",
      "Building a dual-tab system (Today's Plan & Saved Workouts) with dynamic sorting by duration, difficulty, and calories burned",
      "Implementing responsive mobile drawer navigation and real-time interactive toast feedback"
    ],
  },
  {
    id: 3,
    title: "DevStack — Interactive Developer Tech Stack Builder",
    image: project3,
    category: "Developer Tools & Productivity",
    filterGroup: "tools",
    tags: ["React", "TypeScript", "Tools"],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Icons",
      "React Toastify"
    ],
    description:
      "A modern, interactive web application designed to help developers compare, select, and manage their ideal technology stack. Users can browse an extensive catalog of frontend frameworks, backend runtimes, databases, and DevOps tools, add them to their stack in a dynamic sticky sidebar, and manage their selections with instant toast feedback.",
    live: "https://dev-stack-gules-six.vercel.app/",
    github: "https://github.com/nowazisahmad/DevStack",
    challenges: [
      "Creating an interactive stack builder with real-time dynamic stack calculation and sticky sidebar synchronization",
      "Implementing robust type safety across technical categories and tool metadata using TypeScript",
      "Delivering a responsive, accessible layout with smooth micro-interactions, gradient badges, and toast notifications"
    ],
  },
];

export default projects;