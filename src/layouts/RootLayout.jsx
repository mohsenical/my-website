import React from 'react'
import { Outlet } from "react-router-dom";

import Header from "../components/modules/Header/Header";
import Footer from '../components/modules/Footer/Footer';

function RootLayout() {
  return (
    <>
        <Header />
        
        <Outlet />
        
        <Footer /> 
    </>
  )
}

export default RootLayout