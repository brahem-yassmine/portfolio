"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projectsData = [
  {
    title: "Smart Energy IoT System",
    description: "An IoT energy monitoring system that provides real-time visualization and analytics of energy consumption.",
    tech: ["ESP32", "IoT", "Mobile App", "Analytics"],
    highlights: [
      "Built hardware integration using ESP32 microcontrollers.",
      "Developed a companion mobile app for real-time data visualization."
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Parallel Computing Simulation",
    description: "A simulation tool comparing parallel and sequential processing performance for complex computational tasks.",
    tech: ["C/C++", "OpenMP", "MPI", "Performance Optimization"],
    highlights: [
      "Simulated parallel vs sequential processing logic.",
      "Focused on detailed performance comparison and algorithmic optimization."
    ],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-card-border rounded-2xl overflow-hidden group hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-muted-foreground">
                    <Link href={project.github} className="hover:text-foreground transition-colors" aria-label="GitHub Repository">
                      <FaGithub className="w-5 h-5" />
                    </Link>
                    <Link href={project.live} className="hover:text-foreground transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-accent mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                    >
                      {tech}
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
