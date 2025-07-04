"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardHeader } from "./ui/card";
import { FaGithub } from "react-icons/fa";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

interface IProjectCard {
  project: any;
}
const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image  */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40  xl:dark:bg-work_project_bg_dark 
        xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className=" absolute bottom-10 h-50 shadow-2xl"
            src={project.image}
            width={300}
            height={300}
            alt=""
            priority
          />

          {/* buttons      */}
          <div className="flex gap-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 
          group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 
            group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-10 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
