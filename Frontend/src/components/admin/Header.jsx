import React from 'react'

export function Header({ header }) {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex justify-between items-center border-b border-line pb-6 gap-2">

        {/* Title */}
        <h1 className="text-2xl font-bold">
          {header}
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4 w-full md:justify-end">

          {/* Search (always visible but responsive width) */}
          <div className="relative w-full md:w-[50%] max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-200 
          focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            <img
              src="/images/search_outline.png"
              className="w-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
            />
          </div>

          {/* Chat (hide on small) */}
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full">
            <img src="/images/chat.png" className="w-6" />
          </button>

          {/* Bell (hide on small) */}
          <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-full">
            <img src="/images/bell.png" className="w-6" />
          </button>

          {/* Profile (hide on small) */}
          <div className="flex items-center gap-2 pl-2 border-l">
            <img src="/images/customer_outline.png" className="w-8 rounded-full" />

            <div className="hidden md:flex md:flex-col leading-tight">
              <div className="font-semibold text-sm">Name</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
