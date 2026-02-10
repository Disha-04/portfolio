import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { ExternalLink, Github } from "lucide-react";

export default function OurLatestCreation() {
  const projects = [
    {
      title: "BrainyAI",
      description:
        "An AI-powered question-answering web application that responds to general user queries using a large language model and optional real-time web search. Designed with a minimal interface and source-backed responses to demonstrate applied AI system design.",
      metrics: [
        { label: "Category", value: "AI Application" },
        { label: "Focus", value: "LLM + Web" },
        { label: "Status", value: "Deployed" },
      ],
      stack: ["Python", "Streamlit", "Groq API", "DuckDuckGo Search"],
      links: {
        live: "https://ai-semantic-search-cpxebcxqckm6dqvtq4mnbc.streamlit.app/",
        github: "https://github.com/Disha-04",
      },
    },
    {
  title: "Operational Revenue Signal Monitor",
  description:
    "End-to-end real-time revenue monitoring system: simulated event stream → rolling 5-minute KPI windows → FastAPI API → premium executive dashboard + Tableau Public. Includes SLA/data freshness signals and WARN/CRIT alerting.",
  metrics: [
    { label: "Category", value: "Analytics + Web" },
    { label: "Focus", value: "Real-time KPIs" },
    { label: "Status", value: "Deployed" },
  ],
  stack: [
    "Python",
    "FastAPI",
    "Pandas",
    "HTML/CSS",
    "JavaScript",
    "Chart.js",
    "Tableau Public",
  ],
  links: {
    live: "https://public.tableau.com/app/profile/disha.menghani/viz/Book1_17705258725070/Sheet1?publish=yes",
    github: "https://github.com/Disha-04/operational-revenue-signal-monitor",
  },
},
    {
      title: "Machine Learning Project",
      description:
        "Upcoming project exploring supervised learning techniques with an emphasis on model evaluation and feature engineering.",
      metrics: [
        { label: "Category", value: "Machine Learning" },
        { label: "Focus", value: "Modeling" },
        { label: "Status", value: "Planned" },
      ],
      stack: ["Python", "Scikit-learn", "NumPy"],
      links: {},
    },
  ];

  return (
    <section id="projects" className="mt-32">
      <SectionTitle
        title="Featured Projects"
        description="A selection of projects focused on AI, data analytics, and applied problem-solving."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:bg-white/10"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              type: "spring",
              stiffness: 260,
              damping: 50,
            }}
          >
            {/* Metrics */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/5 py-3 text-center"
                >
                  <div className="text-sm font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-white/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Title & description */}
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-white/70">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                >
                  Live App <ExternalLink className="size-4" />
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                >
                  Source Code <Github className="size-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}