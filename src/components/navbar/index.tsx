"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LuLaptopMinimal } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { t } from "@/utils/translate";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  {
    id: 1,
    label: t("nav.home", "en"),
    icon: AiOutlineHome,
    className: "w-6 h-6 text-white",
    href: "/",
  },
  {
    id: 2,
    label: t("nav.about", "en"),
    icon: GoPerson,
    className: "w-6 h-6 text-white",
    href: "/about",
  },
  {
    id: 3,
    label: t("nav.experience", "en"),
    icon: LuLaptopMinimal,
    className: "w-6 h-6 text-white",
    href: "/experience",
  },
  {
    id: 4,
    label: t("nav.services", "en"),
    icon: RiServiceLine,
    className: "w-6 h-6 text-white",
    href: "/services",
  },
  {
    id: 5,
    label: t("nav.contact", "en"),
    icon: RiMailSendLine,
    className: "w-6 h-6 text-white",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenHeight = window.innerHeight;
      const mouseY = e.clientY;

      if (mouseY >= screenHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="w-fit fixed bottom-5  rounded-xl flex justify-between items-center z-50"
        >
          <Menubar className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
            <MenubarMenu>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <MenubarTrigger
                    key={link.id}
                    className={`relative group transition-all duration-300 ${
                      isActive ? "bg-zinc-800/80" : "hover:bg-zinc-800/50"
                    }`}
                  >
                    <Link
                      href={link.href}
                      className="relative p-2 flex flex-col items-center gap-1"
                    >
                      <link.icon
                        className={`${
                          link.className
                        } transition-all duration-300 ${
                          isActive ? "text-purple-500" : "text-zinc-400"
                        }`}
                      />

                      {/* Tooltip */}
                      <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all duration-200 text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                        {link.label}
                      </span>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
                        />
                      )}
                    </Link>
                  </MenubarTrigger>
                );
              })}
            </MenubarMenu>
          </Menubar>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
