import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Setting from "./Routes/Setting/Setting";
import Analytics from "./Routes/Analytics/Analytics";
import Product from "./Routes/Product/Product";
import ProductsList from "./Routes/Products/ProductsList";
import AddProducts from "./Routes/Products/AddProducts";
import EditProducts from "./Routes/Products/EditProducts";
import Read from "./Routes/Products/Read";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/productslist" element={<ProductsList />}></Route>
          <Route path="/addproducts" element={<AddProducts />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/editproducts/:id" element={<EditProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
