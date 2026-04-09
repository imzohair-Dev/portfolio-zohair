"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Playwright Automation Framework",
      description: "Scalable UI + API automation framework using Playwright with POM, fixtures, and Allure reporting.",
      tags: ["Playwright", "TypeScript", "POM", "Allure"],
      link: "https://github.com/imzohair-Dev/playwright-e2e-automation-framework/tree/main",
    },
    {
      title: "Cypress E-Commerce Testing Suite",
      description: "End-to-end testing of e-commerce flows including checkout, API validation, and edge case handling.",
      tags: ["Cypress", "E-commerce", "API Testing"],
      link: "https://github.com/imzohair-Dev/cypress-ecommerce-framework",
    },
    {
      title: "API Automation Framework",
      description: "Comprehensive API testing framework with request validation, dynamic data handling, and automation-ready structure.",
      tags: ["API Testing", "Automation", "JavaScript"],
      link: "https://github.com/imzohair-Dev/api-automation-framework/tree/master",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in test automation, quality assurance, and CI/CD implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mt-2 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
