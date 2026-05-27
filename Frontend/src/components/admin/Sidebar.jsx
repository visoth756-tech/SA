import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

import React from 'react'

function Sidebar() {
  const navItems = [
    { to: "/admin", icon: "dashboard", label: "Dashboard" },
    { to: "/admin/category", icon: "menu", label: "Category" },
    { to: "/admin/menu", icon: "menu", label: "Product" },
    { to: "/admin/order", icon: "order", label: "Order" },
    { to: "/admin/customer", icon: "customer", label: "Customer" },
  ];

  const iconType = (name, isActive) =>
    `/images/${name}_${isActive ? "fill" : "outline"}.png`;
  const iconSize = "w-5 lg:w-6";

  const [active, setActive] = useState("light");

  const btnClass = (type) => {
    return [
      "flex items-center gap-2",
      "py-2 lg:py-3",
      "px-4 lg:px-6",
      "rounded-2xl",
      "text-sm lg:text-base",
      "transition-all duration-200",
      active === type
        ? "bg-white shadow-md"
        : "opacity-50 hover:opacity-100",
    ].join(" ");
  };

  return (
    <div
      className="
        sticky top-0 h-screen shrink-0
        w-18 md:w-20 lg:w-auto
        flex flex-col justify-between
        transition-all duration-300
      "
    >
      {/* TOP */}
      <div className="flex flex-col space-y-4 flex-1">
        <NavLink to="/admin" className="flex flex-col gap-4 lg:gap-6">
          <img
            src="/images/logo.png"
            className="w-14 lg:w-46"
          />

          <div className="hidden lg:block text-sm text-gray-500">
            Main Menu
          </div>
        </NavLink>

        <div className="nav pt-2 lg:pt-3">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end>
              {({ isActive }) => (
                <div className={`nav-items ${isActive ? "nav-border" : ""}`}>
                  <img
                    src={iconType(item.icon, isActive)}
                    className={iconSize}
                  />

                  <div className="hidden lg:block">
                    {item.label}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="space-y-2 lg:space-y-3 nav mb-6 lg:mb-14">
        {/* <NavLink to="/idk">
          {({ isActive }) => (
            <div
              className={
                isActive ? "nav-items nav-border" : "nav-items"
              }
            >
              <img
                src={iconType("help", isActive)}
                className={iconSize}
              />

              <div className="hidden lg:block">
                Help & Support
              </div>
            </div>
          )}
        </NavLink>

        <NavLink to="/idk">
          {({ isActive }) => (
            <div
              className={
                isActive ? "nav-items nav-border" : "nav-items"
              }
            >
              <img
                src={iconType("contact", isActive)}
                className={iconSize}
              />

              <div className="hidden lg:block">
                Contact Center
              </div>
            </div>
          )}
        </NavLink> */}

        <div
          className="
            flex justify-center lg:justify-around
            bg-[#F9F9F9]
            rounded-2xl
            p-2
            w-fit
            mx-auto lg:mx-0
          "
        >
          <button
            onClick={() => setActive("light")}
            className={btnClass("light")}
          >
            <img
              src={iconType("sun", active === "light")}
              className={iconSize}
            />

            <span className="hidden lg:block">
              Light
            </span>
          </button>

          <button
            onClick={() => setActive("dark")}
            className={btnClass("dark")}
          >
            <img
              src={iconType("moon", active === "dark")}
              className={iconSize}
            />

            <span className="hidden lg:block text-gray-500">
              Dark
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar