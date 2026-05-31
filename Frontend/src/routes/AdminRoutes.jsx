import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Category from '../pages/admin/category/category';
import { Menu } from '../pages/admin/menu/Menu';
import { Order } from '../pages/admin/order/Order';
import { Customer } from '../pages/admin/customer/Customer';
import User from '../pages/admin/user/User';

function AdminRoutes() {
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState([]);

  const loadCategory = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchOnMount = async () => {
      await loadCategory();
    };
    fetchOnMount();
  }, []);

  const loadCustomer = async () => {
    try {
      const res = await axios.get("/api/customers");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchOnMount = async () => {
      await loadCustomer();
    };
    fetchOnMount();
  }, []);

  const categoryList = category.list || [];
  const customerList = user.list || [];
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />

      <Route path="category" element={
        <Category
          category={category}
          categoryList={categoryList}
          loadCategory={loadCategory}
        />}
      />

      <Route path="menu" element={
        <Menu
          categoryList={categoryList}
        />}
      />

      <Route path="order" element={<Order />} />

      <Route path="customer" element={
        <Customer
          customerList={customerList}
          loadCustomer={loadCustomer}
        />}
      />

      <Route path="user" element={<User />} />

    </Routes>)
}

export default AdminRoutes