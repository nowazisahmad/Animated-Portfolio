import { motion, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function HeroContent({ progress }) {
  // Title stays visible in initial scroll then fades out
  const titleOpacity = useTransform(progress, [0, 0.18], [1, 0]);
  const titleY = useTransform(progress, [0, 0.18], [0, -80]);
  const titleScale = useTransform(progress, [0, 0.18], [1, 0.92]);

  // Bottom scroll prompt fades out early
  const scrollPromptOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  // CTA appears near the end of hero sequence
  const ctaOpacity = useTransform(progress, [0.75, 0.92], [0, 1]);
  const ctaY = useTransform(progress, [0.75, 0.92], [30, 0]);

  return (
    <>
      {/* Centered Initial Hero Content */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-400/30 backdrop-blur-md mb-6 shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-cyan-300">
            Full-Stack Web Developer
          </span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white max-w-4xl">
          Nowazis Ahmad<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500"> Usama</span>
        </h1>

        {/* Roles & Tagline */}
        <p className="mt-4 text-base sm:text-xl md:text-2xl text-zinc-300 max-w-2xl font-light leading-relaxed">
          Full Stack Developer and high-performance interactive web apps.
        </p>

        {/* Quick Tech Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl">
          {["React 19", "Node.js",  "Tailwind CSS"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Initial Scroll Down Indicator */}
      <motion.div
        style={{ opacity: scrollPromptOpacity }}
        className="absolute bottom-10 z-10 flex flex-col items-center justify-center w-full pointer-events-none"
      >
        <span className="text-[11px] uppercase tracking-widest text-zinc-400 mb-2 font-medium">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </motion.div>

      {/* End of Hero CTA */}
      <motion.div
        style={{ opacity: ctaOpacity, y: ctaY }}
        className="absolute bottom-16 z-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center px-4"
      >
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
        >
          <span>Explore Experience</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-7 py-3.5 font-medium text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
        >
          View Projects
        </a>
      </motion.div>
    </>
  );
}