import React from 'react';
import ChildComponent from "../_Component/ChildComponent";
import { Email } from "../_Component/Svg_icon.tsx";
import {Background} from "../_Component/Svg_icon.tsx";
import { TextInput, Button } from 'flowbite-react';
import { Link } from "react-router-dom";
export const Reset = () => {
  return (
    <>
       <div className="flex flex-row w-full h-[100vh]">
      <div className="hidden md:flex justify-center p-4 md:p-8 w-full h-full bg-[#2563EB]">
       <ChildComponent icon={Background} className="max-w-[20em]"/>
      </div>
      <div className="w-full bg-white m-auto items-center font-inter p-4">
        <form className="max-w-sm sm:mx-auto md:m-0 items-center">
          <h1 className="font-inter font-bold text-2xl">Reset your password</h1>
          <h2 className="font-inter font-400 text-sm text-[#64748B] pt-3 pb-3">
            Enter the email address associated with your account and we will send you a link to reset your password.
          </h2>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <ChildComponent icon={Email} />
            </div>
            <TextInput
              id="email-address-icon"
              className="font-inter text-sm rounded-lg block w-full ps-10 p-2.5 placeholder-gray-400 text-white"
              placeholder="Email"
            />
          </div>
          <Button
            type="submit"
            className="mt-5 text-white bg-[#2563EB] hover:bg-blue-600 focus:ring-4 focus:outline-none  font-semibold rounded-lg text-sm w-full px-5  text-center"
          >
            Continue
          </Button>
          <div className="flex justify-center text-sm mt-5">
            <Link to="/" className="text-[#2563eb] font-semibold">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
