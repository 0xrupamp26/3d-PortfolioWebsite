import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BoxReveal, BlurIn } from "../reveal-animations";
import { SkillName, getSkill, getSkills } from "@/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const categories = [
  { id: 'blockchain', name: 'Blockchain', color: 'from-purple-500 to-indigo-600' },
  { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
  { id: 'devops', name: 'DevOps & Cloud', color: 'from-amber-500 to-orange-500' },
  { id: 'tools', name: 'Tools', color: 'from-rose-500 to-pink-500' },
];

const skillsByCategory: Record<string, SkillName[]> = {
  blockchain: [
    SkillName.RUST,
    SkillName.SOLIDITY,
    SkillName.ETHEREUM,
    SkillName.SOLANA,
    SkillName.COSMWASM,
    SkillName.APTOS,
    SkillName.SUBSTRATE,
    SkillName.ANCHOR,
    SkillName.PYTH,
    SkillName.CHAINLINK,
  ],
  frontend: [
    SkillName.REACT,
    SkillName.NEXTJS,
    SkillName.TYPESCRIPT,
    SkillName.JAVASCRIPT,
    SkillName.TAILWIND,
    SkillName.HTML,
    SkillName.CSS,
  ],
  backend: [
    SkillName.NODEJS,
    SkillName.PYTHON,
    SkillName.GO,
    SkillName.EXPRESS,
    SkillName.NESTJS,
    SkillName.POSTGRESQL,
    SkillName.MONGODB,
  ],
  devops: [
    SkillName.DOCKER,
    SkillName.KUBERNETES,
    SkillName.AWS,
    SkillName.GCP,
    SkillName.TERRAFORM,
    SkillName.GITHUB_ACTIONS,
  ],
  tools: [
    SkillName.GIT,
    SkillName.GITHUB,
    SkillName.VSCODE,
    SkillName.FIGMA,
    SkillName.POSTMAN,
    SkillName.HARDHAT,
    SkillName.FOUNDRY,
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedSkill, setSelectedSkill] = useState<SkillName | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (selectedSkill) {
      const skill = getSkill(selectedSkill);
      if (skill) {
        setIsTyping(true);
        setTypedText('');
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < skill.shortDescription.length) {
            setTypedText(prev => prev + skill.shortDescription[i]);
            i++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 20);
        return () => clearInterval(typingInterval);
      }
    }
  }, [selectedSkill]);

  const handleSkillHover = (skillName: SkillName) => {
    setSelectedSkill(skillName);
  };

  return (
    <section id="skills" className="w-full min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <BlurIn delay={0.3}>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            My Skills & Expertise
          </h2>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
            Here are the technologies and tools I work with. Hover over each skill to learn more.
          </p>
        </BlurIn>

        <div className="max-w-6xl mx-auto">
          <Tabs 
            defaultValue={categories[0].id} 
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full h-auto flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id 
                        ? `bg-gradient-to-r ${category.color} text-white` 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skillsByCategory[activeCategory].map((skillName) => {
                const skill = getSkill(skillName);
                if (!skill) return null;
                
                return (
                  <TooltipProvider key={skill.id} delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className={cn(
                            "p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center h-32",
                            "hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                          )}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onHoverStart={() => handleSkillHover(skillName)}
                        >
                          <div className="text-4xl mb-2" dangerouslySetInnerHTML={{ __html: skill.icon }} />
                          <span className="text-sm font-medium text-center text-slate-800 dark:text-slate-200 mt-2">
                            {skill.label}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs p-4">
                        <h4 className="font-bold text-slate-900 dark:text-white">{skill.label}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          {skill.shortDescription}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </Tabs>

          <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              {selectedSkill ? getSkill(selectedSkill)?.label : 'Hover over a skill'}
            </h3>
            <div className="h-24">
              {selectedSkill ? (
                <p className="text-slate-600 dark:text-slate-300">
                  {typedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
              ) : (
                <p className="text-slate-400 dark:text-slate-500">
                  Hover over any skill to see more details about my experience with it.
                </p>
              )}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">PROFICIENCY</h4>
              {selectedSkill && (
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                    style={{ 
                      width: `${getSkill(selectedSkill)?.proficiency || 80}%`,
                      transition: 'width 0.5s ease-in-out'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
