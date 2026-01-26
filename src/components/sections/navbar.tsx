"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn,FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, personalInfo } from "@/lib/data";
import { useActiveSection, useMounted } from "@/lib/hooks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const mounted = useMounted();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-1 text-lg font-semibold tracking-tight group"
>
  <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
    {personalInfo.name.split(" ")[0]}
  </span>

  <span className="font-normal text-muted-foreground transition-opacity duration-300 group-hover:opacity-70">
    {personalInfo.name.split(" ")[1]}
  </span>
</Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 text-sm transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

         {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              
            </a>
          </Button>
        </div>

       {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          {mounted && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="flex flex-col gap-6 pt-8">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-muted-foreground"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={personalInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FaGithub className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={personalInfo.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="X (Twitter)"
                        >
                          <FaXTwitter className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <Button variant="default" asChild>
                      <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
          {!mounted && (
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
