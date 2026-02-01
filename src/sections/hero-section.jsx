import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 text-center"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute left-1/2 top-[120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      {/* Availability badge */}
      <motion.div
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-30" />
          <span className="inline-flex size-2.5 rounded-full bg-green-400" />
        </span>
        Open to Data Analyst, Data Scientist & ML Engineer roles — Summer 2026
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 30 }}
      >
        Disha Menghani
      </motion.h1>

      {/* Role line */}
      <motion.h2
        className="mt-4 text-xl font-medium text-indigo-300 md:text-2xl"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, type: "spring", stiffness: 240, damping: 30 }}
      >
        Data Analyst · Data Scientist · Machine Learning Engineer
      </motion.h2>

      {/* Summary */}
      <motion.p
        className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.16, type: "spring", stiffness: 240, damping: 30 }}
      >
        I work with data to drive decisions, build scalable analytics pipelines,
        and develop machine learning models that deliver measurable impact. My
        experience spans Python, SQL, ETL workflows, data visualization, and
        applied machine learning, with hands-on work reducing processing time,
        improving forecast accuracy, and automating reporting. Currently pursuing
        a Master’s in Information Systems, I focus on transforming complex data
        into clear, actionable, and production-ready solutions.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.24, type: "spring", stiffness: 240, damping: 30 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95 active:scale-[0.98]"
        >
          <Download className="size-4.5" />
          Download Resume
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 active:scale-[0.98]"
        >
          View Work & Projects
          <ArrowRight className="size-4.5" />
        </a>
      </motion.div>
    </section>
  );
}
