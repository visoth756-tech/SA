import React from 'react'

function PopupProducts({
  title,
  mode = "add",
  open, setOpen,
  name, setName,
  desc, setDesc,
  categoryId, setCategoryId,
  price, setPrice,
  status, setStatus,
  image, setImage,
  imagePreview, setImagePreview,
  categoryList,
  handleSubmit
}) {

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    open && (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={() => setOpen(false)}
      >
        <div
          className="bg-white w-120 rounded-xl p-7 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-gray-800">
              {mode === "edit" ? `Edit ${title}` : `Add New ${title}`}
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-700 text-lg leading-none"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {/* IMAGE ZONE */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={imagePreview || "/images/No_Image_Available.png"}
                alt="preview"
                className="w-full h-full object-cover"
              />

              {imagePreview && (
                <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded">
                  {image?.name || "image"}
                </div>
              )}
            </div>

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">{title} Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`Enter ${title.toLowerCase()} name`}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">{title} Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* CATEGORY + STATUS */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-500 block mb-1">{title} Category</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                >
                  {categoryList.map((item) => (
                    <option key={item.category_id} value={item.category_id}>
                      {item.category_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500 block mb-1">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">{title} Description</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={3}
                placeholder={`Short ${title.toLowerCase()} description...`}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* FOOTER: upload + cancel + save */}
            <div className="flex items-center gap-2 mt-2">
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                {imagePreview ? "Change image" : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              <div className="flex-1" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                {mode === "edit" ? `Update ${title}` : `Save ${title}`}
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  )
}

export default PopupProducts