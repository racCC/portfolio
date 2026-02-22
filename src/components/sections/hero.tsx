"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, stackHighlights } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="work"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Status */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {personalInfo.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4"
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

          {/* Tech stack pills */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-2 pt-2"
          >
            <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground mr-1">
              Stack:
            </span>
            {stackHighlights.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            {personalInfo.location} — available for remote &amp; on-site
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />
    </section>
  );
}
