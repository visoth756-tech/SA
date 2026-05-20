import React from 'react'
import Header from '../components/home/Header';
import Homepage     from '../pages/home/homepage/Homepages';
import ProductPages from '../pages/home/products/ProductPages';
import ReviewPages  from '../pages/home/reviews/ReviewPages';
import ServiewPages from '../pages/home/services/ServicePages';

function MainLayout() {
  return (
    <div className="scroll-smooth font-Inter bg-app">
      <Header />
      <Homepage />
      <ProductPages />
      <ReviewPages />
      <ServiewPages />
    </div>)
}

export default MainLayout