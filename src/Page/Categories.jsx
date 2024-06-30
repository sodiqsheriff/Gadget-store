// Categories.js

import React, {useState, useRef} from 'react';
import { Checkbox, Table } from 'flowbite-react'; // Adjust based on your actual component library
import {NavigationBar} from "../_Component/Navbar";
import {SideNav} from "../_Component/SideNav";
import {Link } from "react-router-dom";
import { Wrapper } from '../_Component/wrapper_components';
import { categoriesData } from '../_data/test_data';
import { data } from "../_data/test_data.js";


export const Categories = ({toggleView}) => {
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

  return (
    <>
   <Wrapper pageTitle="Categories">
   <div className="text-sm font-medium  mt-28 md:mt-0 bg-white md:pt-0 text-center text-gray-500 border-b border-gray-200 :text-gray-400 :border-gray-700">
        <ul className="flex flex-wrap">
          <li className="me-2">
            <Link
              to="/product"
              className={`inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 active:text-blue-500 active:border-b-2 active:border-blue-500`}
              onClick={() => toggleView('All Products')}
            >
              All Products
            </Link>
          </li>
          <li className="me-2">
            <Link
              to="/categories"
              className={`inline-block p-4 text-blue-600  rounded-t-lg active:text-blue-500 active:border-b-2 active:border-blue-500 border-b-2 border-blue-500`}
              aria-current="page"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative overflow-x-auto  mt-5 p-4 bg-white rounded-xl">
      <Table>
        <Table.Head>
          <Table.HeadCell>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Products Count</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {categoriesData.map((item, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.productsCount}</Table.Cell>
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
   </Wrapper>
    </>
  );
};

