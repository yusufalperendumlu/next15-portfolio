"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Title from "@/components/Title";

const services = [
  {
    header: "UI/UX Design",
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
    substances: [
      "Mobile Design",
      "Mobile Hosting",
      "Mobile Maintenance",
      "Mobile Security",
    ],
  },
  {
    header: "Digital Marketing",
    substances: [
      "SEO",
      "PPC",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
  },
];

export default function ContentServices() {
  return (
    <div className="flex flex-col container relative items-center justify-center h-screen max-w-fit space-y-10">
      <Title subTitle="What I offer" title="Services" />
      <div className="flex flex-row items-center justify-center w-1/2 space-x-10">
        {services.map((service) => (
          <Card
            key={service.header}
            className="h-full w-[35vw] cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-linear"
          >
            <CardHeader className="flex items-center justify-center bg-slate-600 z-40 rounded-b-full">
              <CardTitle className="text-white">{service.header}</CardTitle>
            </CardHeader>
            <CardContent className="flex text-clip mt-8">
              <div className="flex flex-col items-center justify-start text-clip space-y-2">
                {service.substances.map((substance) => (
                  <CardDescription
                    key={substance}
                    className="flex w-full items-start gap-4 justify-start text-white text-sm font-semibold "
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                    {substance}
                  </CardDescription>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
