import React from "react";
import { Link } from "react-router-dom"; // Correct import from react-router-dom
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export const Login = () => {
  return (
    <div className="flex flex-row w-full h-screen bg-white">
      <div className="hidden lg:flex justify-center p-4 md:p-8 w-full h-full bg-[#2563EB]">
        {/* Add your background image here if needed */}
      </div>
      <div className="w-full bg-white m-auto items-center font-inter p-4">
        <form className="flex max-w-md flex-col max-h-screen md:max-w-2xl lg:max-w-md gap-4">
          <h1 class="font-inter font-bold text-2xl">Sign In to your Account</h1>
          <h2 class="font-inter font-400 text-sm text-[#64748B] pt-3 pb-7">
            Welcome back! please enter your detail
          </h2>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="Email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-1  ">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="">
              Remember me
            </Label>
          </div>
          <Link
            to="/dashboard"
            className="w-full text-center text-white font-semibold p-2 rounded-md bg-[#2563EB]"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};
