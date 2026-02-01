import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

const SkillCard = ({ title, skills }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <h3 className="text-base font-semibold text-white">{title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function TechnicalArsenal() {
  const arsenal = [
    {
      title: "Data Science & Machine Learning",
      skills: [
        "Machine Learning",
        "Predictive Modeling",
        "Statistical Analysis",
        "Feature Engineering",
        "Model Evaluation",
        "Time Series Forecasting",
      ],
    },
    {
      title: "Languages",
      skills: ["Python", "SQL", "R", "SAS", "HTML", "CSS"],
    },
    {
      title: "Analytics & Visualization",
      skills: [
        "Power BI",
        "Tableau",
        "Excel",
        "Data Visualization",
        "Dashboarding",
        "KPI Reporting",
      ],
    },
    {
      title: "Data Engineering & ETL",
      skills: [
        "ETL Pipelines",
        "Data Warehousing",
        "Data Validation",
        "Unstructured Data",
        "Airflow",
        "Prefect",
      ],
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "Oracle", "AWS"],
    },
    {
      title: "Big Data & Platforms",
      skills: ["Hadoop", "Apache Spark"],
    },
    {
      title: "Tools & Workflow",
      skills: ["GitHub", "JIRA", "Linux Basics", "MS Office"],
    },
    {
      title: "Core Strengths",
      skills: [
        "Pipeline Optimization",
        "Automation",
        "Data Quality Checks",
        "Stakeholder Communication",
        "Business Decision Support",
      ],
    },
  ];

  return (
    <section id="skills" className="mt-32 flex flex-col items-center">
      <SectionTitle
        title="Technical Arsenal"
        description="A focused overview of the tools, technologies, and concepts I work with."
      />

      <div className="mx-auto mt-14 w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {arsenal.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                type: "spring",
                stiffness: 240,
                damping: 28,
              }}
            >
              <SkillCard title={group.title} skills={group.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
