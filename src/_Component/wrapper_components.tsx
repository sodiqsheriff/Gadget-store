import React from "react";
import { NavigationBar } from "./Navbar"
import { SideNav } from "./SideNav"


export const Wrapper = ({children, pageTitle}) => {

    return (
        <>
            <NavigationBar pageTitle= {pageTitle} />
            <div className="flex flex-wrap">
                <SideNav />
                <div className="flex flex-col bg-[] w-full z-5 lg:ml-[250px] lg:mt-16  pt-5 px-4">
                    {children}
                </div>
            </div>
        </>
    );
}