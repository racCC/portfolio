"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Workflow
} from "lucide-react";

const skillTabs = [
  { key: "backend" as const, label: "Backend", icon: Server },
  { key: "frontend" as const, label: "Frontend", icon: Monitor },
  { key: "cloud" as const, label: "Cloud & DevOps", icon: Cloud },
  { key: "ai" as const, label: "AI & Data", icon: Brain },
];

const SkillBadge = memo(function SkillBadge({ 
  skill, 
  index 
}: { 
  skill: string; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
    >
      <Badge
        variant="outline"
        className="px-4 py-2 text-sm font-normal bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
      >
        {skill}
      </Badge>
    </motion.div>
  );
});

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
            Technologies and tools I use to build scalable, production-ready
            applications.
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="mb-10 flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              {skillTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm px-5 py-3 text-sm font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md hover:border-border"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillTabs.map((tab) => (
              <TabsContent
                key={tab.key}
                value={tab.key}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                      {skills[tab.key].items.map((skill, index) => (
                        <SkillBadge key={skill} skill={skill} index={index} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Programming Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Code2 className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {skills.languages.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.languages.items.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {lang}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Databases & Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Databases */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Database className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {skills.databases.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.databases.items.map((db, index) => (
                  <motion.div
                    key={db}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {db}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Methodologies */}
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Workflow className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {skills.methodologies.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.methodologies.items.map((method, index) => (
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {method}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Version Control */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="mt-6"
        >
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GitBranch className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {skills.versionControl.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.versionControl.items.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}