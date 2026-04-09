import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ProfessionalProjects } from "@/components/sections/ProfessionalProjects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Zohair",
    "jobTitle": "QA Automation Engineer",
    "url": "https://zohair-portfolio.com", // Replace with actual URL
    "sameAs": [
      "https://www.linkedin.com/in/zohair-sqa-automation/" // Replace if incorrect
    ],
    "email": "mailto:imzohair9@gmail.com",
    "telephone": "+92 313 7344227",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Techesthete"
    },
    "knowsAbout": ["QA Automation", "Cypress", "Playwright", "WebdriverIO", "Appium", "JavaScript", "TypeScript"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ProfessionalProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
