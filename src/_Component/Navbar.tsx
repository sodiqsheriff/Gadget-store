"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import React from "react";
import { Logo } from "./Svg_icon";
import ChildComponent from "./ChildComponent";
import NotificationBell from "./NotificationBar";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export function NavigationBar({ pageTitle }) {
  return (
    <Navbar fluid rounded className=" border-b border-gray-300 shadow">
      <Navbar.Brand href="" className="lg:ps-6 ">
        <ChildComponent icon={Logo} />
        <span className="self-center whitespace-nowrap ps-2 text-2xl font-bold dark:text-white">
          Gadget
        </span>
      </Navbar.Brand>
      <div className="flex justify-between h-full md:py-0 py-3 lg:w-[38rem] lg:border-l  border-">
        <div className="flex flex-col md:ps-5">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
          <h3 className="hidden lg:block font-normal text-sm text-[#64748B]">
            Detailed information about your {pageTitle}
          </h3>
        </div>
        <input type="button" value="" />
      </div>
      <div className="flex items-center gap-5 md:order-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            className="border border-gray-300 bg-white h-8 pl-10 pr-5 rounded-lg text-sm focus:outline-none"
            placeholder="Search Anything..."
          />
        </div>
        <NotificationBell />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=" md:hidden">
        <Navbar.Link href="/dashboard" active>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/report">Reports</Navbar.Link>
        <Navbar.Link href="order">Orders</Navbar.Link>
        <Navbar.Link href="/product">Products</Navbar.Link>
        <Navbar.Link href="/customer">Customer</Navbar.Link>
        <Navbar.Link href="/setings">Settings</Navbar.Link>
        <Navbar.Link href="/">Log out</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
