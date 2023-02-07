import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorPage from "./../Page/CalculatorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
