import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="flex-1 my-5 mx-auto w-[80%]">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
