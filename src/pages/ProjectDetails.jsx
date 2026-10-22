import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import ThemeToggle from "../components/ThemeToggle";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold transition shadow-md"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-50/60 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          <ThemeToggle />
        </div>

        {/* Project Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8 relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

          {/* Main Screenshot Container */}
          <div className="rounded-xl overflow-hidden border border-gray-200/80 dark:border-gray-800 shadow-md aspect-video bg-gray-100 dark:bg-gray-800 group relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Title & Category Badge */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 text-xs font-semibold px-3 py-1 rounded-full">
                <HiSparkles className="text-xs" />
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-blue-600 dark:text-blue-400 text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 px-3 py-1 rounded-lg text-xs font-semibold shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Project Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Technical Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
              <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <HiShieldCheck className="text-emerald-600 dark:text-emerald-400 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="leading-relaxed">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-800 hover:bg-black dark:hover:bg-gray-700 text-white border border-transparent dark:border-gray-700 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition transform hover:-translate-y-0.5"
              >
                <FaGithub className="text-lg" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;