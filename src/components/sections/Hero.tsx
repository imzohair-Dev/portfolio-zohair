"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, GitBranch } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradients for modern effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4"
          >
            Hi, I'm <span className="text-primary">Muhammad Zohair</span>
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-primary">SQA Engineer</span> | Automation & Manual Testing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            3+ years of experience delivering robust QA automation solutions and ensuring software quality through comprehensive testing strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all w-full sm:w-auto overflow-hidden group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio-zohair/Muhammad-Zohair-CV.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-muted hover:text-primary transition-all w-full sm:w-auto group shadow-sm"
            >
              Download CV / Resume PDF
              <Download className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://github.com/imzohair-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-muted hover:text-primary transition-all w-full sm:w-auto group shadow-sm"
            >
              GitHub Profile
              <GitBranch className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/zohair-sqa-automation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-muted hover:text-primary transition-all w-full sm:w-auto group shadow-sm"
            >
              LinkedIn Profile
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
