import React, { useState } from "react";
import { NavigationBar } from "../_Component/Navbar";
import { SideNav } from "../_Component/SideNav";
import { LuFilter } from "react-icons/lu";
import { BiExport } from "react-icons/bi";
import { Button, Table, Checkbox } from "flowbite-react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Order = () => {
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
      <NavigationBar pageTitle="Order" />
      <div className="flex flex-row">
        <SideNav />
        <div className="bg-[#F8FAFC] w-full">
          <div className="flex flex-row w-full px-5 bg-white justify-between ">
            <div className="text-sm font-medium sm:pt-5 md:pt-0 text-center text-gray-500 border-b border-gray-200 ">
              <ul className="flex flex-col md:grid grid-cols-3 lg:grid-cols-5">
                <li className="me-2">
                  <Link
                    to="#"
                    onClick={() => handleTabClick("all")}
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                      activeTab === "all" ? "text-gray-300 border-gray-300" : ""
                    }`}
                  >
                    All Orders
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    to="#"
                    onClick={() => handleTabClick("pending")}
                    className={`inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg ${
                      activeTab === "pending"
                        ? "active text-blue-500 border-blue-500"
                        : ""
                    }`}
                    aria-current={activeTab === "pending" ? "page" : undefined}
                  >
                    Pending
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    to="#"
                    onClick={() => handleTabClick("completed")}
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                      activeTab === "completed"
                        ? "text-gray-300 border-gray-300"
                        : ""
                    }`}
                  >
                    Completed
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    to="#"
                    onClick={() => handleTabClick("canceled")}
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                      activeTab === "canceled"
                        ? "text-gray-300 border-gray-300"
                        : ""
                    }`}
                  >
                    Canceled
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col pt-5 md:flex-row md:pt-0 items-center gap-5">
              <Button className="flex gap-5 items-center text-[#64748B] bg-white font-semibold hover:text-white  border border-[#E2E8F0] hover:border-2 focus:ring-4 focus:outline-none rounded-lg  text-center me-2 ">
                <LuFilter className="text-lg" />
                Filter
              </Button>
              <Button className="flex gap-5 items-center text-[#64748B] hover:text-white border border-[#E2E8F0] hover:border-2 focus:ring-4 bg-white focus:outline-none  font-semibold rounded-lg text-sm text-center me-2 ">
                <BiExport className="text-lg" />
                Exports
              </Button>
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
                      className={`h-4 px-4 py-1 ${
                        statusColors[transaction.status]
                      } rounded-md text-center`}
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