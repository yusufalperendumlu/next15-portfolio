"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Title from "@/components/Title";
import { IoMailOutline, IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

const socialContact = [
  {
    icon: <IoMailOutline className="w-8 h-8" />,
    link: "mailto:yusufalperendumlu@gmail.com",
    text: "Email",
    desc: "yusufalperendumlu@gmail.com",
    target: "_blank",
    color: "hover:text-purple-500",
  },
  {
    icon: <IoLogoLinkedin className="w-8 h-8" />,
    link: "https://www.linkedin.com/messaging/compose/?recipient=in/yusufalperendumlu",
    text: "Linkedin",
    desc: "in/yusufalperendumlu",
    target: "_blank",
    color: "hover:text-blue-500",
  },
  {
    icon: <BsTwitterX className="w-8 h-8" />,
    link: "https://www.x.com",
    text: "X",
    desc: "alperenndumlu",
    target: "_blank",
    color: "hover:text-zinc-400",
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
  },
};

export default function ContentContact() {
  return (
    <section className="min-h-screen py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          <Title subTitle="Get in touch" title="Contact me" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <motion.div variants={containerVariants} className="space-y-6">
              {socialContact.map((social) => (
                <motion.div key={social.text} variants={itemVariants}>
                  <Card
                    className="group hover:shadow-xl transition-all duration-300 
                    bg-gradient-to-b from-zinc-900 to-zinc-950 
                    border-zinc-800 hover:border-zinc-700"
                  >
                    <CardHeader>
                      <div
                        className={`text-zinc-400 transition-colors duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg font-bold text-white mb-1">
                        {social.text}
                      </CardTitle>
                      <CardDescription className="text-sm text-zinc-400">
                        {social.desc}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Link href={social.link} target={social.target}>
                        <Button
                          variant="ghost"
                          className="text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        >
                          Send a message
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card
                className="bg-gradient-to-b from-zinc-900 to-zinc-950 
                border-zinc-800 p-6"
              >
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700
                        text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500
                        transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700
                        text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500
                        transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700
                        text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500
                        transition-colors duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500
                        text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
