import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaAward,
} from "react-icons/fa";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Frontend Developer Trainee / Practical Projects",
      company: "Personal & Open Source Development",
      period: "2024 – Present",
      location: "Dhaka, Bangladesh",
      badge: "Practical Engineering",
      badgeColor:
        "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
      responsibilities: [
        "Engineered full-stack and frontend React/Next.js applications (Bazar-Dor, FitLog, DevStack) with clean component architecture.",
        "Integrated RESTful APIs, handled asynchronous state transitions, and reduced unnecessary re-renders with React Context.",
        "Applied modern Tailwind CSS and UI component systems (HeroUI, DaisyUI) to build pixel-perfect, responsive mobile interfaces.",
        "Followed strict Git workflows including feature branching, semantic commits, and automated deployments on Vercel.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "Git",
      ],
    },
    {
      role: "Independent Web Developer & Creator",
      company: "Self-Employed / Client Projects",
      period: "2023 – Present",
      location: "Remote",
      badge: "Freelance & Projects",
      badgeColor:
        "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
      responsibilities: [
        "Designed and deployed responsive web interfaces with focus on Lighthouse speed, SEO, and accessible markup.",
        "Built custom web tools featuring local storage persistence, price tracking trends, and workout routine managers.",
        "Configured automated deployments, environment variables, and custom DNS hosting on Vercel.",
        "Iterated rapidly on user feedback to refine usability and interface ergonomics.",
      ],
      technologies: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Vercel",
        "HTML5/CSS3",
      ],
    },
  ];

  const valueProps = [
    {
      icon: FaLaptopCode,
      title: "Rapid Onboarding",
      desc: "Solid foundational knowledge in React 19, Next.js, modern JavaScript, and Git ensures minimal ramp-up time.",
    },
    {
      icon: Sparkles,
      title: "High Energy & Drive",
      desc: "Passionate about writing clean code, actively taking feedback, and solving complex problems with enthusiasm.",
    },
    {
      icon: FaHandsHelping,
      title: "Team Player",
      desc: "Thrives in collaborative environments with respectful communication and strong empathy for peers.",
    },
    {
      icon: FaAward,
      title: "Modern Best Practices",
      desc: "Trained on modern tools, including Vite, Next.js App Router, Tailwind CSS, and component-driven design.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-white relative overflow-hidden dark:bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Practical Background
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-300">
              Experience
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            My practical development journey, independent projects,
            and hands-on experience building modern, responsive,
            and user-friendly web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-zinc-200 dark:before:bg-white/10 before:-translate-x-1/2 before:hidden md:before:block">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.role}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Experience Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="rounded-2xl bg-white border border-zinc-200 shadow-sm p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-cyan-50/40 transition-all duration-300 group dark:bg-zinc-900/70 dark:border-white/10 dark:hover:bg-zinc-900/90 dark:shadow-xl">
                    {/* Badge and Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company and Location */}
                    <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mt-2 flex flex-wrap items-center gap-2">
                      <span>{exp.company}</span>

                      <span className="text-zinc-300 dark:text-zinc-600">•</span>

                      <span className="text-zinc-500 dark:text-zinc-400 font-normal flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <div className="mt-5 space-y-3">
                      {exp.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-white/5 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Timeline Node */}
                <div className="hidden md:flex items-center justify-center w-16 shrink-0 relative mt-8">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-white shadow-lg shadow-cyan-500/50 dark:border-black" />
                </div>

                {/* Opposite Half */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>

        {/* Why Hire Me */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-white border border-zinc-200 shadow-sm p-6 sm:p-8 dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Why Hire Me as a Fresher Developer?
            </h3>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              What I bring to your engineering team from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valueProps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-cyan-500/30 transition-colors dark:bg-white/[0.03] dark:border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Icon className="text-lg" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Section Link */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-100 border border-zinc-200 hover:border-cyan-400/40 hover:bg-zinc-200 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-all shadow-lg dark:bg-white/5 dark:border-white/10 dark:hover:border-cyan-400/40 dark:hover:bg-white/10 dark:text-zinc-300 dark:hover:text-white"
          >
            <span>Discover Vision & Philosophy</span>
            <ArrowDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
