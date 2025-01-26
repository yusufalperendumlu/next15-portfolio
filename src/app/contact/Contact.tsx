"use client";

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
import Link from "next/link";

const socialContact = [
  {
    icon: <IoMailOutline className="w-8 h-8 text-white" />,
    link: "mailto:yusufalperendumlu@gmail.com",
    text: "Email",
    desc: "yusufalperendumlu@gmail.com",
  },
  {
    icon: <IoLogoLinkedin className="w-8 h-8 text-white" />,
    link: "https://www.linkedin.com/messaging/compose/?recipient=in/yusufalperendumlu",
    text: "Linkedin",
    desc: "in/yusufalperendumlu",
  },
  {
    icon: <BsTwitterX className="w-8 h-8 text-white" />,
    link: "https://www.x.com",
    text: "X",
    desc: "alperenndumlu",
  },
];

export default function ContentContact() {
  return (
    <div className="flex flex-col container relative items-center justify-center h-screen  space-y-10">
      <Title subTitle="Get in touch" title="Contact me" />
      <div className="grid grid-cols-3 w-full">
        <div className="flex  flex-col items-center justify-center  space-y-5">
          {socialContact.map((social) => {
            return (
              <Card
                key={social.text}
                className="w-72 flex flex-col items-center justify-center text-center transition-all duration-200 ease-linear "
              >
                <CardHeader>{social.icon}</CardHeader>
                <CardContent className="p-1">
                  <CardTitle className="text-lg font-bold text-white">
                    {social.text}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {social.desc}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-white">
                    <Link href={social.link}>Send a message</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="col-span-2">
          <form className="w-full p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 text-white bg-transparent border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-white bg-transparent border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full h-40 px-4 py-2 text-white bg-transparent border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-1/3 px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
