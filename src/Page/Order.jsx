import React, { useState } from "react";
import { LuFilter, LuView } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { Button, Table,  Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { Wrapper } from "../_Component/wrapper_components";
import { IconButton } from "../_Component/components";
import { transactions } from "../_data/test_data.js"

export const Order = () => {
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
      <Wrapper pageTitle="Order">
        <div className="flex flex-row w-full px-5 bg-white justify-between mt-28">
          <div className="text-sm font-medium sm:pt-5 md:pt-0 text-center text-gray-500 border-b border-gray-200 ">
            <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
              <li className="me-2">
                <Link
                  to="#"
                  onClick={() => handleTabClick("all")}
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                    activeTab === "all" ? "text-gray-300 border-gray-300 active:border-b-2 active:text-blue-600 active:border-blue-600" : ""
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
                      ? "active text-blue-500 border-b border-blue-500 active:border-b-2 active:text-blue-600 active:border-blue-600"
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
                      ? "text-gray-300 border-gray-300 active:border-b-2 active:text-blue-600 active:border-blue-600"
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
                      ? "text-gray-300 border-gray-300 active:border-b-2 active:text-blue-600 active:border-blue-600"
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
          
          </div>
        </div>
        <div className="relative overflow-x-auto max-w-[70rem] m-4 p-4 bg-white sm:rounded-lg">
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
                  <Table.Cell className="flex gap-2">
                    <IconButton
                      className={"bg-blue-200 text-blue-800 border-0"}
                      child={<BiEdit size={20} />}
                      description={"Update Order Status"}
                    />

                    <IconButton
                      className={
                        "bg-green-200 text-green-800 border-0 hover:bg-green-700"
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
