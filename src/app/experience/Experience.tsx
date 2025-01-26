"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/Title";

const experience = [
  {
    title: "Frontend Developer",
    experience: [
      {
        programm: "HTML",
        level: "Advanced",
      },
      {
        programm: "CSS",
        level: "Advanced",
      },
      {
        programm: "JavaScript",
        level: "Advanced",
      },
      {
        programm: "React",
        level: "Advanced",
      },
      {
        programm: "Next.js",
        level: "Advanced",
      },
      {
        programm: "Tailwind CSS",
        level: "Advanced",
      },
      {
        programm: "Bootstrap",
        level: "Experienced",
      },
      {
        programm: "Git",
        level: "Experienced",
      },
      {
        programm: "GitHub",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Developer",
    experience: [
      {
        programm: "Node.js",
        level: "Experienced",
      },
      {
        programm: "Express.js",
        level: "Experienced",
      },
      {
        programm: "MongoDB",
        level: "Experienced",
      },
      {
        programm: "PHP",
        level: "Experienced",
      },
      {
        programm: "MySQL",
        level: "Experienced",
      },
    ],
  },
];

export default function ContentExperience() {
  return (
    <div className="flex flex-col container relative items-center justify-center h-screen max-w-fit space-y-10">
      <Title subTitle="What skills I have" title="My Experience" />
      <div className="grid grid-cols-2 gap-4">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="w-[35vw] h-full cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-linear"
          >
            <CardHeader className="flex items-center justify-center">
              <CardTitle className="text-white text-2xl font-semibold">
                {exp.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {exp.experience.map((item, index) => (
                  <div key={index} className="flex flex-col ">
                    <div className="flex items-center justify-start ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        color="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                      </svg>
                      <CardDescription className="text-lg font-semibold ml-4 text-white">
                        {item.programm}
                      </CardDescription>
                    </div>
                    <span className="text-gray-400 ml-8">{item.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
