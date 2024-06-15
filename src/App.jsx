import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './Page/Login.jsx'; // Ensure this matches the exact file name
import {Register} from './_Component/Signup.jsx';
// import Report from './_Component/Report.js';
// import Customer from './_Component/Customer.jsx';
import {Product} from './_Component/Product.jsx';
// import NotFound from './_Component/NotFound.jsx'; // Ensure this component exists

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Route path="/report" element={<Report />} /> */}
        {/* <Route path="/customer" element={<Customer />} /> */}
        <Route path="/product" element={<Product />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
