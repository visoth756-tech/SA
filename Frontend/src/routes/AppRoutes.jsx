import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import LoginAccount from '../pages/auth/LoginAccount';
import CreateAccount from '../pages/auth/CreateAccount';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import { Customer } from '../pages/admin/customer/Customer';
import { Menu } from '../pages/admin/menu/Menu';
import { Order } from '../pages/admin/order/Order';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route path="/auth/login" element={<LoginAccount />} />
        <Route path="/auth/createAcc" element={<CreateAccount />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/menu" element={<Menu />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/customer" element={<Customer />} />

        {/* <Route path="idk" element={<IDK />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes