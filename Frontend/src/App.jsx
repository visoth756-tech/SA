import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import LoginAccount from './pages/auth/LoginAccount';
import CreateAccount from './pages/auth/CreateAccount';
import Dashboard from './pages/admin/dashboard/Dashboard';
import { Customer } from './pages/admin/customer/Customer';
import { Menu } from './pages/admin/menu/Menu';
import { Order } from './pages/admin/order/Order';
import Category from './pages/admin/category/category';
import NotFound from './components/common/NotFound';

export function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/categories');
      setList(response.data.list)
    }
    fetchAppData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route path="/auth/login" element={<LoginAccount />} />
        <Route path="/auth/createAcc" element={<CreateAccount />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/category" element={<Category list={list} />} />
        <Route path="/admin/menu" element={<Menu />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/customer" element={<Customer />} />

        {/* <Route path="idk" element={<IDK />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
