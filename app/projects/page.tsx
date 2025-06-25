"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { projectData } from "@/mockdata/workdata";

const uniquecategories = [
  "All Projects",
  ...Array.from(new Set(projectData.map((item) => item.category))),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniquecategories);
  const [category, setCategory] = useState("All Projects");

  const filteredProjects = projectData.filter((project: any) => {
    return category === "All Projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* tabs */}
        <Tabs defaultValue={category} className="border-b mb-24 xl:mb-48">
          <div className="w-full flex justify-center mb-12">
            <div className="inline-flex border rounded-lg dark:border-neutral-700 bg-white dark:bg-neutral-900">
              <TabsList
                className="flex flex-row items-center gap-2
            overflow-x-auto whitespace-nowrap
            scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent
            px-2"
              >
                {categories.map((category: any, index: number) => {
                  return (
                    <TabsTrigger
                      value={category}
                      key={index}
                      className="capitalize min-w-[140px] px-4 py-2"
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </div>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects &&
              filteredProjects.map((project: any, index: number) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
