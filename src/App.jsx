import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Auth/LoginPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
