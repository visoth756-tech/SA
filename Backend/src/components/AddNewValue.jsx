import React from 'react'

function AddNewValue({ title }) {
  return (
    <div className="flex flex-col justify-between gap-4 bg-white p-4 lg:p-5 rounded-2xl border border-line shadow-sm">
      <div className="flex items-center gap-3 min-w-0">
        <img
          src="images/add_coffee_outline.png"
          className="w-9 h-9 lg:w-10 lg:h-10 bg-[#F0EDEB] rounded-lg p-2 shrink-0"
        />

        <div className="min-w-0">
          <div className="text-base lg:text-lg font-medium truncate">
            New {title}
          </div>

          <div className="truncate text-xs lg:text-sm text-gray-400">
            Create new {title}
          </div>
        </div>
      </div>

      <button className="bg-primary hover:opacity-90 text-white text-sm lg:text-base py-2.5 rounded-2xl transition-all duration-200">
        Add +
      </button>
    </div>
  )
}

export default AddNewValue