"use client";
import React from "react";
import ProjectsSection from "@/components/sections/projects";

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
      <ProjectsSection />
    </div>
  );
}

export default Page;
