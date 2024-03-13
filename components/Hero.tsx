"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiReactjsFill,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 light:bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-10">
          {/* text */}
          <div className="flex max-w-[900px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Frontend Developer
            </div>
            <h1 className="h1">
              Hello, <br></br>
              <TypeAnimation
                sequence={[
                  "I'm Bhagyashree Walanj",
                  2000,
                  "I'm Frontend Engineer",
                  2000,
                  "Nice to meet you!",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights of myself, my vocational journey,
              and what I engaged in professionally.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials  */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            <Badge
              containerStyles="absolute top-[9%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={8}
              endCountText="+"
              badgeText="Years Of Experience"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText=""
              badgeText="Finished Projects"
            />
            {/* <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="k"
              badgeText="Happy Clients"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark dark:bg-contain w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer3.svg"
            />
          </div>
        </div>
        {/* icon  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
