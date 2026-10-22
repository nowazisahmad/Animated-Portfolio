import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const filterCategories = [
  { id: "all", name: "All Projects" },
  { id: "nextjs", name: "Next.js & Fullstack" },
  { id: "typescript", name: "React & TypeScript" },
  { id: "tools", name: "Tools & Productivity" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "nextjs") {
      return project.filterGroup === "nextjs" || project.technologies.some((t) => t.includes("Next.js"));
    }
    if (activeFilter === "typescript") {
      return project.technologies.some((t) => t.includes("TypeScript"));
    }
    if (activeFilter === "tools") {
      return project.filterGroup === "tools" || project.tags?.includes("Tools");
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto transition-colors duration-300 relative"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Explore real-world web applications I built to solve practical problems, featuring clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {filterCategories.map((tab) => {
          const isSelected = activeFilter === tab.id;
          const count =
            tab.id === "all"
              ? projects.length
              : projects.filter((p) => {
                  if (tab.id === "nextjs") return p.technologies.some((t) => t.includes("Next.js"));
                  if (tab.id === "typescript") return p.technologies.some((t) => t.includes("TypeScript"));
                  if (tab.id === "tools") return p.filterGroup === "tools" || p.tags?.includes("Tools");
                  return false;
                }).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span>{tab.name}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Interactive Spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-gray-900/80 dark:bg-gray-950/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-xs border border-white/10 z-20">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4 relative z-20">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xs hover:shadow transition"
                    >
                      <span>Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-14 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Want to see more code and experiments? Check out my{" "}
          <a
            href="https://github.com/nowazisahmad/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;