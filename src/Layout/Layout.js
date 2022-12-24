import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartBack from "../components/CartBack/CartBack";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/cartback" element={<CartBack />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
