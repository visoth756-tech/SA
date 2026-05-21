import { useState } from "react";
import axios from "axios";

function AddNewCategory({ title }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3100/api/categories",
        {
          category_name: name,
        }
      );

      console.log("Success:", res.data);

      // reset form
      setName("");
      setDesc("");
      setOpen(false);

      // OPTIONAL: if you have list refresh function
      // fetchCategories();

    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      {/* Card */}
      <div className="flex flex-col justify-between gap-4 bg-white p-4 lg:p-5 rounded-2xl border border-line shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/images/add_coffee_outline.png"
            className="w-9 h-9 lg:w-10 lg:h-10 bg-[#F0EDEB] rounded-lg p-2 shrink-0"
            alt="add icon"
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

        <button
          onClick={() => setOpen(true)}
          className="bg-primary hover:opacity-90 text-white text-sm lg:text-base py-2.5 rounded-2xl transition-all duration-200"
        >
          Add {title}
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">
                Add New {title}
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  {title} Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={`Enter ${title.toLowerCase()} name`}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Description
                </label>

                <textarea
                  rows="3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Enter description"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
                >
                  Save {title}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddNewCategory;