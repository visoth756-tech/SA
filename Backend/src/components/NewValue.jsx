import React from 'react'

function NewValue({ newValue }) {
  return (
    <div className="flex flex-col gap-3 w-fit">
      {/* New Order */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 lg:p-5 bg-white border border-line rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="images/add_coffee_outline.png"
            className="w-9 h-9 lg:w-10 lg:h-10 bg-[#F0EDEB] rounded-lg p-2 shrink-0"
          />

          <div className="min-w-0">
            <div className="text-base lg:text-lg font-medium whitespace-nowrap truncate">
              New {newValue}
            </div>

            <div className="text-xs lg:text-sm text-gray-400">
              Create new item
            </div>
          </div>
        </div>

        <button className="bg-primary hover:opacity-90 text-white text-sm lg:text-base py-2.5 px-6 lg:px-7 rounded-2xl whitespace-nowrap w-full sm:w-auto transition-all duration-200">
          Add +
        </button>
      </div>

      {/* Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 lg:p-5 bg-white border border-line rounded-2xl shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="images/action.png"
            className="w-9 h-9 lg:w-10 lg:h-10 bg-[#F0EDEB] rounded-lg p-2 shrink-0"
          />

          <div className="min-w-0">
            <div className="text-base lg:text-lg font-medium whitespace-nowrap">
              Action
            </div>

            <div className="text-xs lg:text-sm text-gray-400">
              View more actions
            </div>
          </div>
        </div>

        <button className="border border-line hover:bg-gray-50 text-sm lg:text-base py-2.5 px-6 lg:px-7 rounded-2xl w-full sm:w-auto transition-all duration-200">
          More
        </button>
      </div>
    </div>
  )
}

export default NewValue