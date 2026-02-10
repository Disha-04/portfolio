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
        "An end-to-end real-time analytics system that simulates production-grade revenue monitoring. The platform ingests event data, computes rolling KPI windows, exposes metrics via a FastAPI backend, and visualizes revenue health, alerts, and SLA signals through an executive dashboard and Tableau Public.",
      metrics: [
        { label: "Category", value: "Data Analytics" },
        { label: "Focus", value: "Real-Time KPIs" },
        { label: "Status", value: "Completed" },
      ],
      stack: [
        "Python",
        "FastAPI",
        "Pandas",
        "Chart.js",
        "HTML/CSS/JS",
        "Tableau Public",
      ],
      links: {
        image: "/projects/revenue-dashboard.png",
        github: "https://github.com/Disha-04/operational-revenue-signal-monitor",
        tableau: "https://public.tableau.com/views/Book1_17705258725070/Sheet1",
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
                  <div className="text-xs text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Title & description */}
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>

            <p className="mt-2 text-sm text-white/70">{project.description}</p>

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
            <div className="mt-6 flex flex-wrap gap-3">
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

              {/* OPTIONAL: Tableau button (shows only if tableau link exists) */}
              {project.links?.tableau && (
                <a
                  href={project.links.tableau}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                >
                  Tableau <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}