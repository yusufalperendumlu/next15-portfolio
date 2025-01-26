"use client";

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

import Title from "@/components/Title";

const aboutCardData = [
  {
    id: 1,
    icon: <FaAward className="w-8 h-8 text-white text-2xl" />,
    title: "Experience",
    description: "3+ years of experience in web development.",
  },
  {
    id: 2,
    icon: <MdOutlinePeopleOutline className="w-8 h-8 text-white text-5xl" />,
    title: "Client",
    description: "I have worked with many clients.",
  },
  {
    id: 3,
    icon: <GoProjectRoadmap className="w-8 h-8 text-white text-2xl" />,
    title: "Projects",
    description: "I have completed many projects.",
  },
];

export default function ContentAbout() {
  return (
    <>
      <div className="flex flex-col container relative items-center justify-center h-screen max-w-fit space-y-10">
        <Title subTitle="Get to know" title="About me" />
        <div className="flex flex-col items-center justify-center w-1/2 space-y-10">
          <div className="flex flex-row items-center justify-between w-full space-x-10">
            {aboutCardData.map((data) => (
              <div key={data.id} className="flex items-center justify-center">
                <Card className=" h-48 w-60 flex flex-col items-center justify-center text-center ">
                  <CardHeader>
                    <span>{data.icon}</span>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center text-clip space-y-2">
                    <CardTitle className="flex items-center justify-center text-white font-semibold text-lg">
                      {data.title}
                    </CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center text-white space-y-4">
            <span className="text-gray-100 font-semibold text-base">
              Hello everyone! I am Yusuf Alperen, I am a senior Software
              Engineering student and I am training myself in the field of Full
              Stack development. Although I have mastered both frontend and
              backend technologies, I have done more projects especially on
              frontend development. I like to create user-friendly and aesthetic
              interfaces and I am constantly improving myself by working with
              modern web technologies.
            </span>
            <span className="text-gray-100 font-semibold text-base mt-4">
              I have a determined and hardworking nature, and I see every
              challenge as a learning opportunity. Thanks to my ability to adapt
              quickly to new technologies and my attention to detail, I focus on
              producing quality and sustainable solutions in my projects. My
              goal is to leave a solid footprint in the software world and to
              grow every day.
            </span>
          </div>
          <div className="flex justify-start space-x-5 mt-10 w-full">
            <Button variant="secondary" size="lg">
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
