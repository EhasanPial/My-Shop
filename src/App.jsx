import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import Order from "./page/order/Order";
import Cart from "./page/cart/Cart";
import Dashboard from "./page/admin/dashboard/Dashboard";
import NoPage from "./page/nopage/Nopage";
import MyState from "./context/data/myState";
import AllProducts from "./page/allproducts/Allproducts";
import Login from "./page/registration/Login";
import Signup from "./page/registration/Signup";
import ProductInfo from "./page/productInfo/ProductInfo";
import AddProduct from "./page/admin/pages/AddProduct";
import UpdateProduct from "./page/admin/pages/UpdateProduct";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
