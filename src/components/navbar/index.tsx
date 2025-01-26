"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { LuLaptopMinimal } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";

const navLinks = [
  {
    id: 1,
    label: "Home",
    icon: AiOutlineHome,
    className: "w-6 h-6 text-white",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    icon: GoPerson,
    className: "w-6 h-6 text-white",
    href: "/about",
  },
  {
    id: 3,
    label: "experience",
    icon: LuLaptopMinimal,
    className: "w-6 h-6 text-white",
    href: "/experience",
  },
  {
    id: 4,
    label: "Services",
    icon: RiServiceLine,
    className: "w-6 h-6 text-white",
    href: "/services",
  },
  {
    id: 5,
    label: "Contact",
    icon: RiMailSendLine,
    className: "w-6 h-6 text-white",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-fit fixed bottom-5 rounded-xl flex justify-between items-center z-50">
      <Menubar>
        <MenubarMenu>
          {navLinks.map((link) => {
            return (
              <MenubarTrigger
                key={link.id}
                className={`relative group ${
                  pathname === link.href && "bg-[#74747d73]"
                }`}
              >
                <Link href={link.href}>
                  <link.icon className={link.className} />
                  <span
                    className={` ${
                      pathname === link.href &&
                      "bg-white group-active:bg-white absolute bottom-0 rounded-b-lg left-3 w-4 h-[3px] "
                    } transition-all `}
                  ></span>
                </Link>
              </MenubarTrigger>
            );
          })}
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default Navbar;
