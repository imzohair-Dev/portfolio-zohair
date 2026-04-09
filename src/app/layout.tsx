import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammad Zohair | QA Automation Engineer",
  description: "Portfolio of Muhammad Zohair, a QA Automation Engineer with 3+ years of experience in JavaScript, TypeScript, Cypress, Playwright, and Appium.",
  keywords: ["QA Automation Engineer", "SQA Engineer Pakistan", "Cypress Automation Expert", "Playwright Testing Engineer", "Software Tester Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} font-sans`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
