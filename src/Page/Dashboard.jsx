import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import {  Table } from "flowbite-react"; // Adjust based on your actual component library
import { BiEdit } from "react-icons/bi";
import { transactions } from "../_data/test_data"
import { LuView } from "react-icons/lu";
import { IconButton } from "../_Component/components";
import { Wrapper } from "../_Component/wrapper_components";

// import { Year } from "../_Component/Svg_icon.tsx"

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pending"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab state
  };


  // State to manage toggling the status color
  const [statusColors, setStatusColors] = useState({
    pending: "bg-blue-200 text-blue-800",
    completed: "bg-green-200 text-green-800",
    canceled: "bg-red-200 text-red-800",
  });

  // Function to get color class based on status
  const getColorClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-blue-200 text-blue-800";
      case "completed":
        return "bg-green-200 text-green-800";
      case "canceled":
        return "bg-red-200 text-red-800";
      default:
        return "";
    }
  };

  return (
    <>
      <Wrapper pageTitle="Overview">
        <div class="py-3  mt-28 md:mt-0">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
            <div class="flex items-center gap-4 h-24 pl-6 rounded-lg bg-white shadow-sm">
              <div class="flex items-center justify-center  bg-[#F8FAFC] w-12 h-12 rounded-lg ">
                {/* <img src="./assets/media/images/svg_icons/sales.svg" alt="salesicon" class=""> */}
              </div>
              <div class="flex flex-col">
                <h1 class="font-medium text-sm text-[#64748B]">Sales</h1>
                <div class="flex gap-2 items-center">
                  <h1 class="font-bold text-lg">₦1,234.00</h1>
                  <h1 class="text-xs font-medium text-[#24D164]">+12%</h1>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4 h-24 pl-6 rounded-lg bg-white  :bg-gray-800">
              <div class="flex items-center justify-center  bg-[#F8FAFC] w-12 h-12 rounded-lg ">
                {/* <img src="./assets/media/images/svg_icons/orderr.svg" alt="salesicon" class=""> */}
              </div>
              <div class="flex flex-col">
                <h1 class="font-medium text-sm text-[#64748B]">Orders</h1>
                <h1 class="font-bold text-lg">566</h1>
              </div>
            </div>
            <div class="flex items-center gap-4 h-24 pl-6 rounded-lg bg-white  :bg-gray-800">
              <div class="flex items-center justify-center  bg-[#F8FAFC] w-12 h-12 rounded-lg ">
                {/* <img src="./assets/media/images/svg_icons/prodact.svg" alt="salesicon" class=""> */}
              </div>
              <div class="flex flex-col">
                <h1 class="font-medium text-sm text-[#64748B]">Products</h1>
                <div class="flex gap-2 items-center">
                  <h1 class="font-bold text-lg">₦956.00</h1>
                  <h1 class="text-xs font-medium text-[#24D164]">-5%</h1>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4 h-24 pl-6 rounded-lg bg-white  :bg-gray-800">
              <div class="flex items-center justify-center  bg-[#F8FAFC] w-12 h-12 rounded-lg ">
                {/* <img src="./assets/media/images/svg_icons/add-team.svg" alt="salesicon" class=""> */}
              </div>
              <div class="flex flex-col">
                <h1 class="font-medium text-sm text-[#64748B]">Customers</h1>
                <div class="flex gap-2 items-center">
                  <h1 class="font-bold text-lg">5,566.01</h1>
                  <h1 class="text-xs font-medium text-[#24D164]">+15%</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start w-full h-full gap-4 py-6">
            {/* Revenue Block */}
            <div className="block w-full rounded-lg bg-white px-4 py-5">
              <div className="flex items-center justify-between pb-7">
                <div className="flex flex-col pt-5">
                  <h1 className="font-medium text-sm text-[#64748B]">
                    Recent Orders
                  </h1>
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-lg text-[#0F172A]">5000+</h1>
                  </div>
                </div>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    datepicker=""
                    id="default-datepicker"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>

                {/* Dropdown menu for Revenue */}
              </div>
              {/* <img src="./assets/media/images/svg_icons/mainchart.svg" className="w-full" alt="Main Chart" /> */}
            </div>

            {/* User Activity Block */}
            <div className="block rounded-lg bg-white p-4 w-full">
              <div className="flex items-center justify-between pb-7 w-full">
                <div className="flex flex-col pt-5">
                  <h1 className="font-medium text-sm text-[#64748B]">
                    User activity
                  </h1>
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-lg text-[#0F172A]">10,320</h1>
                    <h1 className="text-xs font-medium text-[#ED4F9D]">-20%</h1>
                  </div>
                </div>
                <Link
                  to="#"
                  id="dropdownDefaultButtonActivity"
                  data-dropdown-toggle="dropdownActivity"
                  className="text-xs text-white focus:ring-4 focus:outline-none  font-medium rounded-lg border border-[#F1F5F9] px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  This week
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </Link>
                {/* Dropdown menu for User Activity */}
              </div>
              {/* <img src="./assets/media/images/svg_icons/user chart.svg" className="w-full" alt="User Chart" /> */}
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto   bg-white sm:rounded-lg">
          <Table className="w-full bg-white font-semibold text-sm text-left rtl:text-right text-[#94A3B8] ">
            <Table.Head className="bg-gray-300 text-gray-400 capitalize font-semibold">
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">Order ID</div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">
                  Order Date
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">Customer</div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">
                  Delivery Date
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">Status</div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">
                  Total price
                </div>
              </Table.HeadCell>
              <Table.HeadCell>
                <div className="flowbite-table-head text-center">Action</div>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="">
              {transactions.map((transaction) => (
                <Table.Row key={transaction.id} className="border-b p-10">
                  <Table.Cell className="px-4 py-2 font-normal">
                    {transaction.orderId}
                  </Table.Cell>
                  <Table.Cell className="px-4 py-2 font-normal">
                    {transaction.date}
                  </Table.Cell>
                  <Table.Cell className="px-4 py-2 flex gap-4 items-center">
                    <Avatar className="" img={""} rounded />
                    <div className="flex flex-col">
                      <span>{transaction.customer}</span>
                      <span className="text-xs">{transaction.email}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="px-4 py-2">
                    {transaction.date}
                  </Table.Cell>
                  <Table.Cell>
                    <div
                      className={`block mx-auto w-fit px-4 rounded py-1 bg-blue-100 text-blue-500 ${
                        statusColors[transaction.status]
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </Table.Cell>

                  <Table.Cell className="px-4 py-2">
                    {transaction.totalPrice}
                  </Table.Cell>
                  <Table.Cell className="flex gap-0 ">
                    <IconButton
                      className={"bg-blue-200 w-full text-blue-800 border-0"}
                      child={<BiEdit size={20} />}
                      description={"Update Order Status"}
                    />

                    <IconButton
                      className={
                        "bg-green-200 w-full text-green-800 border-0 hover:bg-green-700"
                      }
                      child={<LuView size={20} />}
                      description={"View Order Details"}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Wrapper>
    </>
  );
};

// new arrival /category ... latest 10 under that category
//
