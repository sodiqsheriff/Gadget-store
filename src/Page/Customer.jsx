import React, { useState } from "react";
import { Button, Table, Checkbox, Avatar } from "flowbite-react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Wrapper } from "../_Component/wrapper_components";
export const Customer = () => {
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

  const data = [
    {
      id: "001",
      orderId: "001",
      name: "Watch Nike Series 7",
      customer: "Robert Fox",
      email: "robert.fox@example.com",
      createdAt: "01.01.2024",
      status: "pending",
      purchase: "₦399.00",
    },
    {
      id: "002",
      orderId: "002",
      name: "Watch Nike Series 8",
      customer: "John Doe",
      email: "john.doe@example.com",
      createdAt: "02.01.2024",
      status: "Activated",
      purchase: "₦499.00",
    },
    // Add more data as needed
  ];
  return (
    <>
      <Wrapper pageTitle="Customer">
        <div className="flex flex-row w-ful bg-white justify-between ">
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
                  Active
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
        </div>
        <div className="relative overflow-x-auto my-4 py-4 bg-white sm:rounded-lg">
          <Table className="w-full bg-white font-semibold text-sm text-left rtl:text-right text-[#94A3B8] ">
            <Table.Head className="text-sm">
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                SN
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Customer ID
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Customer
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Phone
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Created at
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Status
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                Purchase
              </Table.HeadCell>
              <Table.HeadCell className="text-[10px] text-gray-400 font-bold">
                <BsThreeDots />
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((item, index) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.orderId}</Table.Cell>
                  <Table.Cell className="px-4 py-2 flex gap-4 items-center">
                    <Avatar className="" img={""} rounded />
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-xs font-normal">{item.email}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>0987656789</Table.Cell>
                  <Table.Cell>{item.createdAt}</Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                  <Table.Cell>{item.purchase}</Table.Cell>
                  <Table.Cell>
                    <BsThreeDots />
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
