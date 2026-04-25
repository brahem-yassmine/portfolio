"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Globe2, Server } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend",
      desc: "Architecting scalable APIs and microservices",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Core Stack",
      desc: "Java, Python, SQL, and modern frameworks",
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "DevOps",
      desc: "Git, Docker, and CI/CD integration",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Languages",
      desc: "Bilingual in English and French",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a Software Engineer focused on building robust, scalable backend architectures. My expertise lies in designing distributed systems and implementing effective DevOps practices that streamline the development lifecycle.
            </p>
            <p>
              With strong foundations in Java, Python, and SQL, combined with hands-on experience using modern tools like Git and Docker, I thrive in environments that prioritize performance, clean code, and system reliability.
            </p>
            <div className="pt-6 mt-6 border-t border-border">
              <h3 className="text-foreground font-semibold mb-2 text-lg">Education</h3>
              <p className="font-medium text-foreground">Master’s in Software and Distributed Systems</p>
              <p>Université Côte d’Azur (Starting September 2026)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-card border border-card-border rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
