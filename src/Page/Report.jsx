import React from "react";
import { NavigationBar } from "../_Component/Navbar";
import { SideNav } from "../_Component/SideNav";
import { Button, Dropdown } from "flowbite-react";
export const Report = () => {
  return (
    <>
      <NavigationBar pageTitle="Report" />
      <div className="flex flex-row">
        <SideNav />
        <div className="py-3 px-6 :border-gray-700 w-full bg-[#F8FAFC]">
          <div className="flex justify-between py-5">
            <div className="flex flex-col">
              <Dropdown label="31 Nov - 31 Dec" className="bg-white shadow-2xl border-gray-400 text-black font-bold" inline>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>

            </div>
            <div className="flex flex-col">
              <Button
                type="Button"
                className="text-white bg-[#2563EB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Default
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full rounded-lg p-4 bg-white">
            <div className="flex flex-col w-full max-w-full lg:max-w-[13.5rem]">
              <div className="flex items-center max-w-full lg:max-w-[12rem] justify-between pb-5">
                <h1 className="text-sm font-semibold text-[#64748B]">
                  Revenue
                </h1>
                {/* <img
                  src="./assets/media/images/svg_icons/arrows-diagonal.svg"
                  alt="arrows"
                /> */}
              </div>
              <div className="flex items-center max-w-full lg:max-w-[12rem] dark:bg-gray-800">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-2xl">₦17,175.66</h1>
                    {/* <img
                      src="./assets/media/images/svg_icons/Frame4.svg"
                      alt="frame"
                    /> */}
                  </div>
                  <h1 className="font-medium text-sm text-[#64748B]">
                    Last week 84,70K
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-0.5 lg:m-auto lg:h-14">
              <div className="w-full lg:w-0.5 h-full bg-[#E2E8F0]"></div>
            </div>
            <div className="flex flex-col w-full max-w-full lg:max-w-[13.5rem]">
              <div className="flex items-center max-w-full lg:max-w-[12rem] justify-between pb-5">
                <h1 className="text-sm font-semibold text-[#64748B]">
                  Products
                </h1>
                {/* <img
                  src="./assets/media/images/svg_icons/arrows-diagonal.svg"
                  alt="arrows"
                /> */}
              </div>
              <div className="flex items-center max-w-full lg:max-w-[12rem] dark:bg-gray-800">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-2xl">240</h1>
                    {/* <img
                      src="./assets/media/images/svg_icons/Frame41.svg"
                      alt="frame"
                    /> */}
                  </div>
                  <h1 className="font-medium text-sm text-[#64748B]">
                    Last week 242,99K
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-0.5 lg:m-auto lg:h-16">
              <div className="w-full lg:w-0.5 h-full bg-[#E2E8F0]"></div>
            </div>
            <div className="flex flex-col w-full max-w-full lg:max-w-[13.5rem]">
              <div className="flex items-center max-w-full lg:max-w-[12rem] justify-between pb-5">
                <h1 className="text-sm font-semibold text-[#64748B]">
                  Customers
                </h1>
                {/* <img
                  src="./assets/media/images/svg_icons/arrows-diagonal.svg"
                  alt="arrows"
                /> */}
              </div>
              <div className="flex items-center max-w-full lg:max-w-[12rem] dark:bg-gray-800">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-2xl">1.2K</h1>
                    {/* <img
                      src="./assets/media/images/svg_icons/Frame43.svg"
                      alt="frame"
                    /> */}
                  </div>
                  <h1 className="font-medium text-sm text-[#64748B]">
                    Last week 1.18M
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-0.5 lg:m-auto lg:h-16">
              <div className="w-full lg:w-0.5 h-full bg-[#E2E8F0]"></div>
            </div>
            <div className="flex flex-col w-full max-w-full lg:max-w-[13.5rem]">
              <div className="flex items-center max-w-full lg:max-w-[12rem] justify-between pb-5">
                <h1 className="text-sm font-semibold text-[#64748B]">Orders</h1>
                {/* <img
                  src="./assets/media/images/svg_icons/arrows-diagonal.svg"
                  alt="arrows"
                /> */}
              </div>
              <div className="flex items-center max-w-full lg:max-w-[12rem] dark:bg-gray-800">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-2xl">430</h1>
                    {/* <img
                      src="./assets/media/images/svg_icons/Frame44.svg"
                      alt="frame"
                    /> */}
                  </div>
                  <h1 className="font-medium text-sm text-[#64748B]">
                    Last week 950K
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start w-full gap-4 py-6">
            <div className="flex flex-col w-full lg:w-4/5 h-full max-h-[23rem] rounded-lg bg-white px-4 py-5">
              <div className="flex items-center justify-between pb-7">
                <div className="flex flex-col pt-5">
                  <h1 className="flex items-center gap-1 font-medium text-sm text-[#64748B]">
                    Sales Performance
                    {/* <img
                      src="./assets/media/images/svg_icons/alert-circle.svg"
                      className="w-4 h-4"
                      alt="alert"
                    /> */}
                  </h1>
                  <Button id="toggle-menu" className="focus:outline-none">
                    {/* <img
                      src="./assets/media/images/svg_icons/menu-horizontal.svg"
                      className="w-4 h-4"
                      alt="menu"
                    /> */}
                  </Button>
                </div>
                <Button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-xs text-[#64748B] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border border-[#F1F5F9] px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="Button"
                >
                  Impresssions
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
                </Button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <img
                src="./assets/media/images/svg_icons/saleschart.svg"
                className="w-full"
                alt="sales chart"
              /> */}
            </div>
            <div className="flex flex-col justify-between w-full lg:w-2/5 h-full max-h-[23rem] rounded-lg bg-white p-4">
              <div className="flex items-center pb-10">
                <h1 className="text-md text-[#0F172A] font-bold">
                  Total Earnings
                </h1>
                {/* <img
                  src="./assets/media/images/svg_icons/alert-circle.svg"
                  alt="alert"
                /> */}
              </div>
              <div className="flex justify-center">
                {/* <img
                  src="./assets/media/images/svg_icons/earnings.svg"
                  alt="earnings"
                /> */}
              </div>
              <div className="flex items-center justify-between pt-7">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#2563EB] rounded"></div>
                  <h1 className="text-semibold text-xs text-[#64748B]">
                    Completed: <b className="text-black text-semibold">2300</b>
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#38BDF8] rounded"></div>
                  <h1 className="text-semibold text-xs text-[#64748B]">
                    Pending: <b className="text-black text-semibold">274</b>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center w-full gap-4 py-6">
            <div className="flex flex-col w-full h-full max-h-[23rem] bg-white rounded-lg p-5">
              <div className="flex items-center justify-between pb-6">
                <h1 className="flex items-center gap-1 font-medium text-sm text-[#64748B]">
                  Audience Insight
                  {/* <img
                    src="./assets/media/images/svg_icons/alert-circle.svg"
                    className="w-4 h-4"
                    alt="alert"
                  /> */}
                </h1>
                <Button id="toggle-menu" className="focus:outline-none">
                  {/* <img
                    src="./assets/media/images/svg_icons/menu-horizontal.svg"
                    className="w-4 h-4"
                    alt="menu"
                  /> */}
                </Button>
              </div>
              {/* <img
                src="./assets/media/images/svg_icons/audiencechart.svg"
                alt="audience chart"
              /> */}
              <div className="flex justify-center w-full">
                <div className="flex max-w-[22rem] gap-10 pt-5">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#2563EB] rounded"></div>
                    <h1 className="text-semibold text-xs text-[#64748B]">
                      Men
                    </h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#38BDF8] rounded"></div>
                    <h1 className="text-semibold text-xs text-[#64748B]">
                      Woman
                    </h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#38BDF8] rounded"></div>
                    <h1 className="text-semibold text-xs text-[#64748B]">
                      Not Specific
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full max-h-[23rem] bg-white rounded-lg p-5">
              <div className="flex items-center justify-between pb-5">
                <h1 className="flex items-center gap-1 font-medium text-sm text-[#64748B]">
                  Sales Location
                  {/* <img
                    src="./assets/media/images/svg_icons/alert-circle.svg"
                    className="w-4 h-4"
                    alt="alert"
                  /> */}
                </h1>
                <Button id="toggle-menu" className="focus:outline-none">
                  {/* <img
                    src="./assets/media/images/svg_icons/menu-horizontal.svg"
                    className="w-4 h-4"
                    alt="menu"
                  /> */}
                </Button>
              </div>
              {/* <img
                src="./assets/media/images/svg_icons/location.svg"
                alt="location"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
