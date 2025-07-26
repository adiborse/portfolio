import React, { useState } from "react";
import { Code2, Palette, Database, Brain, Cloud, Smartphone, Globe, Shield } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = {
  "frontend": {
    icon: Palette,
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Figma" }
    ]
  },
  "backend": {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "Flask" },
      { name: "Spring Boot" },
      { name: "RESTful APIs" }
    ]
  },
  "database": {
    icon: Database,
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Google Cloud" },
      { name: "Firebase" },
      { name: "Docker" }
    ]
  },
  "mobile": {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "React Native" },
      { name: "Mobile UI/UX" }
    ]
  },
  "ai": {
    icon: Brain,
    title: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Computer Vision" },
      { name: "NLP" },
      { name: "YOLO" },
      { name: "OpenCV" }
    ]
  },
  "tools": {
    icon: Cloud,
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub" },
      { name: "VS Code" },
      { name: "Canva" },
      { name: "Blockchain" }
    ]
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="py-20 px-6 bg-gradient-vintage">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Expertise
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills refined through hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skills Categories Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 bg-vintage-cream/50 p-2 rounded-2xl">
            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-vintage-gold data-[state=active]:text-background transition-all duration-300"
              >
                <category.icon className="h-5 w-5" />
                <span className="font-cormorant text-xs hidden md:block">{category.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <VintageCard className="p-8" textured>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-vintage-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="font-cormorant text-muted-foreground">Skills and technologies I work with</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 font-cormorant text-sm border-vintage-gold/30 text-foreground bg-vintage-cream/30 hover:bg-vintage-gold/20 hover:border-vintage-gold transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </VintageCard>
            </TabsContent>
          ))}
        </Tabs>

        {/* Core Competencies */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Code2 className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">Full-Stack Development</h4>
            <p className="font-cormorant text-muted-foreground">End-to-end application development with modern technologies</p>
          </VintageCard>

          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Brain className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">AI/ML Engineering</h4>
            <p className="font-cormorant text-muted-foreground">Intelligent systems and machine learning solutions</p>
          </VintageCard>

          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Palette className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">UI/UX Design</h4>
            <p className="font-cormorant text-muted-foreground">User-centered design and intuitive interfaces</p>
          </VintageCard>
        </div>
      </div>
    </section>
  );
};