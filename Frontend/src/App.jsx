import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/common/NotFound';
import AuthRoutes from './routes/AuthRoutes';
import AdminRoutes from './routes/AdminRoutes';
import MainRoutes from './routes/MainRoutes';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
