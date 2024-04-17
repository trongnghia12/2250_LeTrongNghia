import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import AdminDonHang from './components/AdminDonHang';
import AdminTaiKhoan from './components/AdminTaiKhoan';
import Checkout from './components/Checkout';
import OderTC from './components/OderTC';
import TDDonHang from './components/TDDonHang';

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admindh" element={<AdminDonHang />} />
          <Route path="/admintk" element={<AdminTaiKhoan />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tc" element={<OderTC />} />
          <Route path="/td" element={<TDDonHang />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
