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

const services = [
  {
    header: "UI/UX Design",
    icon: "🎨",
    substances: [
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Usability Testing",
      "User Research",
    ],
  },
  {
    header: "Frontend Development",
    icon: "💻",
    substances: [
      "Web Design",
      "Web Hosting",
      "Web Maintenance",
      "Web Security",
      "Web Analytics",
      "Web Applications",
    ],
  },
  {
    header: "Mobile Development",
    icon: "📱",
    substances: [
      "Mobile Design",
      "Mobile Hosting",
      "Mobile Maintenance",
      "Mobile Security",
    ],
  },
  {
    header: "Digital Marketing",
    icon: "📈",
    substances: [
      "SEO",
      "PPC",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContentServices() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <Title subTitle="What I offer" title="Services" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {services.map((service) => (
            <motion.div key={service.header} variants={cardVariants}>
              <Card
                className="h-full group hover:shadow-2xl transition-all duration-300 
                bg-gradient-to-b from-zinc-900 to-zinc-950 
                border border-zinc-800 hover:border-zinc-700
                relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"
                />

                <CardHeader className="relative z-10">
                  <div
                    className="text-4xl mb-4 bg-gradient-to-r from-purple-500 to-pink-500 
                    text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.header}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pt-6">
                  <div className="space-y-3">
                    {service.substances.map((substance) => (
                      <CardDescription
                        key={substance}
                        className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-300 
                        transition-colors duration-300"
                      >
                        <CheckCircle
                          className="w-4 h-4 text-purple-500 group-hover:text-pink-500 
                          transition-colors duration-300"
                        />
                        <span className="text-sm font-medium">{substance}</span>
                      </CardDescription>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
