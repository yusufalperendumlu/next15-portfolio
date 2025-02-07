"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Title from "@/components/Title";

const experience = [
  {
    title: "Frontend Developer",
    icon: "🎨",
    experience: [
      { programm: "HTML", level: "Advanced" },
      { programm: "CSS", level: "Advanced" },
      { programm: "JavaScript", level: "Advanced" },
      { programm: "React", level: "Advanced" },
      { programm: "Next.js", level: "Advanced" },
      { programm: "Tailwind CSS", level: "Advanced" },
      { programm: "Bootstrap", level: "Experienced" },
      { programm: "Git", level: "Experienced" },
      { programm: "GitHub", level: "Experienced" },
    ],
  },
  {
    title: "Backend Developer",
    icon: "⚙️",
    experience: [
      { programm: "Node.js", level: "Experienced" },
      { programm: "Express.js", level: "Experienced" },
      { programm: "MongoDB", level: "Experienced" },
      { programm: "PHP", level: "Experienced" },
      { programm: "MySQL", level: "Experienced" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ContentExperience() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          <Title subTitle="What skills I have" title="My Experience" />

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="h-full group hover:shadow-xl transition-all duration-300 
                  bg-gradient-to-b from-zinc-900 to-zinc-950 
                  border-zinc-800 hover:border-zinc-700 overflow-hidden"
                >
                  <CardHeader className="relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px]" />

                    <div className="relative flex items-center gap-4 z-10">
                      <span className="text-3xl">{exp.icon}</span>
                      <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                        {exp.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <motion.div
                      variants={containerVariants}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {exp.experience.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-full bg-purple-500/10 group-hover/item:bg-purple-500/20 transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-purple-500" />
                            </div>
                            <div className="space-y-1">
                              <CardDescription className="text-base font-medium text-zinc-200">
                                {item.programm}
                              </CardDescription>
                              <span
                                className={`text-sm ${
                                  item.level === "Advanced"
                                    ? "text-purple-400"
                                    : "text-zinc-400"
                                }`}
                              >
                                {item.level}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-2 pt-8"
          >
            <div className="h-1 w-16 rounded bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-zinc-500 text-sm">Scroll for more</span>
            <div className="h-1 w-16 rounded bg-gradient-to-l from-purple-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
