"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { aboutContent, personalInfo } from "@/lib/data";
import { useScrollReveal } from "@/lib/hooks";

export function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr] lg:gap-16 items-start">
          {/* Left - Title */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">{aboutContent.intro}</p>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="text-xs font-normal"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="pt-4 border-t border-border/50"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
