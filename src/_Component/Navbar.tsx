
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Logo } from "./Svg_icon";
import ChildComponent from "./ChildComponent";
import { NotificationBell } from "./NotificationBar";
import { AiOutlineSearch } from "react-icons/ai";

export function NavigationBar({ pageTitle }) {
  return (
    <Navbar fluid rounded className="fixed z-40 w-full">
      <Navbar.Brand href="" className="lg:ps-6 ">
        <ChildComponent icon={Logo} />
        <span className="self-center whitespace-nowrap ps-2 text-2xl font-bold dark:text-white">
          Gadget
        </span>
      </Navbar.Brand>
      <div className="flex justify-between h-full md:py-0 py-3 max-w-screen lg:w-[39rem]">
        <div className="flex flex-col lg:ps-0">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
          <h3 className="hidden lg:block font-normal text-sm text-[#64748B]">
            Detailed information about your {pageTitle}
          </h3>
        </div>
        <input type="button" value="" />
      </div>
      <div className="flex items-center gap-5 md:order-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
            <AiOutlineSearch className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            className="border border-gray-300 bg-white h-8 pl-10 pr-5 mr-7 md:mr-0 rounded-lg w-full text-sm focus:outline-none"
            placeholder="Search Anything..."
          />
        </div>
        <div className="">
        <NotificationBell />
        </div>
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
       
          </Dropdown.Header>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=" md:hidden">
        <Navbar.Link href="/dashboard"  className="active:bg-blue-600 active:text-white">
          Dashboard
        </Navbar.Link>
        {/* <Navbar.Link href="/report" className="active:bg-blue-600 active:text-white">Reports</Navbar.Link> */}
        <Navbar.Link href="order" className="active:bg-blue-600 active:text-white">Orders</Navbar.Link>
        <Navbar.Link href="/product" className="active:bg-blue-600 active:text-white">Products</Navbar.Link>
        <Navbar.Link href="/customer" className="active:bg-blue-600 active:text-white">Customer</Navbar.Link>
        <Navbar.Link href="/setings" className="active:bg-blue-600 active:text-white">Settings</Navbar.Link>
        <Navbar.Link href="/">Log out</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
