"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { useScrollReveal } from "@/lib/hooks";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
        <CardHeader className="space-y-2 pb-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Problem & Solution */}
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Problem:</span>{" "}
              {project.problem}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Solution:</span>{" "}
              {project.solution}
            </p>
          </div>

          {/* Impact */}
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.demo && (
              <Button variant="default" size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See Production
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  See Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A selection of projects showcasing backend architecture, AI
            integration, and full-stack development.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
