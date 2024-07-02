import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://your-api-endpoint/login",
        {
          email,
          password,
        }
      );
      // Assuming your API returns a token upon successful login
      const token = response.data.token;
      // Store token in localStorage or session storage
      localStorage.setItem("token", token);
      // Redirect to dashboard or set logged in state in your app
      // Replace with your navigation logic
      window.location.href = "/dashboard";
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-row w-full h-screen bg-white">
      {/* Your background image container */}
      <div className="hidden lg:flex justify-center p-4 md:p-8 w-full h-full bg-[#2563EB]">
        {/* Add your background image here if needed */}
      </div>

      {/* Login form */}
      <div className="w-full bg-white m-auto items-center font-inter p-4">
        <form
          className="flex max-w-md flex-col max-h-screen md:max-w-2xl lg:max-w-md gap-4"
          onSubmit={handleLogin}
        >
          <h1 className="font-inter font-bold text-2xl">
            Sign In to your Account
          </h1>
          <h2 className="font-inter font-400 text-sm text-[#64748B] pt-3 pb-7">
            Welcome back! please enter your details
          </h2>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Email"
              required
              value={email}
             
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              value={password}
              
            />
          </div>
          <div className="flex items-center gap-1">
            <Checkbox
              id="remember"
              checked={rememberMe}
              
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full text-center text-white font-semibold p-2 rounded-md bg-[#2563EB]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
