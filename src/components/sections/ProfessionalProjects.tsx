"use client";

import { motion } from "framer-motion";

export function ProfessionalProjects() {
  const professionalProjects = [
    {
      title: "ElphaSecure (Website)",
      description: "Contributing to a data security and protection platform, focusing on secure data access and encryption workflows. Designed and developed automated test scripts using TypeScript and Playwright, ensuring end-to-end UI and API coverage. Performed API testing using Postman and Newman, validating backend endpoints for data consistency and response accuracy. Created and maintained manual test cases in Testomate, with defect tracking and reporting managed through Jira. Collaborated with a team including ex-Microsoft and ex-Disney engineers, gaining advanced insights into scalable automation practices. Managed GitLab repositories, created pull requests, and monitored GitHub Actions pipelines for continuous integration and deployment. Participated in daily scrum meetings and weekly status reviews, ensuring consistent progress and alignment with agile milestones.",
      tags: ["Automation Project", "Current"],
    },
    {
      title: "AI Response Validation Platform (Website)",
      description: "Involved in testing an AI-based web application that generated responses based on user prompts. Designed automated test cases in Cypress to validate prompt-response accuracy, output consistency, and latency metrics. Conducted manual and API testing using Postman, ensuring backend model endpoints functioned reliably. Collaborated with developers and data scientists to identify inconsistencies in AI output behavior and improve model validation flows. Implemented reporting dashboards for test results and issue tracking using Google Sheets and Jira.",
      tags: ["Automation Project"],
    },
    {
      title: "CMS Dashboard (Website)",
      description: "Automated web testing using JavaScript and Cypress, with detailed test plans maintained in Google Sheets. Integrated Cypress Cloud with Slack for real-time notification of test runs and failures. Participated in weekly review meetings, sharing progress and addressing blockers in sprints.",
      tags: ["Automation Project", "USA Part-time"],
    },
    {
      title: "Modus Pro (Mobile App - Android/iOS)",
      description: "Developed automation scripts using JavaScript, WebdriverIO, and Appium for both Android and iOS testing. Logged test results and tracked issues through Azure DevOps. Conducted compatibility tests via BrowserStack and managed pull requests on GitHub. Practiced Agile methodology with daily standups and sprint-based delivery cycles.",
      tags: ["Automation Project"],
    },
    {
      title: "Planera (Website)",
      description: "Created automated test cases using JavaScript and Cypress. Performed API automation using Cypress and manual API validation via Postman. Managed test scripts and version control using Bitbucket. Reported defects through Jira and documented test results in Google Sheets.",
      tags: ["Automation Project"],
    },
    {
      title: "Tenant Connect (Mobile App - Android/iOS)",
      description: "Conducted functional and regression testing on live devices and BrowserStack. Prepared detailed test cases, maintained bug sheets, and participated in sprint planning.",
      tags: ["Manual Project"],
    },
    {
      title: "Scan123 (Website)",
      description: "Executed manual testing, including test case design, planning, and bug reporting. Ensured UI/UX alignment with Figma designs and verified functional correctness after every release.",
      tags: ["Manual Project"],
    },
    {
      title: "Herp Exchange (Website)",
      description: "Performed manual testing focused on core functionalities and UI responsiveness. Maintained bug reports and collaborated with developers for timely fixes.",
      tags: ["Manual Project"],
    },
  ];

  return (
    <section id="professional-projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional work in test automation, quality assurance, and project collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {professionalProjects.map((project, index) => (
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
                </div>
                <p className="text-muted-foreground mt-2 mb-6 flex-grow text-sm leading-relaxed">
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