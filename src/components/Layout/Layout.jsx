import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Modal />
    </>
  );
}
