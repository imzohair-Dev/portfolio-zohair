"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Educational <span className="text-primary">Background</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-8 rounded-2xl shadow-sm text-center relative overflow-hidden group"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-xl text-primary font-medium mb-4">
                University of Lahore
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-muted-foreground font-medium">
                <Calendar size={18} />
                <span>2018 – 2022</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
