import React, { useState } from 'react';
import { NavigationBar } from '../_Component/Navbar';
import { SideNav } from '../_Component/SideNav';
import ChildComponent from '../_Component/ChildComponent';
import { Produvtmenu, Productsquare } from '../_Component/Svg_icon.tsx'; // Adjust import based on your actual SVG component
import { Checkbox, Table } from 'flowbite-react'; // Adjust based on your actual component library
import {Categories} from './Categories'; // Import the Categories component
import { BsThreeDots } from 'react-icons/bs';
import {Link} from "react-router-dom";

export const Product = () => {
  const [showAllProducts, setShowAllProducts] = useState(true); // State to toggle between All Products and Categories
  const [activeLink, setActiveLink] = useState('All Products'); // State to track active navigation link

  const toggleView = (view) => {
    setShowAllProducts(view === 'All Products');
    setActiveLink(view);
  };

  return (
    <>
      <NavigationBar />
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col bg-[#F8FAFC] w-full">
          <div className="flex flex-row w-full px-5 bg-white justify-between shadow">
            <div className="text-sm font-medium sm:pt-5 md:pt-0 text-center text-gray-500 border-b border-gray-200 :text-gray-400 :border-gray-700">
              <ul className="flex flex-wrap">
                <li className="me-2">
                  <Link
                    to="/product"
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ${activeLink === 'All Products' ? 'border-b border-blue-500 text-blue-500' : ':hover:text-gray-300'}`}
                    onClick={() => toggleView('All Products')}
                  >
                    All Products
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    to="/categories"
                    className={`inline-block p-4 text-blue-600 border-b-2 border-transparent rounded-t-lg ${activeLink === 'Categories' ? 'border-blue-500 text-blue-500' : 'hover:border-blue-500 hover:text-blue-500'}`}
                    onClick={() => toggleView('Categories')}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col pt-5 md:flex-row md:pt-0 items-center gap-5">
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
                className="gap-2 items-center text-white bg-[#2563EB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex me-2 :hover:bg-blue-700 :focus:ring-blue-800"
              >
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 1.33325V10.6666"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.833252 6H10.1666"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                New Product
              </button>
              <ChildComponent icon={Produvtmenu} />
              <ChildComponent icon={Productsquare} />
            </div>
          </div>
          {showAllProducts ? (
            <div className="relative overflow-x-auto max-w-[70rem] m-5 p-4 bg-white sm:rounded-lg">
              <Table>
                <Table.Head>
                  <Table.HeadCell>
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Brand</Table.HeadCell>
                  <Table.HeadCell>Stock</Table.HeadCell>
                  <Table.HeadCell>Sales</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell><BsThreeDots /></Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Actions</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {/* Render your data for All Products */}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <Categories />
          )}
        </div>
      </div>
    </>
  );
};

