import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon } from "./Icons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-16 relative overflow-hidden dark:bg-zinc-950 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200 dark:border-white/5">
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center font-bold text-black text-base">
                NA
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Nowazis Ahmad Usama
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm">
              Full Stack Developer & Software Engineer. Engineering high-performance web applications, scalable SaaS platforms & interactive user experiences.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nowazisahmad"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:1289usama@gmail.com"
              className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
          <p>© {currentYear}Nowazis Ahmad Usama. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Engineered with React 19, GSAP & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
