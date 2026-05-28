import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

function PopupProducts({
  title,
  mode = "add",
  open, setOpen,
  form, setForm,

  imagePreview,
  loading,

  categoryList,

  handleChange,
  handleImageChange,
  handleSubmit
}) {
  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

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
                  {imagePreview ? "Selected image" : ""}
                </div>
              )}
            </div>

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">{title} Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={`Enter ${title.toLowerCase()} name`}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="text-sm text-gray-500 block mb-1">{title} Price</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="0.00"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* CATEGORY + STATUS */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-500 block mb-1">{title} Category</label>
                <select
                  value={form.category_id}
                  onChange={(e) => handleChange("category_id", e.target.value)}
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
                  value={form.status}
                  onChange={(e) => updateField("status", e.target.value)}
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
                value={form.desc}
                onChange={(e) => handleChange("desc", e.target.value)}
                rows={3}
                placeholder={`Short ${title.toLowerCase()} description...`}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
              />
            </div>

            {/* FOOTER: upload + cancel + save */}
            <div className="flex items-center gap-2 mt-2">
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors">
                <MdOutlineFileUpload size={18} />
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
                disabled={loading}
                className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                {loading ? "Saving..." : mode === "edit" ? `Update ${title}` : `Save ${title}`}
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  )
}

export default PopupProducts