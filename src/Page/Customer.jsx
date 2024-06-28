import React, { useState } from "react";
import { NavigationBar } from "../_Component/Navbar";
import { SideNav } from "../_Component/SideNav";
import { LuFilter } from "react-icons/lu";
import { BiExport } from "react-icons/bi";
import { Button, Table, Checkbox } from "flowbite-react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
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
          id: '001',
          orderId: '001',
          name: 'Watch Nike Series 7',
          customer: 'Robert Fox',
          email: 'robert.fox@example.com',
          createdAt: '01.01.2024',
          status: 'pending',
          purchase: '₦399.00',
        },
        {
          id: '002',
          orderId: '002',
          name: 'Watch Nike Series 8',
          customer: 'John Doe',
          email: 'john.doe@example.com',
          createdAt: '02.01.2024',
          status: 'Activated',
          purchase: '₦499.00',
        },
        // Add more data as needed
      ];
  return (
    <>
     <NavigationBar pageTitle='Customer' />
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
                    Activated
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
                <Button className="bg-blue-600 flex items-center text-xl font-medium text-white">
                    <FaPlus />
                    Add customer
                </Button>
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

      <Table className='w-full bg-white font-semibold text-sm text-left rtl:text-right text-[#94A3B8] '>
        <Table.Head className='text-sm'>
          <Table.HeadCell>
            <Checkbox id="checkbox-all-search" />
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
          </Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Order ID</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Name</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Email</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Created at</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Status</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold">Purchase</Table.HeadCell>
          <Table.HeadCell className="text-[10px] text-gray-400 font-bold"><BsThreeDots /></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>{item.orderId}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
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
    </div>
     </div>
    </>
  )
}
