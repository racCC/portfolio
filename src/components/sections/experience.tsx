"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";
import { useScrollReveal } from "@/lib/hooks";

function ExperienceItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-3 -bottom-3 w-px bg-border last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
        <Briefcase className="h-3 w-3 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.company} · {item.location}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function EducationItem({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-3 -bottom-3 w-px bg-border last:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
        <GraduationCap className="h-3 w-3 text-muted-foreground" />
      </div>

      <div>
        <h3 className="font-semibold">{item.degree}</h3>
        <p className="text-sm text-muted-foreground">{item.institution}</p>
        <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Professional experience and education background.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Work Experience
            </h3>
            <div>
              {experience.map((item, index) => (
                <ExperienceItem key={item.company} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Education
            </h3>
            <div>
              {education.map((item, index) => (
                <EducationItem key={item.degree} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
