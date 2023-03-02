import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home.jsx";
import SelectFlight from "../components/selectFlight/SelectFlight.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<SelectFlight />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
