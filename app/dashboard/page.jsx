"use client";

import { SideBar } from "@/components/side-bar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState([]);

  const cleanTechArray = (techArray) => {
    return techArray
      .map((item) => item.replace(/[\[\]"]/g, "").trim()) // Hapus tanda kurung dan tanda kutip, serta hilangkan spasi tambahan
      .filter((item) => item !== ""); // Hapus elemen kosong jika ada
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/project", { method: "GET" });

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await res.json();

      const parsedData = data.map((project) => ({
        ...project,
        tech: cleanTechArray(project.tech), // Bersihkan data `tech`
      }));

      console.log(parsedData);
      setProjects(parsedData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-grow p-6 bg-gray-100 overflow-auto w-full">
        <h1 className="text-2xl font-bold mb-6">Welcome to Dashboard</h1>
        <Link
          href="/dashboard/create"
          className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md my-4"
        >
          Tambah Project Disini
        </Link>
        <table className="w-full bg-white shadow-md rounded-lg overflow-auto mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">Project Title</th>
              <th className="p-4 text-left">Project Tech Stack</th>
              <th className="p-4 text-left">Project Image URL</th>
              <th className="p-4 text-left">Project Link URL</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr className="border-b" key={index}>
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{project.title}</td>
                <td className="p-4 w-4">
                  <ul className="flex flex-grow items-center gap-2">
                    {project.tech.map((tech, index) => (
                      <li
                        className="px-4 py-1 border-2-gray-300 rounded-full text-white bg-gray-500"
                        key={index}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 w-fit">
                      <Link href={project.imageUrl}>{project.title}</Link>
                </td>
                <td className="p-4 flex flex-wrap gap-4 items-center justify-start">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Github Link
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    <FontAwesomeIcon icon={faEye} /> Demo Link
                  </Link>
                </td>
                <td>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Page;
