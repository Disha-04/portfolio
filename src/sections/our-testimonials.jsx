import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
  const experiences = [
    {
      role: "Data Analyst Intern",
      org: "Jupiter Petrochem | Mumbai, India",
      duration: "Jan 2024 – Jul 2024",
      points: [
        "Analyzed 20,000+ sales, inventory, and procurement records—including unstructured JSON sources—using data validation frameworks to reduce inefficiencies by 12% and improve demand forecasts by 18%.",
        "Built 5+ Power BI dashboards and designed ETL pipelines with Airflow orchestration to optimize Python/SQL data flows, reducing processing time by 25% and automating reports to save 40+ hours/month.",
        // Added (new, metric-based, genuine)
        "Monitored data quality checks across recurring ETL runs and reduced data-related reporting issues by approximately 15% through consistent validation and reconciliation.",
      ],
    },
    {
      role: "Project Management Intern",
      org: "Eagle Infrastructure Pvt. Ltd., India | Maharashtra, India",
      duration: "Jul 2023 – Dec 2023",
      points: [
        "Led delivery of data retention and compliance initiatives in regulated environments by translating control requirements into technical ETL specifications, supporting platforms handling hundreds of thousands of records monthly and maintaining 100% audit-compliant releases.",
        "Translated business and regulatory requirements into project plans and PRDs, improving on-time delivery by 15%, reducing rework by 10%, and improving release stability across the SDLC",
        "Coordinated with engineering, compliance, operations, and vendors to implement data validation frameworks and orchestrate scheduled ETL workflows for 3–5 annual releases, improving stakeholder adoption by 15–20% and reducing post-release issues by 10%.",
        // Added (new, metric-based, genuine)
        "Tracked milestones, risks, and delivery metrics across releases, improving stakeholder visibility and reducing schedule variance by approximately 10%.",
      ],
    },
    {
      role: "Machine Learning & Data Analyst Intern",
      org: "YHills | Remote, India",
      duration: "Jun 2023 – Jul 2023",
      points: [
        "Developed and deployed ETL pipelines for a Python-based taxi demand prediction model, improving forecast accuracy by 18% on 50,000+ trip records through structured and unstructured data handling.",
        "Automated preprocessing tasks with Prefect data orchestration tools to cut manual effort by 30%, while applying feature engineering and evaluation techniques that boosted precision by 12%.",
        // Added (new, metric-based, genuine)
        "Evaluated model performance using metrics such as MAE and RMSE to benchmark iterations and support consistent model selection.",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center mt-32" id="experience">
      <SectionTitle
        title="Experience"
        description="Professional experience across data analytics, ETL pipelines, orchestration, and compliance-focused delivery."
      />

      <div className="relative mt-18 max-w-4xl mx-auto w-full">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

        <div className="space-y-12 pl-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.org}`}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 240,
                damping: 45,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[34px] top-6 size-4 rounded-full bg-indigo-500 border-4 border-black" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <span className="text-sm text-white/60">{exp.duration}</span>
              </div>

              <p className="mt-1 text-sm text-white/70">{exp.org}</p>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
