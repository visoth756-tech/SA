import React from 'react'
import './MainLayout.css'
import Header from '../components/home/Navbar';
import Homepage from '../pages/home/homepage/Homepages';

function MainLayout() {
  return (
    <div className="scroll-smooth font-Inter bg-app">
      <Header />
      <Homepage />
    </div>)
}

export default MainLayout