import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import ProductPages from '../pages/home/products/ProductPages'
import ProductDetail from '../pages/home/products/ProductDetail'
import CheckoutPage from '../pages/home/checkout/CheckoutPage'
import CartItem from '../pages/home/checkout/CartItem'
import Payment from '../pages/home/checkout/payment'
import OrderPage from '../pages/home/order/OrderPage'

function MainRoutes() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />} />
      <Route path="product" element={<ProductPages />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="cart-item" element={<CartItem />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="payment" element={<Payment />} />
      <Route path="orderpage" element={<OrderPage />} />
    </Routes>
  )
}

export default MainRoutes