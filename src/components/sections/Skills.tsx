"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, ServerCog, GitPullRequest } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Automation",
      icon: <MonitorSmartphone className="w-5 h-5" />,
      skills: ["Cypress", "Playwright", "WebdriverIO", "Appium"],
    },
    {
      title: "API Testing",
      icon: <ServerCog className="w-5 h-5" />,
      skills: ["Postman", "REST APIs"],
    },
    {
      title: "Tools",
      icon: <GitPullRequest className="w-5 h-5" />,
      skills: ["GitHub", "GitLab", "Jira", "BrowserStack"],
    },
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["JavaScript"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for delivering robust quality assurance and automation across modern software stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4 text-primary group-hover:scale-105 transition-transform">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
