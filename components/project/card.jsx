"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { default: Image } = require("next/image");

export const Card = ({ project }) => {
  return (
    <div className="max-w-md w-full p-6 transition-transform transform bg-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
      </div>

      {/* Project Title */}
      <h3 className="mt-4 mb-2 text-2xl font-bold text-gray-800">
        {project.title}
      </h3>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* GitHub Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>

        {/* Demo Button */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-400"
        >
          <FontAwesomeIcon icon={faEye} /> View Demo
        </a>
      </div>
    </div>
  );
};