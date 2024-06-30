"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LuUser } from "react-icons/lu";

export const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const customTheme = {
   "label": {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition delay-0 ease-in-out",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Sidebar
        aria-label="Default sidebar example"
        className="hidden lg:flex flex-col z-30 mt-14 mr-0 p-0 top-0 left-0 h-full fixed border-r bg-transparent"
        style={{ backgroundColor: "white !important" }}
       theme={customTheme}
      >
        <div className="bg-white h-full max-h-[33em] flex flex-col justify-between">
          
        <Sidebar.Items className="px-5 w-full">
          <Sidebar.ItemGroup >
            <Sidebar.Item
              href="/overview"
              icon={RiDashboardFill}
              className="transition ease-out duration-300 transform hover:bg-blue-600 hover:text-white pl-3 font-medium text-[#817D7D]  active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/dashboard">Dashboard</Link>
            </Sidebar.Item>
            {/* <Sidebar.Item
              href="#"
              icon={MdOutlineAnalytics}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/report">Report</Link>
            </Sidebar.Item> */}
            <Sidebar.Item
              href="#"
              icon={TiShoppingCart}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/order">Orders</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={PiSuitcaseSimple}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/product">Products</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={LuUser}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/customer">Customer</Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div class="flex flex-col justify-between ps-5 mt-auto">
          <div class="">
            <Link
              to="/settings"
              class="flex items-center gap-5 p-2 transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <IoSettingsOutline className="text-2xl text-gray-500" />
              <h1 class=" ">Settings</h1>
            </Link>
            <Link
              to="/"
              class="flex items-center gap-5 p-2 transition ease-out duration-300 transform hover:scale-105 pl-3 font-medium text-[#817D7D] hover:bg-blue-600 hover:text-white active:font-semibold active:text-[#5B5AFB]"
            >
              <IoLogOutOutline className="text-2xl text-gray-500" />
              <h1 class="">Log Out</h1>
            </Link>
          </div>
        </div>
        </div>
      </Sidebar>
    </>
  );
};
