"use client"

import { faBars, faCog, faHome, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const SideBar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <aside
      className={`${
        isMinimized ? "w-12" : "w-64"
      } bg-gray-800 text-white flex flex-col transition-all duration-300 gap-4`}
    >
      <div className="p-4 font-bold text-lg border-b border-gray-700 flex items-center justify-between">
        {!isMinimized && <span>Admin Dashboard</span>}
        <button onClick={() => setIsMinimized(!isMinimized)}>
          <FontAwesomeIcon icon={faBars} className="text-white text-xl" />
        </button>
      </div>
      <nav className="flex-grow p-4 gap-[2rem]">
        <ul className="flex flex-col gap-4">
          <li>
            <a href="/dashboard" className="flex items-center gap-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faHome} />
              {!isMinimized && <span>Home</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faProjectDiagram} />
              {!isMinimized && <span>Projects</span>}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 hover:text-blue-400">
              <FontAwesomeIcon icon={faCog} />
              {!isMinimized && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700 text-center">
        {!isMinimized && "© 2025"}
      </div>
    </aside>
  );
};
