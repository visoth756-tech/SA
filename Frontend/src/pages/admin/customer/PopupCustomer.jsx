import { useState } from "react";
import HideIcon from "../../../components/common/HideIcon"
import { MdOutlineFileUpload } from "react-icons/md";

function PopupCustomer({
  title,
  mode = "add",
  open, setOpen,
  form,

  imagePreview,
  loading,

  handleChange,
  handleImageChange,
  handleSubmit
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    open && (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={() => setOpen(false)}
      >
        <div
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {mode === "edit"
                  ? `Edit ${title}`
                  : `Add New ${title}`}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Manage customer information
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-500 transition flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <div className="p-6 flex flex-col gap-5">
            {/* IMAGE + NAME */}
            <div className="grid grid-cols-[220px_1fr] gap-5 items-start">

              {/* IMAGE */}
              <div className="relative group">
                <div className="w-full h-52 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={
                      imagePreview || "/images/No_Image_Available.png"
                    }
                    alt="preview"
                    className="w-full h-full object-contain"
                  />
                </div>

                <label className="absolute bottom-3 right-3 cursor-pointer bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-md border border-gray-200 text-sm text-gray-700 hover:bg-white transition flex items-center gap-2">
                  <MdOutlineFileUpload size={18} />

                  {imagePreview
                    ? "Change Image"
                    : "Upload Image"}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* FORM */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    value={form.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    value={form.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                  />
                </div>
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="example@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Phone Number
                </label>

                <input
                  type="number"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="012 345 678"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-600 block mb-2">Passsword</label>
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>
                  handleChange("password", e.target.value)
                }
                placeholder={
                  mode === "edit"
                    ? "Leave blank to keep current password"
                    : "Enter password"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
              />
              <HideIcon
                size={20}
                show={!showPassword}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 text-gray-400 hover:text-gray-700"
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium text-gray-600 block mb-2">Confirm Passsword</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                // value={form.password}
                // onChange={(e) =>handleChange("password", e.target.value)}
                placeholder={
                  mode === "edit"
                    ? "Leave blank to keep current password"
                    : "Enter password"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
              />
              <HideIcon
                size={20}
                show={!showConfirmPassword}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 text-gray-400 hover:text-gray-700"
              />
            </div>

            {/* STATUS + POINTS */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">Status</label>

                <select
                  value={form.status ? true : false}
                  onChange={(e) => handleChange("status", e.target.value === true)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Loyalty Points
                </label>

                <input
                  type="number"
                  value={form.loyalty_points}
                  onChange={(e) => handleChange("loyalty_points", e.target.value)}
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition"
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-white transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : mode === "edit"
                  ? `Update ${title}`
                  : `Save ${title}`}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PopupCustomer;