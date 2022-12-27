import "./App.css";
import { CartProvider } from "./context/CartProvider";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartBack from "./components/CartBack/CartBack";
import Home from "./Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  

  return (
    <CartProvider>
      <div className="container">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartback" element={<CartBack />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
