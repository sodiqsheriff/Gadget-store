import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from './_Component/NotFound';
import { Home } from './Pages/Home.jsx'
import { Cart } from './Pages/Cart.jsx';
import { Checkout } from './Pages/Checkout.jsx';
import { Shop_Details } from './Pages/shop/Shop_Details.jsx';
import { Order_tracking } from './Pages/Order_tracking.jsx';
import { About } from './Pages/About.jsx';
import { Account } from './Pages/Account.jsx';
import { Wrapper } from './_Component/Wrapper.jsx';
import { Login } from './Pages/auth/Login.jsx';
import { Reset } from './Pages/auth/Reset.jsx';
import { ShopList } from './Pages/shop/ShopList.jsx';
import { Shop } from './Pages/shop/Shop.jsx';
import { Contact } from './Pages/Contact.jsx';
import { SearchProvider } from './contexts/SearchContext.jsx';
// import { Reset } from './auth/Reset.jsx';

function App() {
  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route  path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />

        <Route path='/' element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shoplist" element={<ShopList />} />
          <Route path="shopdetails" element={<Shop_Details />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ordertracking" element={<Order_tracking />} />
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<Wrapper />} >
          <Route path="*" element={<NotFound />} />
        </Route>
       

      </Routes>
    </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
