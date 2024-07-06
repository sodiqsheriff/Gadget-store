import { Footer } from '../_Component/Footer'
import React from 'react'
import { NavigationBar } from './Navbar';

export const Wrapper = ({children}) => {
  return (
    <>
    <NavigationBar />
     {children}
    <Footer />
    </>
  );
}
