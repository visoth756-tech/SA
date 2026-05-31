import React from 'react'

function StepIndicator() {
  return (
      <div className="pt-28 pb-8 max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-0">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-coffeebrown text-white flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-xs mt-1 font-semibold text-coffeebrown">Cart</span>
          </div>
          <div className="flex-1 h-0.5 bg-coffeebrown mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-caramel text-white flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-xs mt-1 font-semibold text-caramel">Checkout</span>
          </div>
          <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm">3</div>
            <span className="text-xs mt-1 text-gray-400">Payment</span>
          </div>
        </div>
      </div>  )
}

export default StepIndicator