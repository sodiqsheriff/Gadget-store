import React, { useState, useRef } from "react";
import { NavigationBar } from "../_Component/Navbar";
import { SideNav } from "../_Component/SideNav";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { Checkbox, Table } from "flowbite-react"; // Adjust based on your actual component library
import { BsThreeDots } from "react-icons/bs";

// import { Year } from "../_Component/Svg_icon.tsx"

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pending"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab state
  };

  const transactions = [
    {
      id: 1,
      orderId: "SKN1200",
      product: "Watch Nike Series 7",
      customer: "Robert Fox",
      date: "01.01.2024",
      status: "pending",
      totalPrice: "₦399.00",
    },
    {
      id: 2,
      orderId: "SKN1201",
      product: "Watch Nike Series 7",
      customer: "Robert Fox",
      date: "01.01.2024",
      status: "completed",
      totalPrice: "₦399.00",
    },
    {
      id: 3,
      orderId: "SKN1202",
      product: "Watch Nike Series 7",
      customer: "Robert Fox",
      date: "01.01.2024",
      status: "canceled",
      totalPrice: "₦399.00",
    },
    {
      id: 4,
      orderId: "SKN1203",
      product: "Watch Nike Series 7",
      customer: "Robert Fox",
      date: "01.01.2024",
      status: "pending",
      totalPrice: "₦399.00",
    },
    {
      id: 5,
      orderId: "SKN1204",
      product: "Watch Nike Series 7",
      customer: "Robert Fox",
      date: "01.01.2024",
      status: "pending",
      totalPrice: "₦399.00",
    },
  ];

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
      <NavigationBar pageTitle="Overview" />
      <div className="flex flex-wrap">
        <SideNav />
        <div className="flex flex-col bg-[#F8FAFC] w-full z-5 lg:ml-[213px] lg:mt-16 mt-28p pt-5">
          <div class="py-3 px-6 :border-gray-700 ">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
              <div class="flex items-center gap-4 h-24 pl-6 rounded-lg bg-white  :bg-gray-800">
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
                      Overall revenue
                    </h1>
                    <div className="flex gap-2 items-center">
                      <h1 className="font-bold text-lg text-[#0F172A]">
                        ₦48,574.21
                      </h1>
                      <h1 className="text-xs font-medium text-[#24D164]">
                        +20%
                      </h1>
                    </div>
                  </div>
                  <Link
                    to="#"
                    id="dropdownDefaultButtonRevenue"
                    data-dropdown-toggle="dropdownRevenue"
                    className="text-xs text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg border border-[#F1F5F9] px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    This year
                  </Link>
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
                      <h1 className="font-bold text-lg text-[#0F172A]">
                        10,320
                      </h1>
                      <h1 className="text-xs font-medium text-[#ED4F9D]">
                        -20%
                      </h1>
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
          <div className="relative overflow-x-auto max-w-[70rem] m-4 p-4 bg-white sm:rounded-lg">
            <Table className="w-full bg-white font-semibold text-sm text-left rtl:text-right text-[#94A3B8] ">
              <Table.Head className="bg-gray-300 text-gray-400 capitalize font-semibold">
                <Table.HeadCell>
                  <Checkbox />
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Order ID</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Product</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Customer</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Date</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Status</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">Total price</div>
                </Table.HeadCell>
                <Table.HeadCell>
                  <div className="flowbite-table-head">
                    <BsThreeDots />
                  </div>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="">
                {transactions.map((transaction) => (
                  <Table.Row key={transaction.id} className="border-b p-10">
                    <Table.Cell className=" py-2">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="px-4 py-2 font-normal">
                      {transaction.orderId}
                    </Table.Cell>
                    <Table.Cell className="px-4 py-2">
                      {transaction.product}
                    </Table.Cell>
                    <Table.Cell className="px-4 py-2">
                      {transaction.customer}
                    </Table.Cell>
                    <Table.Cell className="px-4 py-2">
                      {transaction.date}
                    </Table.Cell>
                    <Table.Cell
                      className={`h-auto px-2 py-1 ${
                        statusColors[transaction.status]
                      } rounded-md text-center`}
                      style={{ maxWidth: "20px", maxHeight: "10px" }} // Adjust width and height here
                    >
                      <span className="block">{transaction.status}</span>
                    </Table.Cell>

                    <Table.Cell className="px-4 py-2">
                      {transaction.totalPrice}
                    </Table.Cell>
                    <Table.Cell>
                      <BsThreeDots />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

// new arrival /category ... latest 10 under that category
//
