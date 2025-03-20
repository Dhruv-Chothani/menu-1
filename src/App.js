import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
  );
};

export default App;
