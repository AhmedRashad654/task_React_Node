import React from "react";
import Navbar from "./componant/ui/Navbar";
import Footer from "./componant/ui/Footer";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
