"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "Axia Solutions",
    date: "Feb 2026 – May 2026",
    description: [
      "Developed a dynamic workflow management system with automation features.",
      "Built customizable forms using Node.js and Next.js.",
      "Implemented a scalable multi-tenant architecture using MongoDB and Docker."
    ]
  },
  {
    role: "Mobile Developer Intern",
    company: "Consultim-IT",
    date: "Aug 2025",
    description: [
      "Built a mobile app for internship management using Flutter and Firebase.",
      "Implemented secure authentication and real-time data synchronization."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Axia Solutions",
    date: "July 2024",
    description: [
      "Developed a web application for laboratory-client communication.",
      "Built RESTful APIs and implemented secure authentication flows."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                  <span className="text-sm font-semibold text-accent">{job.date}</span>
                </div>

                <div className="md:col-span-4 relative pb-8 md:pb-0">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[2.35rem] top-1.5 w-3 h-3 bg-accent rounded-full border-2 border-background z-10" />

                  {/* Timeline line */}
                  {index !== experienceData.length - 1 && (
                    <div className="hidden md:block absolute -left-[2.05rem] top-4 bottom-[-3rem] w-0.5 bg-border" />
                  )}

                  <div className="bg-card border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-muted-foreground hidden sm:block" />
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    </div>
                    <div className="text-muted-foreground font-medium mb-4">
                      {job.company}
                    </div>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
