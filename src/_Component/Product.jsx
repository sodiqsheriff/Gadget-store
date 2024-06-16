import { NavigationBar } from './Navbar'
import { SideNav } from './SideNav'
import React from 'react'

export const Product = () => {
  return (
    <div className="flex flex-col">
       <NavigationBar />
        <SideNav />
        <div className="flex flex-col pt-28">
           <h1 className="text-5xl">Sheriff</h1>
        </div>
    </div>
  )
}
