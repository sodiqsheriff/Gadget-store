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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Sidebar
        aria-label="Default sidebar example"
        className="hidden md:flex flex-col z-30 mt-14  top-0 left-0 h-full fixed border-r bg-white shadow-white shadow-2xl  max-w-[213px]"
        style={{ backgroundColor: "white !important" }}
      >
        <Sidebar.Items className="px-5 max-w-[12rem]">
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/overview"
              icon={RiDashboardFill}
              className="transition ease-out duration-300 transform hover:bg-custom-blue pl-3 font-medium text-[#817D7D]  active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/dashboard">Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={MdOutlineAnalytics}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/report">Report</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={TiShoppingCart}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/order">Orders</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={PiSuitcaseSimple}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/product">Products</Link>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={LuUser}
              className="transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <Link to="/customer">Customer</Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div class="flex flex-col justify-between mt-28 ps-5">
          <div class="mt-auto">
            <Link
              to="/settings"
              class="flex items-center gap-5 p-2 transition ease-out duration-300 transform hover:scale-105 pl-3 my-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <IoSettingsOutline className="text-2xl text-gray-500" />
              <h1 class=" ">Settings</h1>
            </Link>
            <Link
              to=""
              class="flex items-center gap-5 p-2 transition ease-out duration-300 transform hover:scale-105 pl-3 font-medium text-[#817D7D] hover:bg-custom-blue active:font-semibold active:text-[#5B5AFB]"
            >
              <IoLogOutOutline className="text-2xl text-gray-500" />
              <h1 class="/">Log Out</h1>
            </Link>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
