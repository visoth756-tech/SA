import React, { useState } from 'react'
import ConfirmPopup from '../../../components/common/ConfirmPopup';

import axios from 'axios';
import EmptyTable from '../../../components/common/EmptyTable';

function TableCategory({ title, handleOpenEdit, categoryList, loadCategory }) {
  const grid_cols = "grid-cols-[0.5fr_1.5fr_1fr_1fr]";
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

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

  return (
    <div className="w-full overflow-auto border border-line rounded-2xl">
      <div className="min-w-56.25">
        <div className={`grid ${grid_cols} sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300`}>
          <div>ID</div>
          <div>Category</div>
          <div>Status</div>
          <div className="flex justify-center">Action</div>
        </div>

        {/* TABLE ROWS */}
        {categoryList.map((category) => (
          <div
            key={category.category_id}
            className={`grid ${grid_cols} text-sm px-4 py-3 border-b border-gray-100 hover:bg-gray-50`}
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
                className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => { handleOpenDelete(category.category_id) }}
                className="bg-red-500 text-white text-sm py-1 px-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <EmptyTable
          title={title}
          emptyTable={categoryList}
        />

        <ConfirmPopup
          open={openDelete}
          title="Delete Item"
          message="Do you really want to delete this item?"
          onConfirm={() => handleDelete()}
          onCancel={() => setOpenDelete(false)}
        />

      </div>
    </div>
  )
}

export default TableCategory