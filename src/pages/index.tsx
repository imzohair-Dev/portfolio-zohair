import type { NextPage } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Home: NextPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Zohair",
    "jobTitle": "QA Automation Engineer",
    "url": "https://zohair-portfolio.com",
    "sameAs": [
      "https://www.linkedin.com/in/zohair-sqa-automation/"
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
      <Head>
        <title>Muhammad Zohair | QA Automation Engineer</title>
        <meta name="description" content="Portfolio of Muhammad Zohair, a QA Automation Engineer with 3+ years of experience in JavaScript, TypeScript, Cypress, Playwright, and Appium." />
        <meta name="keywords" content="QA Automation Engineer, SQA Engineer Pakistan, Cypress Automation Expert, Playwright Testing Engineer, Software Tester Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className={`min-h-full flex flex-col bg-background text-foreground antialiased transition-colors duration-300 ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </div>
    </>
  );
};

export default Home;