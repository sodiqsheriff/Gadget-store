import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './Page/Login.jsx'; // Ensure this matches the exact file name
import {Reset} from './Page/Reset.jsx';
import {Categories} from './Page/Categories.jsx';
import {Product} from './Page/Product.jsx';
// import NotFound from './_Component/NotFound.jsx'; // Ensure this component exists

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
