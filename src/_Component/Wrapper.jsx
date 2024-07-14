import { Footer } from "../_Component/Footer";
import React from "react";
import { NavigationBar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Wrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
        <Outlet/>
      <Footer />
    </>
  );
};
