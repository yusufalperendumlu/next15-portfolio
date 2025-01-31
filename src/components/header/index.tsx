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
    <div className="relative h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="flex flex-col items-center space-y-5 justify-center">
          <span className="text-white font-semibold text-xl">
            {t("hero.greeting", "en")}
          </span>
          <span className="text-white font-semibold text-5xl">
            Yusuf Alperen Dumlu
          </span>
          <span className="text-gray-500 font-normal text-lg">
            Frontend Developer
          </span>
        </div>
        <div className="flex justify-center space-x-5 mt-10">
          <Button
            variant="outline"
            size="lg"
            className="text-white"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Uw3HvOcj9njLum5kw2rZMSDS9bUsmO28/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Download CV
          </Button>
          <Link href="/contact" className="p-0 items-start flex">
            <Button variant="secondary" size="lg">
              Let&apos;s talk
            </Button>
          </Link>
        </div>
      </motion.div>
      {/* <div>
        <span className="text-white font-semibold text-2xl">Scroll Down</span>
      </div> */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="flex justify-center items-center space-x-5 mt-10 relative">
          <div className="relative flex items-center before:content-[''] before:block before:w-16 before:h-[2px] before:bg-white before:mr-3"></div>
          <Link href="https://github.com/yusufalperendumlu" target="_blank">
            <FaGithub className="text-white text-2xl hover:text-black  transition-all duration-200 ease-linear" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yusuf-alperen-dumlu/"
            target="_blank"
          >
            <FaLinkedin className="text-white text-2xl hover:text-[#0a66c2]  transition-all duration-200 ease-linear" />
          </Link>
          <Link href="mailto:yusufalperendumlu@gmail.com">
            <SiGmail className="text-white text-2xl hover:text-red-500  transition-all duration-200 ease-linear" />
          </Link>
          <div className="relative flex items-center after:content-[''] after:block after:w-16 after:h-[2px] after:bg-white after:ml-3"></div>
        </div>

        <div>
          <Chart />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
