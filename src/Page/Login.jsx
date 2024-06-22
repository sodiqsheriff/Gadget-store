import React from 'react';
import { Link } from 'react-router-dom'; // Correct import from react-router-dom
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export const Login =()=> {


  return (
    <div className="flex flex-row w-full h-screen">
      <div className="hidden md:flex justify-center p-4 md:p-8 w-full h-full bg-[#2563EB]">
        {/* Add your background image here if needed */}
      </div>
      <div className="w-full bg-white m-auto items-center font-inter p-4">
      <form className="flex max-w-md flex-col gap-4">
      <h1 class="font-inter font-bold text-2xl">Sign In to your Account</h1> 
      <h2 class="font-inter font-400 text-sm text-[#64748B] pt-3 pb-7">Welcome back! please enter your detail</h2>
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
      <div className="flex items-center gap-5 justify-between ">
        <div className="">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className='-mt-10'>Remember me</Label>
        </div>
        <Link to="/reset" className='text-sm text-[#2563EB] font-semibold'>Forget Password?</Link>
      </div>
      <Link to='../_Component/Product.jsx' className='w-full text-center text-white font-semibold p-2 rounded-md bg-[#2563EB]'>
       Login 
        </Link>
    </form>
      </div>
    </div>
  );
};

