import React, { useState } from 'react'
import { FiSearch, FiBell } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";

export function Header({ header, user = { name: "Name", role: "Admin" } }) {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-2xl">
      <div className="flex justify-between items-center border-b border-line pb-6 gap-2">
        <h1 className="text-2xl font-bold">
          {header}
        </h1>

        <div className="flex items-center gap-4 w-full md:justify-end">

          <div className="relative w-full md:w-[50%] max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full">
            <LuMessageCircleMore size={20} />
          </button>

          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full">
            <FiBell size={20} />
          </button>

          {/* PROFILE */}
          <div className="flex items-center gap-2 pl-2 border-l">
            <img
              src="/images/customer_outline.png"
              alt="profile"
              className="w-8 rounded-full"
            />

            <div className="hidden md:flex md:flex-col leading-tight">
              <div className="font-semibold text-sm">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">
                {user.role}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}