import Header from "./Header";
import {Outlet} from "react-router-dom";
import React from 'react'
import Footer from "./Footer";

const Layout = () => {
  return (
    <main>
      <Header></Header>
      <Outlet />
      <Footer/>
    </main>
  )
}

export default Layout
