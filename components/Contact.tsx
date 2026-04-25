"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I am always interested in discussing new projects, backend architecture, or potential collaborations. My inbox is always open—whether you have a question or just want to connect, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:brahemyassmine26@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors font-medium shadow-sm"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yassmine-braham-346b8b348-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-card-border text-foreground hover:text-accent hover:border-accent/50 rounded-full transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/brahem-yassmine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-card-border text-foreground hover:text-accent hover:border-accent/50 rounded-full transition-all shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
