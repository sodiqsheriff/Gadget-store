"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Logo } from "./Svg_icon";
import ChildComponent from "./ChildComponent";
import NotificationBell from "./NotificationBar";

export function NavigationBar() {
  return (
    <Navbar fluid rounded className=" border-b border-gray-300 shadow ">
      <Navbar.Brand href="" className="lg:ps-6">
        <ChildComponent icon={Logo} />
        <span className="self-center whitespace-nowrap ps-2 text-2xl font-bold dark:text-white">
          Gadget
        </span>
      </Navbar.Brand>
      <div className="flex justify-between w-2/5">
        <h1 className="text">product-page</h1>
        <input type="button" value="sheriff" />
      </div>
      <div className="flex items-center gap-5 md:order-2">
        <input
          type="search"
          id="default-search"
          className="block w-60 h-8 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
          placeholder="Search anything..."
          required
        />
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
      <Navbar.Collapse className="block md:hidden">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
