"use client";

import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNodejs, TbBrandVscode } from "react-icons/tb";
import { SiTailwindcss, SiSupabase } from "react-icons/si";

interface IQualification {
  title: string;
  data: { company: string; position: string; year: string }[];
}
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Bhagyashree Walanj",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+49 1624199690",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shree.6490@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 6 April, 1990",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor Of Technology In Information Technology",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Guerickestr 11, 10587, Berlin",
  },
];

const qualificationData: IQualification[] = [
  {
    title: "education",
    data: [
      {
        company: "SNDT University, Mumbai, India",
        position:
          "Bachelor Of Technology (B.Tech) expertise in Information Technology",
        year: "2007-2011",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "myToys DE, Berlin, Germany",
        position: "Frontend Engineer",
        year: "2022-23",
      },
      {
        company: "Autoplant Systems Pvt Ltd, Mumbai, India",
        position: "Senior Frontend Developer",
        year: "2019-21",
      },
      {
        company: "Novire Technology, Mumbai, India",
        position: "Senior Software Developer",
        year: "2013-19",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML5" },
      { name: "CSS3, Tailwind CSS, ShadcnUI, SASS" },
      { name: "ReactJS, NextJS, Hooks, Redux" },
      { name: "ES6, JavaScript, TypeScript" },
      { name: "Supabase, MongoDB" },
      { name: "Jest, Enzyme" },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgpath: (
          <FaHtml5
            size={50}
            className="text-primary cursor-pointer"
            aria-label="HTML5"
          />
        ),
      },
      {
        imgpath: (
          <IoLogoJavascript size={50} className="text-primary cursor-pointer" />
        ),
      },
      {
        imgpath: (
          <TbBrandNodejs size={50} className="text-primary cursor-pointer" />
        ),
      },
      {
        imgpath: (
          <SiTailwindcss size={50} className="text-primary cursor-pointer" />
        ),
      },
      {
        imgpath: (
          <SiSupabase size={50} className="text-primary cursor-pointer" />
        ),
      },
      {
        imgpath: (
          <TbBrandVscode size={50} className="text-primary cursor-pointer" />
        ),
      },
      {
        imgpath: <FaGithub size={50} className="text-primary" />,
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  const experienceData = getData(qualificationData, "experience");
  const educationData = getData(qualificationData, "education");
  const skillsData = getData(skillData, "skills");
  const toolsData = getData(skillData, "tools");
  const experienceTitle = experienceData ? experienceData.title : "";
  const educationTitle = educationData ? educationData.title : "";

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        {/* image */}
        <div className="hidden xl:flex flex-1 relative">
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative ml-40"
            imgSrc="/hero/developer3.svg"
          />
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualification"
              >
                Qualification
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <div className="text-lg mt-13 xl:mt-8 ">
              {/* personal  */}
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    Unmatched service quality for over 8 years{" "}
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    I specialize in Reactjs intuitive website with cutting edge
                    technology, delivering dynamic and engaging user experience.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((info, index) => {
                      return (
                        <div
                          className="flex items.center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{info.icon}</div>
                          <div>{info.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* languages */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border w-[500px]"></div>
                    <div>English, Hindi</div>
                  </div>
                </div>
              </TabsContent>
              {/* Qualification  */}
              <TabsContent value="qualification">
                <div className="ml-9">
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    My Awesome Journey
                  </h3>
                  {/* Experience and education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* Experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {experienceTitle}
                        </h4>
                      </div>
                      {/* lists */}
                      <div className="flex flex-col gap-y-8">
                        {experienceData?.data.map(
                          (item: any, index: number) => {
                            const { company, position, year } = item;
                            return (
                              <div key={index} className="flex gap-x-8 group ">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {position}
                                  </div>
                                  <div className="text-base font-medium">
                                    {year}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {educationTitle}
                        </h4>
                      </div>
                      {/* lists */}
                      <div className="flex flex-col gap-y-8">
                        {educationData?.data.map((item: any, index: number) => {
                          const { company, position, year } = item;
                          return (
                            <div key={index} className="flex gap-x-8 group ">
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {position}
                                </div>
                                <div className="text-base font-medium">
                                  {year}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* skills  */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">Tools Expertise</h3>
                  <div className="mb-16">
                    <h4 className="h4 text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-border border-b mb-4"></div>
                    {/* skills list */}
                    <div>
                      {skillsData.data.map((item: any, index: number) => {
                        const { name } = item;
                        return (
                          <div
                            key={index}
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                          >
                            <div className="font-medium">{name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* tools */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 xl:text-left">
                      Tools
                    </h3>
                    <div className="border-border border-b mb-4"></div>
                    {/* tool list  */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {toolsData.data.map((item: any, index: number) => {
                        const { imgpath } = item;
                        return <div key={index}>{imgpath}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
