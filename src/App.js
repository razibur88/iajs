import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Data from "./pages/Data";
import About from "./pages/About";
import Todopage from "./pages/Todopage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<Data />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todopage />} />
      </Routes>
    </>
  );
}
export default App;
