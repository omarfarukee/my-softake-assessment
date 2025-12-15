

"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import SidebarMenu from "./SidebarMenu";
import DashboardOverview from "./DashboardOverview";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f9fafb] min-h-screen overflow-hidden">
      {/* TOP HEADER (UNCHANGED) */}
      <div className="h-[10vh] flex items-center px-[4vw] md:px-[2vw] bg-white">
        <div className="w-[50vw] md:w-[20vw]">
          <img src="/images/logo2.jpeg" className="w-[20vw] md:w-[7vw]" alt="logo" />
        </div>

        <div className="hidden md:flex justify-evenly w-[60vw] items-center text-[1vw] font-bold">
          <Link href="/"><button className="cursor-pointer">Hero Section 1</button></Link>
          <Link href="/heroSectionTwo"><button className="cursor-pointer">Hero Section 2</button></Link>
          <button>Message</button>
        </div>

        <div className="w-[50vw] md:w-[20vw] text-[6vw] md:text-[2vw] flex justify-end">
          <BsThreeDotsVertical />
        </div>
      </div>

      {/* BODY WRAPPER */}
      <div className="relative flex mt-[0.7vw]">

        {/* MOBILE OVERLAY */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* SIDEBAR */}
        <div
          className={`
            fixed md:absolute top-0 left-0 h-full z-40
            bg-white shadow-lg border-r border-black/10
            transition-transform duration-500 ease-in-out
            w-[80vw] md:w-[15vw]
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="h-[10vh] md:h-[8.4vh] border-b border-black/10 flex items-center justify-center font-bold gap-[2vw] md:gap-[0.5vw]">
            <LuBuilding2 className="text-[6vw] md:text-[1.5vw] text-blue-600" />
            <p className="text-[5vw] md:text-[1.3vw]">EduDashboard</p>
          </div>

          <SidebarMenu />
        </div>

        {/* CONTENT AREA */}
        <div
          className={`
            transition-all duration-500 ease-in-out mb-10
            w-screen
            md:${sidebarOpen ? "w-[85vw] ml-[15vw]" : "w-screen ml-0"}
          `}
        >
          {/* MENU / SEARCH HEADER */}
          <div className="bg-white border-b border-gray-200 px-[4vw] md:px-[2vw] py-[1.5vh] flex items-center justify-between">
            <div className="flex items-center grow">
              <button
                onClick={() => setSidebarOpen(prev => !prev)}
                className="text-gray-600 hover:text-gray-800 mr-[4vw] md:mr-[2vw] md:text-[2vw] text-[6vw] cursor-pointer"
               
              >
                <IoMenuOutline />
              </button>

              <div className="relative w-full md:w-[70%]">
                <FaSearch className="absolute left-[3vw] md:left-[1vw]  top-1/2 -translate-y-1/2 text-gray-400 text-[4vw] md:text-[1vw]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search institutions, students, staff..."
                  className="w-full pl-[10vw] md:w-[60%] md:pl-[3vw] pr-[2vw] py-[1.5vw] md:py-[0.5vw] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[4vw] md:text-[1vw]"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-[1.5vw] mr-[3vw]">
              <div className="relative text-[1.2vw]">
                <FaBell className="cursor-pointer text-gray-600 hover:text-gray-800" />
                <span className="absolute -top-[0.5vw] -right-[0.5vw] bg-red-500 text-white text-[0.7vw] rounded-full w-[1.2vw] h-[1.2vw] flex items-center justify-center">
                  3
                </span>
              </div>

              <div className="cursor-pointer text-[1.4vw]">
                <FaUser className="text-gray-600 hover:text-gray-800" />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="p-[4vw] md:p-0">
            <DashboardOverview />
          </div>
        </div>
      </div>
    </div>
  );
}
