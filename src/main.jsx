import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './_Component/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
      </CartProvider>

);
