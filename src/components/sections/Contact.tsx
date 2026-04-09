"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, GitBranch, Download } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Thanks for your message! This is a demo form.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "imzohair9@gmail.com",
      href: "mailto:imzohair9@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 313 7344227",
      href: "tel:+923137344227",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/imzohair-Dev",
      href: "https://github.com/imzohair-Dev",
    },
    {
      icon: <Download className="w-5 h-5" />,
      label: "Download CV",
      value: "Resume PDF",
      href: "/Muhammad-Zohair-CV.pdf",
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss QA automation? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    download={item.download ?? undefined}
                    target={item.download ? "_blank" : undefined}
                    rel={item.download ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col gap-6">
              <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
