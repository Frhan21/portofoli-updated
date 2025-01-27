"use client";

import { DeleteButton, EditButton } from "@/components/button";
import { SideBar } from "@/components/side-bar";
import { getData } from "@/libs/data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getData();
        setProjects(data);
      } catch (error) {
        setError(error.message || "Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };
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
          Add New Project
        </Link>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">Project Title</th>
              <th className="p-4 text-left">Tech Stack</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Links</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  Loading projects...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-red-500">
                  Error: {error}
                </td>
              </tr>
            ) : projects.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No projects available.
                </td>
              </tr>
            ) : (
              projects.map((project, index) => (
                <tr className="border-b" key={project.id || index}>
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{project.title || "Untitled"}</td>
                  <td className="p-4">
                    <ul className="flex flex-wrap items-center gap-2">
                      {project.tech && project.tech.length > 0 ? (
                        project.tech.map((tech, index) => (
                          <li
                            className="px-4 py-1 border border-gray-300 rounded-full text-white bg-gray-500"
                            key={index}
                          >
                            {tech}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-400">
                          No tech stack specified
                        </li>
                      )}
                    </ul>
                  </td>
                  <td className="p-4">
                    {project.imageUrl ? (
                      <Link
                        href={project.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Image
                      </Link>
                    ) : (
                      <span className="text-gray-400">No image available</span>
                    )}
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2 items-center justify-center">
                      {project.linkGithub ? (
                        <Link
                          href={project.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                          aria-label="GitHub Repository"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                      ) : null}

                      {project.linkDemo ? (
                        <Link
                          href={project.linkDemo || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                          aria-label="View Project"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      ) : null}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center items-center gap-2">
                      <EditButton id={project.id} />
                      <DeleteButton id={project.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Page;
