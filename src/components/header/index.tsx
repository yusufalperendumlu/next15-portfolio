"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { t } from "@/utils/translate";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Chart } from "@/components/Chart";

const Header = () => {
  return (
    <div className="relative max-h-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <div className="flex flex-col items-center space-y-4 justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-500 font-medium text-xl"
          >
            {t("hero.greeting", "en")}
          </motion.span>

          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-pink-500"
          >
            Yusuf Alperen Dumlu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="group">
              <span className="text-zinc-400 text-lg md:text-xl font-medium">
                Frontend Developer
              </span>

              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-full transition-all duration-300 ease-linear" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center gap-4 mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-700 hover:text-white text-white backdrop-blur-sm"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Uw3HvOcj9njLum5kw2rZMSDS9bUsmO28/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Download CV
          </Button>

          <Link href="/contact" className="flex items-start">
            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white"
            >
              Let&apos;s talk
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="z-10"
      >
        <div className="flex justify-center items-center space-x-8 mt-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-700" />

          <div className="flex gap-6">
            <Link
              href="https://github.com/yusufalperendumlu"
              target="_blank"
              className="group relative"
            >
              <FaGithub className="text-2xl text-zinc-400 hover:text-white transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-zinc-500">
                GitHub
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/yusuf-alperen-dumlu/"
              target="_blank"
              className="group relative"
            >
              <FaLinkedin className="text-2xl text-zinc-400 hover:text-[#0a66c2] transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-zinc-500">
                LinkedIn
              </span>
            </Link>

            <Link
              href="mailto:yusufalperendumlu@gmail.com"
              className="group relative"
            >
              <SiGmail className="text-2xl text-zinc-400 hover:text-red-500 transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-zinc-500">
                Gmail
              </span>
            </Link>
          </div>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>

        <div className="mt-8">
          <Chart />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
