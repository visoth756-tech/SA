import React from 'react'

function productDetails() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Name & Description */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Name & Description</h2>

            <label className="text-sm text-gray-600">Menu Name</label>
            <input
              className="w-full mt-1 mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Macha Latte"
            />

            <label className="text-sm text-gray-600">Menu Description</label>
            <textarea
              rows="6"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write description..."
            />
          </div>

          {/* Image */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Menu Image</h2>

            <div className="flex gap-4">
              <div className="w-40 h-40 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
                Upload Image
              </div>

              <img
                src="https://via.placeholder.com/150"
                className="w-40 h-40 object-cover rounded-xl border"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Category */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Category</h2>

            <label className="text-sm text-gray-600">Menu Category</label>
            <select className="w-full mt-1 mb-4 p-2 border rounded-lg">
              <option>Coffee</option>
              <option>Tea</option>
            </select>

            <label className="text-sm text-gray-600">Sub Category</label>
            <select className="w-full mt-1 p-2 border rounded-lg">
              <option>Latte</option>
              <option>Espresso</option>
            </select>
          </div>

          {/* Stock */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Manage Stock</h2>

            <input
              className="w-full mb-4 p-2 border rounded-lg"
              placeholder="Stock ID"
            />

            <div className="grid grid-cols-2 gap-3">
              <input className="p-2 border rounded-lg" placeholder="Stock" />
              <input className="p-2 border rounded-lg" placeholder="Min Stock" />
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Menu Pricing</h2>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <input className="p-2 border rounded-lg" placeholder="Price" />
              <input className="p-2 border rounded-lg" placeholder="Sell Price" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select className="p-2 border rounded-lg">
                <option>5%</option>
                <option>10%</option>
              </select>

              <input className="p-2 border rounded-lg" placeholder="Min Order" />
            </div>
          </div>

        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-between">
        <button className="px-5 py-2 bg-gray-200 rounded-lg">Save Menu</button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
          Add Menu +
        </button>
      </div>
    </div>
  )
}

export default productDetails