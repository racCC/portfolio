"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/lib/hooks";
import { skills } from "@/lib/data";
import {
  Server,
  Cloud,
  Monitor,
  Brain,
  Code2,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";

const skillCategories = [
  { key: "backend" as const, icon: Server },
  { key: "frontend" as const, icon: Monitor },
  { key: "cloud" as const, icon: Cloud },
  { key: "ai" as const, icon: Brain },
  { key: "languages" as const, icon: Code2 },
  { key: "databases" as const, icon: Database },
  { key: "methodologies" as const, icon: Workflow },
  { key: "versionControl" as const, icon: GitBranch },
];

export function Skills() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, production-ready applications.
          </p>
        </motion.div>

        {/* Grid of category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map(({ key, icon: Icon }, i) => {
            const category = skills[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Card className="rounded-xl border border-border/50 bg-card h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {category.label}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs font-normal hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
