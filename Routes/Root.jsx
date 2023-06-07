import React from "react";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
