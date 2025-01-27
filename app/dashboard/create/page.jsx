import CreateForm from "@/components/create-form";
import { SideBar } from "@/components/side-bar";
import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen">
        <SideBar/> 
        <main className="flex-grow p-6 bg-gray-100 overflow-auto">
            <h1 className="text-2xl font-bold mb-6">Create Project Page</h1>
            <CreateForm/>
        </main>
    </div>
  )
};

export default Page;
