"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaAward } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import Link from "next/link";
import Title from "@/components/Title";

const aboutCardData = [
  {
    id: 1,
    icon: <FaAward className="w-8 h-8" />,
    title: "Experience",
    description: "3+ years of experience in web development.",
  },
  {
    id: 2,
    icon: <MdOutlinePeopleOutline className="w-8 h-8" />,
    title: "Client",
    description: "I have worked with many clients.",
  },
  {
    id: 3,
    icon: <GoProjectRoadmap className="w-8 h-8" />,
    title: "Projects",
    description: "I have completed many projects.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ContentAbout() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          <Title subTitle="Get to know" title="About me" />

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aboutCardData.map((data) => (
              <motion.div key={data.id} variants={itemVariants}>
                <Card
                  className="h-full group hover:shadow-xl transition-all duration-300 
                  bg-gradient-to-b from-zinc-900 to-zinc-950 
                  border-zinc-800 hover:border-zinc-700"
                >
                  <CardHeader className="flex flex-col items-center space-y-4">
                    <div
                      className="p-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                      group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"
                    >
                      <div className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300">
                        {data.icon}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <CardTitle className="text-xl font-bold text-white">
                      {data.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {data.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-lg"
              >
                Hello everyone! I am Yusuf Alperen, I am a senior Software
                Engineering student and I am training myself in the field of
                Full Stack development. Although I have mastered both frontend
                and backend technologies, I have done more projects especially
                on frontend development.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-lg"
              >
                I have a determined and hardworking nature, and I see every
                challenge as a learning opportunity. Thanks to my ability to
                adapt quickly to new technologies and my attention to detail, I
                focus on producing quality and sustainable solutions in my
                projects.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center pt-6"
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium
                    bg-zinc-900 text-zinc-300 border border-zinc-800
                    hover:border-purple-500 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 
                  hover:opacity-90 transition-opacity text-white px-8"
              >
                Let&apos;s talk
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
