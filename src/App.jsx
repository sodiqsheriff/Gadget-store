import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './_Auth/Login.jsx';
import { NotFound } from './_Component/NotFound';
import { Reset } from './_Auth/Reset';
import { Home } from './Pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
