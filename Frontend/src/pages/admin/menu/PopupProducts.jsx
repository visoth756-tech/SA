import React from 'react'

function PopupProducts({
  title,
  mode = "add",       // "add" | "edit"
  open, setOpen,
  name, setName,
  desc, setDesc,
  categoryId, setCategoryId,
  price, setPrice,
  status, setStatus,
  categoryList,
  handleSubmit
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-130 rounded-xl p-8 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">
                {mode === "edit" ? `Edit ${title}` : `Add New ${title}`}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">{title} Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm text-gray-600">{title} Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Category (select) */}
              <div>
                <label className="text-sm text-gray-600">{title} Category</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  {categoryList.map((item) => {
                    return (
                      <option
                        key={item.category_id}
                        value={item.category_id}
                      >
                        {item.category_name}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Active */}
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">{title} Description</label>
                <input
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  {mode === "edit" ? `Update ${title}` : `Save ${title}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopupProducts