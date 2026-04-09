"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "SQA Engineer",
      company: "Techesthete",
      period: "Apr 2025 – Present",
      location: "On-site / Remote",
      responsibilities: [
        "Leading automation and manual testing initiatives for web and mobile applications",
        "Developing and maintaining test automation frameworks using Cypress, Playwright, and WebdriverIO",
        "Performing cross-browser testing and ensuring compatibility across different platforms",
        "Integrating automated tests into CI/CD pipelines for continuous quality assurance",
      ],
    },
    {
      role: "SQA Automation & Manual Associate",
      company: "Blackbox Labz",
      period: "Feb 2024 – Apr 2025",
      location: "On-site",
      responsibilities: [
        "Automated comprehensive E2E tests, significantly improving team efficiency and product reliability",
        "Executed API testing utilizing Postman and REST Assured",
        "Integrated automation test suites directly into CI/CD pipelines",
        "Enhanced test reporting and visibility leveraging Cypress Cloud and automated Slack notifications",
      ],
    },
    {
      role: "Freelance QA Automation Engineer",
      company: "Independent Contractor",
      period: "6 Months",
      location: "Remote",
      responsibilities: [
        "Built comprehensive automation frameworks for client projects using modern testing tools",
        "Conducted thorough manual testing alongside automation to ensure complete coverage",
        "Implemented bug tracking and reporting systems to improve product quality",
        "Reduced manual testing effort by 60% through strategic automation implementation",
        "Enhanced test reliability and coverage for critical business workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 pl-6 md:pl-8 ml-4 md:mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-primary -left-[35px] md:-left-[43px] top-1.5 border-4 border-background" />

                <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
