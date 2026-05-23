import React, { useState } from 'react'
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
// import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableData from '../../../components/admin/TableData';
import AddNewCategory from './addNewCategory';
import axios from 'axios';
import ConfirmPopup from '../../../components/common/ConfirmPopup';
import CategoryPopup from './CategoryPopup';

function Category({ list, loadCategory }) {
  const title = "Category";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);  // separate open state

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/categories/${deleteId}`);
      setOpenDelete(false);
      loadCategory();
    } catch (err) {
      console.log(err);
    }
  };

  // Open Add popup
  const handleOpenAdd = () => {
    setMode("add");
    setName("");
    setDesc("");
    setOpen(true);
  };

  // Add new category
  const handleSubmit = async () => {
    try {
      await axios.post("/api/categories", { category_name: name });
      setName("");
      setDesc("");
      setOpen(false);
      loadCategory();
    } catch (err) {
      console.log("Error:", err);
    }
  };

  // Open Edit popup — pre-fill fields
  const handleOpenEdit = (category) => {
    setMode("edit");
    setEditId(category.category_id);
    setName(category.category_name);
    setDesc("");
    setOpen(true);
  };

  // Edit existing category
  const handleEdit = async () => {
    try {
      await axios.put(`/api/categories/${editId}`, { category_name: name });
      setOpen(false);
      loadCategory();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <title>{title}</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={title} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* <TotalValue
            /> */}
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
                    Create new {title.toLowerCase()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleOpenAdd()}
                className="bg-primary hover:opacity-90 text-white text-sm lg:text-base py-2.5 rounded-2xl transition-all duration-200"
              >
                Add {title}
              </button>
            </div>
          </div>
          <SearchInfo />
          <div className="w-full overflow-auto border border-line rounded-2xl">
            <div className="min-w-56.25">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300">
                <div>ID</div>
                <div>Category</div>
                <div>Status</div>
                <div className="flex justify-center">Action</div>
              </div>

              {/* TABLE ROWS (dynamic) */}
              {list.map((category) => (
                <div
                  key={category.category_id}
                  className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] text-sm px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div>{category.category_id}</div>
                  <div>{category.category_name}</div>
                  <div>
                    <span className={`rounded-full text-xs`}>
                      STATUS
                    </span>
                  </div>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleOpenEdit(category)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => { handleOpenDelete(category.category_id) }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {/* Optional: empty state */}
              {list.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No categories found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CategoryPopup
        title={title}
        open={open}
        setOpen={setOpen}
        name={name}
        setName={setName}
        desc={desc}
        setDesc={setDesc}
        handleSubmit={mode === "edit" ? handleEdit : handleSubmit}
      />

      <ConfirmPopup
        open={openDelete}
        title="Delete Item"
        message="Do you really want to delete this item?"
        onConfirm={() => handleDelete(deleteId)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}

export default Category