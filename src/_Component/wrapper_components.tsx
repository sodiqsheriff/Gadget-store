import React from "react";
import { NavigationBar } from "./Navbar"
import { SideNav } from "./SideNav"


export const Wrapper = ({children}) => {

    return (
        <>
            <NavigationBar pageTitle="Overview" />
            <div className="flex flex-wrap">
                <SideNav />
                <div className="flex flex-col bg-[] w-full z-5 lg:ml-[250px] lg:mt-16 mt-28p pt-5 px-4">
                    {children}
                </div>
            </div>
        </>
    );
}