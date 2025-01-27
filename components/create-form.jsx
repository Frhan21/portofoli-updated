"use client";
import React, { useState } from "react";

const CreateForm = () => {
  const [data, setData] = useState({
    title: "",
    image: null,
    linkGithub: "",
    linkDemo: "",
    tech: [],
  });
  const [techInput, setTechInput] = useState("");

  const handleAddTech = (newTech) => {
    if (!data.tech.includes(newTech) && newTech.trim() !== "") {
      setData((prev) => ({ ...prev, tech: [...prev.tech, newTech.trim()] }));
    }
  };

  const handleRemoveTech = (techToRemove) => {
    setData((prev) => ({
      ...prev,
      tech: prev.tech.filter((item) => item !== techToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image);
    formData.append("linkGithub", data.linkGithub);
    formData.append("linkDemo", data.linkDemo);

    // Serialize the tech array into a JSON string
    formData.append("tech", JSON.stringify(data.tech));

    const res = await fetch("/api/project", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const result = await res.json();
      alert("Project successfully created!");
    } else {
      const error = await res.json();
      alert(error.message);
    }
  };

  return (
    <div className="max-w-2xl p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-xl font-bold mb-4">Create New Project</h1>

        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block font-medium mb-2">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Tech Stack Input */}
        <div>
          <label htmlFor="tech" className="block font-medium mb-2">
            Tech Stack
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="tech"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a tech (e.g., React)"
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {data.tech.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-800"
              >
                {item}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(item)}
                  className="ml-2 text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Link Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="linkGithub" className="block font-medium mb-2">
              Link Github
            </label>
            <input
              type="text"
              id="linkGithub"
              value={data.linkGithub}
              onChange={(e) => setData({ ...data, linkGithub: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Github link"
            />
          </div>
          <div>
            <label htmlFor="linkDemo" className="block font-medium mb-2">
              Link Demo
            </label>
            <input
              type="text"
              id="linkDemo"
              value={data.linkDemo}
              onChange={(e) => setData({ ...data, linkDemo: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Demo link"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
