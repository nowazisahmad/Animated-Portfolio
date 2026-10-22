import { useState, useEffect } from "react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // At the very top the navbar is transparent over the always-dark hero
  // canvas, so use light text in BOTH themes. Once scrolled it has a
  // theme-tinted backdrop, so use theme-aware colors.
  const atTop = !scrolled;
  const primaryText = atTop
    ? "text-white group-hover:text-cyan-300"
    : "text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400";
  const subText = atTop
    ? "text-zinc-300"
    : "text-zinc-500 dark:text-zinc-400";
  const iconBtn = atTop
    ? "text-zinc-300 hover:text-white hover:bg-white/10"
    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 dark:bg-black/75 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 py-3 shadow-lg shadow-zinc-900/5 dark:shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Availability Status */}
          <a
            href="#"
            className="flex items-center gap-3 group decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center font-bold text-black text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              NA
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-sm tracking-wide transition-colors ${primaryText}`}>
                Nowazis Ahmad Usama
              </span>
              <span className={`text-[11px] flex items-center gap-1.5 ${subText}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Work
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-zinc-200/60 dark:hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/nowazisahmad"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors ${iconBtn}`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <ThemeToggle overDark={atTop} />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-xs lg:text-sm font-semibold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://github.com/nowazisahmad"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${iconBtn}`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <ThemeToggle overDark={atTop} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg bg-zinc-100/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-white/10 backdrop-blur-xl px-6 py-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-cyan-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center py-2.5 bg-cyan-400 text-black font-semibold rounded-xl text-sm hover:bg-cyan-300 transition-colors"
            >
              Contact Nowazis Ahmad
            </a>
            <a
              href="mailto:1289usama@gmail.com"
              className="w-full text-center py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs flex items-center justify-center gap-1"
            >
              <Mail className="w-4 h-4" /> 1289usama@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
