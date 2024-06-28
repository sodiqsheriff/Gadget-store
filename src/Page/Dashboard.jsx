import React from 'react'
import { NavigationBar } from  '../_Component/Navbar';
import { SideNav } from '../_Component/SideNav';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
export const Dashboard = () => {
  return (
    <>
      <NavigationBar pageTitle='Overview' />
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col bg-[#F8FAFC] w-full">
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
            <h1 className="font-medium text-sm text-[#64748B]">Overall revenue</h1>
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-lg text-[#0F172A]">₦48,574.21</h1>
              <h1 className="text-xs font-medium text-[#24D164]">+20%</h1>
            </div>
          </div>
          <Link
            to="#"
            id="dropdownDefaultButtonRevenue"
            data-dropdown-toggle="dropdownRevenue"
            className="text-xs text-[#64748B]  focus:ring-4 focus:outline-none  font-medium rounded-lg border border-[#F1F5F9] px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            This year
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
          {/* Dropdown menu for Revenue */}
          <Dropdown
            id="dropdownRevenue"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            toggleButton="#dropdownDefaultButtonRevenue"
          >
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButtonRevenue">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Settings</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Earnings</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Sign out</Link></li>
            </ul>
          </Dropdown>
        </div>
        {/* <img src="./assets/media/images/svg_icons/mainchart.svg" className="w-full" alt="Main Chart" /> */}
      </div>
      
      {/* User Activity Block */}
      <div className="block rounded-lg bg-white p-4">
        <div className="flex items-center justify-between pb-7">
          <div className="flex flex-col pt-5">
            <h1 className="font-medium text-sm text-[#64748B]">User activity</h1>
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-lg text-[#0F172A]">10,320</h1>
              <h1 className="text-xs font-medium text-[#ED4F9D]">-20%</h1>
            </div>
          </div>
          <Link
            to="#"
            id="dropdownDefaultButtonActivity"
            data-dropdown-toggle="dropdownActivity"
            className="text-xs text-[#64748B] focus:ring-4 focus:outline-none  font-medium rounded-lg border border-[#F1F5F9] px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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
          <Dropdown
            id="dropdownActivity"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            toggleButton="#dropdownDefaultButtonActivity"
          >
            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButtonActivity">
              <li><Link to="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Dashboard</Link></li>
              <li><Link to="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Settings</Link></li>
              <li><Link to="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Earnings</Link></li>
              <li><Link to="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Sign out</Link></li>
            </ul>
          </Dropdown>
        </div>
        {/* <img src="./assets/media/images/svg_icons/user chart.svg" className="w-full" alt="User Chart" /> */}
      </div>
    </div>
        </div>
        </div>
      </div>
    </>
  )
}


// new arrival /category ... latest 10 under that category
//