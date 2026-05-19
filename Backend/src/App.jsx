import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './pages/dashboard/Dashboard';
import { Menu } from './pages/menu/Menu';
import { Order } from './pages/order/Order';
import { Customer } from './pages/customer/Customer';
import { NotFound } from './components/NotFound';
import IDK from './components/IDK';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="menu" element={<Menu />} />
      <Route path="order" element={<Order />} />
      <Route path="customer" element={<Customer />} />

      <Route path="idk" element={<IDK />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
