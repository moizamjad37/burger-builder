import React from 'react';
import './App.css';
import Navbar from "./navbar/Navbar"
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Orders } from './pages/Orders'
import { DeliveryAddress } from './pages/DeliveryAddress';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/delivery-address" element={<DeliveryAddress/>} />
    </Routes>
    </>
  );
}

export default App;
