"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "3+ years QA automation & manual testing experience",
    "Cypress, Playwright, WebdriverIO, Appium, Postman API testing",
    "Ex-Microsoft & Ex-Disney team collaboration experience",
    "AI-driven project QA with prompt validation & automation",
    "CI/CD integration & enterprise-level QA practices",
    "Agile, Jira, and freelance project delivery",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Abstract decorative shape */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6 font-medium text-foreground">
                I&apos;m a QA Automation Engineer with 3+ years of hands-on experience in automation and manual testing. I specialize in building robust testing frameworks using Cypress, Playwright, WebdriverIO, and Appium, with strong proficiency in API testing and Agile workflows.
              </p>
              <p className="leading-relaxed mb-6">
                I&apos;ve had the privilege of working alongside teams with <span className="font-bold text-primary">ex-Microsoft</span> and <span className="font-bold text-primary">ex-Disney</span> engineers, which has greatly enhanced my understanding of enterprise-level QA practices and CI/CD integration.
              </p>
              <p className="leading-relaxed mb-8">
                Most recently, I contributed to the QA of an <span className="font-bold text-primary">AI</span>-driven project, focusing on prompt validation, output consistency, and API-level automation. This experience combined analytical testing with practical automation frameworks, keeping me at the forefront of emerging QA technologies.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
