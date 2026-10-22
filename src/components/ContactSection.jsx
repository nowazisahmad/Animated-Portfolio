import { useState } from "react";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const email = "1289usama@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-zinc-200 dark:bg-black dark:border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-300">Extraordinary</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Have a SaaS idea, an interactive web project, or looking for a full-stack engineer? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Column: Direct Info Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status card */}
            <div className="rounded-3xl bg-white border border-zinc-200 shadow-sm p-6 sm:p-8 backdrop-blur-sm dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  Currently Available
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Open for SaaS & Full-Stack Opportunities
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                Whether you need technical consulting, multi-tenant SaaS architecture, or a production React app, I respond within 24 hours.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              {/* Email item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-cyan-500/30 transition-colors dark:bg-zinc-900/50 dark:border-white/10 dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors relative cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied && (
                    <span className="absolute -top-7 right-0 text-[10px] bg-emerald-500 text-black font-bold px-2 py-0.5 rounded shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              {/* GitHub item */}
              <a
                href="https://github.com/nowazisahmad"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-cyan-500/30 transition-colors group dark:bg-zinc-900/50 dark:border-white/10 dark:shadow-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      github.com/nowazisahmad
                    </div>
                  </div>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  Visit →
                </span>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm dark:bg-zinc-900/50 dark:border-white/10 dark:shadow-none">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                    Location & Timezone
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Bangladesh (GMT+6) • Remote Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 backdrop-blur-sm shadow-xl dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto dark:text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out. Nowazis Ahmad has received your inquiry and will reply to <span className="text-cyan-700 dark:text-cyan-300 font-semibold">{email}</span> as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-sm font-semibold text-zinc-800 transition-colors dark:bg-white/10 dark:hover:bg-white/20 dark:text-white cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm dark:bg-black/60 dark:border-white/10 dark:text-white dark:placeholder-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm dark:bg-black/60 dark:border-white/10 dark:text-white dark:placeholder-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Full Stack Role"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm dark:bg-black/60 dark:border-white/10 dark:text-white dark:placeholder-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, or objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none dark:bg-black/60 dark:border-white/10 dark:text-white dark:placeholder-zinc-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 dark:from-cyan-400 dark:via-teal-300 dark:to-cyan-500 dark:text-black"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Nowazis Ahmad</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
