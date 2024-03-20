import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

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
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteAdmin>
                <AddProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteAdmin>
                <UpdateProduct />
              </ProtectedRouteAdmin>
            }
          />

          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

//user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

//admin
const ProtectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "ehashan.pial@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
