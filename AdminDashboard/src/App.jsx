import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import EditProduct from "./pages/EditProduct";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/editProduct" element={<EditProduct />}></Route>
    </Routes>
  )
};

export default App;
