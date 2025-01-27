"use client";

import { getData } from "@/libs/data";
import { useEffect, useState } from "react";
import { Card } from "./card";
import Link from "next/link";


export const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getData();
      setProjects(data);
    };
    fetch();
  }, []);

  const displayedProjects = projects.slice(0, 3)

  return (
    <section
      className="w-full min-h-[125vh] bg-[#ffffff] font-['Poppins'] p-4 flex flex-col items-center gap-6 "
      id="project"
    >
      {/* Header */}
      <header className="flex items-center justify-center gap-4 mx-4 mt-6">
        <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
        <h2 className="text-2xl font-bold text-center sm:text-4xl">
          Few of My Projects
        </h2>
        <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {displayedProjects.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </div>
      <Link href="/project" className="px-8 py-4 bg-[#ff8132] rounded-full text-xl text-white">See more project</Link>
    </section>
  );
};
