"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, stackHighlights, focusAreas } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="work"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr,380px] lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Open to opportunities
              </div>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl"
            >
              {personalInfo.headline}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View My Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                {/* Location */}
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{personalInfo.location}</p>
                    <p className="text-muted-foreground text-xs">
                      Available for remote & on-site
                    </p>
                  </div>
                </div>

                {/* Stack */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stackHighlights.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Focus Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <Badge
                        key={area}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
    </section>
  );
}
