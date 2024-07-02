import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Page/Login.jsx"; // Ensure this matches the exact file name
import { Reset } from "./Page/Reset.jsx";
import { Dashboard } from "./Page/Dashboard.jsx";
import { Categories } from "./Page/categories/Categories.jsx";
import { Product } from "./Page/Product.jsx";
import { Order } from "./Page/Order.jsx";
import { Report } from "./Page/Report.jsx";
import { Customer } from "./Page/Customer.jsx";
import { NotFound } from "./_Component/NotFound.jsx"; // Ensure this component exists
import { AddProduct } from "./Page/AddProduct.jsx"; 
import { ViewProduct } from "./Page/ViewProduct.jsx";
import { EditProduct } from "./Page/EditProduct.jsx";
import { ViewCategories } from "./Page/ViewCategories.jsx";
import { AddCategories } from "./Page/categories/AddCategories.jsx";

import { EditCategories } from "./Page/categories/EditCategories.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/report" element={<Report />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addcategories" element={<AddCategories />} />
        <Route path="/viewcategories" element={<ViewCategories />} />
        <Route path="/editcategories" element={<EditCategories />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
