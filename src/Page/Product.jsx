import React, { useState, useRef, useEffect } from 'react';
import { NavigationBar } from '../_Component/Navbar';
import { SideNav } from '../_Component/SideNav';
import ChildComponent from '../_Component/ChildComponent';
import { Produvtmenu, Productsquare } from '../_Component/Svg_icon.tsx'; // Adjust import based on your actual SVG component
import { Checkbox, Table } from 'flowbite-react'; // Adjust based on your actual component library
import { Categories } from './Categories'; // Import the Categories component
import { BsThreeDots } from 'react-icons/bs';
import { Link } from "react-router-dom";


const data = [
  {
    imageUrl: '../_assets/wactch.svg',
    product: 'Apple MacBook Pro 17"',
    brand: 'Silver',
    stock: 'Laptop',
    sales: '$2999',
    price: '$3000',
    status: true,
  },
  {
    imageUrl: '../_assets/wactch.svg',
    product: 'Microsoft Surface Pro',
    brand: 'White',
    stock: 'Laptop PC',
    sales: '$1999',
    price: '$3000',
    status: false,
  },
  {
    imageUrl: '../_assets/wactch.svg',
    product: 'Magic Mouse 2',
    brand: 'Black',
    stock: 'Accessories',
    sales: '$99',
    price: '$3000',
    status: false,
  },
];

export const Product = () => {
  const [statuses, setStatuses] = useState(data.map(item => item.status));
  const [dropdownOpen, setDropdownOpen] = useState(Array(data.length).fill(false)); // Track dropdown state for each item
  const dropdownRefs = useRef(data.map(() => React.createRef()));

  const toggleStatus = index => {
    setStatuses(prevStatuses =>
      prevStatuses.map((status, i) => (i === index ? !status : status))
    );
  };

  const toggleDropdown = index => {
    setDropdownOpen(prevState =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const handleClickOutside = event => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen(prevState =>
          prevState.map((isOpen, i) => (i === index ? false : isOpen))
        );
      }
    });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const [showAllProducts, setShowAllProducts] = useState(true); // State to toggle between All Products and Categories
  const [activeLink, setActiveLink] = useState('All Products'); // State to track active navigation link

  const toggleView = (view) => {
    setShowAllProducts(view === 'All Products');
    setActiveLink(view);
  };

  return (
    <>
      <NavigationBar pageTitle='Product' />
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
                {data.map((item, index) => (
                  <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-7 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img src={item.imageUrl} alt={item.product} className="w-10 h-10 object-cover" />
                      {item.product}
                    </Table.Cell>
                    <Table.Cell>{item.brand}</Table.Cell>
                    <Table.Cell>{item.stock}</Table.Cell>
                    <Table.Cell>{item.sales}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>
                      <div
                        onClick={() => toggleStatus(index)}
                        className={`relative w-11 h-6 cursor-pointer rounded-full ${
                          statuses[index] ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] bg-white border border-blue-300 rounded-full h-5 w-5 transition-all ${
                            statuses[index] ? 'translate-x-full' : ''
                          }`}
                        ></div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="relative" ref={dropdownRefs.current[index]}>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="focus:outline-none"
                        >
                          <BsThreeDots />
                        </button>
                        {dropdownOpen[index] && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <ul>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 1</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 2</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 3</li>
                            </ul>
                          </div>
                        )}
                      </div>
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
      </div>
    </>
  );
};

