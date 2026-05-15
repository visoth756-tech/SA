import { NavLink } from "react-router";
import "./Sidebar.css";
import { useState } from "react";

export function Sidebar() {
  const icon = (name, isActive) =>
    `images/${name}_${isActive ? "fill" : "outline"}.png`;

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
        sticky top-0
        h-screen
        shrink-0
        w-20 lg:w-64
        flex flex-col justify-between
        transition-all duration-300
      "
    >
      {/* TOP */}
      <div className="flex flex-col space-y-4 flex-1">
        <div className="flex flex-col gap-4 lg:gap-6">
          <img
            src="images/logo.png"
            className="w-14 lg:w-52 xl:w-60"
          />

          <div className="hidden lg:block text-sm text-gray-500">
            Main Menu
          </div>
        </div>

        <div className="nav pt-2 lg:pt-3">
          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={
                  isActive ? "nav-items nav-border" : "nav-items"
                }
              >
                <img
                  src={icon("dashboard", isActive)}
                  className="w-5 lg:w-6"
                />

                <div className="hidden lg:block">
                  Dashboard
                </div>
              </div>
            )}
          </NavLink>

          <NavLink to="/menu">
            {({ isActive }) => (
              <div
                className={
                  isActive ? "nav-items nav-border" : "nav-items"
                }
              >
                <img
                  src={icon("menu", isActive)}
                  className="w-5 lg:w-6"
                />

                <div className="hidden lg:block">
                  Menu
                </div>
              </div>
            )}
          </NavLink>

          <NavLink to="/order">
            {({ isActive }) => (
              <div
                className={
                  isActive ? "nav-items nav-border" : "nav-items"
                }
              >
                <img
                  src={icon("order", isActive)}
                  className="w-5 lg:w-6"
                />

                <div className="hidden lg:block">
                  Order
                </div>
              </div>
            )}
          </NavLink>

          <NavLink to="/customer">
            {({ isActive }) => (
              <div
                className={
                  isActive ? "nav-items nav-border" : "nav-items"
                }
              >
                <img
                  src={icon("customer", isActive)}
                  className="w-5 lg:w-6"
                />

                <div className="hidden lg:block">
                  Customer
                </div>
              </div>
            )}
          </NavLink>

          <div className="my-4 lg:my-5 border border-gray-300"></div>

          <div className="hidden lg:block text-sm text-gray-500">
            Others
          </div>

          <NavLink to="/idk">
            {({ isActive }) => (
              <div
                className={
                  isActive ? "nav-items nav-border" : "nav-items"
                }
              >
                <img
                  src={icon("setting", isActive)}
                  className="w-5 lg:w-6"
                />

                <div className="hidden lg:block">
                  Advance Settings
                </div>
              </div>
            )}
          </NavLink>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="space-y-2 lg:space-y-3 nav mb-6 lg:mb-14">
        <NavLink to="/idk">
          {({ isActive }) => (
            <div
              className={
                isActive ? "nav-items nav-border" : "nav-items"
              }
            >
              <img
                src={icon("help", isActive)}
                className="w-5 lg:w-6"
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
                src={icon("contact", isActive)}
                className="w-5 lg:w-6"
              />

              <div className="hidden lg:block">
                Contact Center
              </div>
            </div>
          )}
        </NavLink>

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
              src={icon("sun", active === "light")}
              className="w-5 lg:w-6"
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
              src={icon("moon", active === "dark")}
              className="w-5 lg:w-6"
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