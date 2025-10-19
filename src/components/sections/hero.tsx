import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiLeetcode, SiMedium } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full min-h-screen")}>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-[2]">
            {!isLoading && (
              <div className="space-y-6">
                <BlurIn delay={0.5}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                    Hi, I'm <span className="text-primary">Rupam Karmakar</span>
                  </h1>
                </BlurIn>
                
                <BlurIn delay={0.7}>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-slate-300">
                    {config.currentRole}
                  </h2>
                </BlurIn>

                <BlurIn delay={0.9}>
                  <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                    I build secure and scalable web applications with modern technologies. 
                    Passionate about blockchain, cybersecurity, and creating exceptional digital experiences.
                  </p>
                </BlurIn>

                <BlurIn delay={1.1}>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button asChild size="lg" className="gap-2 group">
                      <Link href="#contact">
                        Get in Touch
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="gap-2 group"
                    >
                      <Link
                        href={config.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                        <File className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </BlurIn>

                <BlurIn delay={1.3}>
                  <div className="flex items-center space-x-2 mt-8 text-slate-500 dark:text-slate-400">
                    <span>Connect with me:</span>
                    <div className="flex space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                              <Link
                                href={config.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                              >
                                <SiGithub className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                              <Link
                                href={config.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                              >
                                <SiLinkedin className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                              <Link
                                href={config.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                              >
                                <FaXTwitter className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Twitter</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                              <Link
                                href={config.social.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                              >
                                <SiLeetcode className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>LeetCode</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                            >
                              <Link
                                href={config.social.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Medium"
                              >
                                <SiMedium className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Medium</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </BlurIn>
              </div>
            )}
          </div>
          
          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-full max-w-xl aspect-square">
              {/* 3D Model or Animated Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-3xl blur-3xl animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gradient-to-br from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20 rounded-2xl backdrop-blur-sm border border-slate-200/20 shadow-2xl flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-600 text-lg font-medium">
                    Interactive 3D Element
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollDownIcon />
      </div>
    </section>
  );
};
export default HeroSection;
