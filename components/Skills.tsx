"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Express.js", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker (basic)", "CI/CD concepts", "AWS (basic)"],
  },
  {
    category: "Concepts",
    items: ["REST APIs", "Distributed Systems", "Authentication (JWT)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-6 text-foreground">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
