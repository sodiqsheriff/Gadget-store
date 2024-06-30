import React, { useState, useRef, useEffect } from "react";
import { Button, Checkbox, Table } from "flowbite-react"; // Adjust based on your actual component library
import { Categories } from "./Categories"; // Import the Categories component
import { Link } from "react-router-dom";
import { Wrapper } from "../_Component/wrapper_components.tsx";
import { data } from "../_data/test_data.js";
import { FaPlus } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { LuView } from "react-icons/lu";
import { IconButton } from "../_Component/components.jsx";

export const Product = () => {
  const [statuses, setStatuses] = useState(data.map((item) => item.status));
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(data.length).fill(false)
  ); // Track dropdown state for each item
  const dropdownRefs = useRef(data.map(() => React.createRef()));

  const toggleStatus = (index) => {
    setStatuses((prevStatuses) =>
      prevStatuses.map((status, i) => (i === index ? !status : status))
    );
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const handleClickOutside = (event) => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen((prevState) =>
          prevState.map((isOpen, i) => (i === index ? false : isOpen))
        );
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [showAllProducts, setShowAllProducts] = useState(true); // State to toggle between All Products and Categories
  const [activeLink, setActiveLink] = useState("All Products"); // State to track active navigation link

  const toggleView = (view) => {
    setShowAllProducts(view === "All Products");
    setActiveLink(view);
  };

  return (
    <>
      <Wrapper pageTitle="Product">
        <div className="flex flex-col bg-[#F8FAFC] w-full pt-28 md:pt-0">
          <div className="flex flex-row w-full px-5 bg-white justify-between shadow">
            <div className="text-sm font-medium sm:pt-5 md:pt-0 text-center text-gray-500 border-b border-gray-200 :text-gray-400 :border-gray-700">
              <ul className="flex flex-wrap">
                <li className="me-2">
                  <Link
                    to="/product"
                    className={`inline-block p-4 border-b-2 text-blue-500 border-blue-500 rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${
                      activeLink === "All Products"
                        ? " active:border-b-2 active:border-blue-500 active:text-blue-500"
                        : "hover:text-gray-300"
                    }`}
                    onClick={() => toggleView("All Products")}
                  >
                    All Products
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    to="/categories"
                    className={`inline-block p-4  border-b-2 rounded-t-lg ${
                      activeLink === "Categories"
                        ? "active:border-b-2 active:border-blue-500 active:text-blue-500"
                        : "hover:border-b-2"
                    }`}
                    onClick={() => toggleView("Categories")}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col pt-5 md:flex-row md:pt-0 items-center gap-5">
              <Link to='/addproduct'>
              <Button className=" items-center text-white bg-[#2563EB] text-lg hover:bg-blue-800 font-medium rounded-lg   flex">
                <FaPlus className="pr-2 text-2xl"/>
                AddProduct
              </Button>
              </Link>
            </div>
          </div>
          {showAllProducts ? (
            <div className="relative overflow-x-auto max-w-[70rem] m-5 p-4 bg-white sm:rounded-lg">
              <Table className="text-center">
                <Table.Head>
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Sold</Table.HeadCell>
                  <Table.HeadCell>Sales</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Action</Table.HeadCell>
                  
                  <Table.HeadCell>
                    <span className="sr-only">Actions</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data.map((item, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="flex items-center text-xs whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img
                          src={item.imageUrl}
                          alt={item.product}
                          className="w-10 h-10 object-cover"
                        />
                        {item.product}
                      </Table.Cell>
                      <Table.Cell  >{item.category}</Table.Cell>
                      <Table.Cell>{item.quantity}</Table.Cell>
                      <Table.Cell>{item.sold}</Table.Cell>
                      <Table.Cell>{item.price}</Table.Cell>
                      <Table.Cell>
                        <div
                          onClick={() => toggleStatus(index)}
                          className={`relative w-11 h-6 cursor-pointer rounded-full ${
                            statuses[index] ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`absolute top-[2px] left-[2px] bg-white border border-blue-300 rounded-full h-5 w-5 transition-all ${
                              statuses[index] ? "translate-x-full" : ""
                            }`}
                          ></div>
                        </div>
                      </Table.Cell>
                   
                      <Table.Cell className="flex gap-2 ">
                        <Link to='/editproduct'>
                    <IconButton
                      className={"bg-blue-200 w-full text-blue-800 border-0"}
                      child={<BiEdit size={20} />}
                      description={"Update Order Status"}
                    />
                    </Link>
                <Link to='/viewproduct'>
                    <IconButton
                      className={
                        "bg-green-200 w-full text-green-800 border-0 hover:bg-green-700"
                      }
                      child={<LuView size={20} />}
                      description={"View Order Details"}
                    />
                    </Link>
                  </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <Categories />
          )}
        </div>
      </Wrapper>
    </>
  );
};
