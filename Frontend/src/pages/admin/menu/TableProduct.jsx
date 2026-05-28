import React, { useState } from 'react'
import { formatMoney } from '../../../utils/formating'
import ConfirmPopup from '../../../components/common/ConfirmPopup'
import EmptyTable from '../../../components/common/EmptyTable';

import axios from 'axios';

function TableProduct({ title, productLists, handleOpenEdit, loadProduct }) {
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${deleteId}`);
      setOpenDelete(false);
      loadProduct();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {productLists.map((item) => (
          <div
            key={item.product_id}
            className="bg-white rounded-xl shadow-md border border-line hover:shadow-lg transition w-full"
          >
            {/* IMAGE */}
            <div className="relative h-44 bg-gray-100 rounded-xl">
              <img
                src={item.image_url || "/images/logo.png"}
                alt={item.name}
                className="w-full h-full object-contain lg:object-cover"
              />

              <span
                className={`
              absolute top-2 left-2 text-xs px-2 py-1 rounded-full text-white
              ${item.is_active ? "bg-green-500" : "bg-red-500"}
            `}
              >
                {item.is_active ? "Active" : "Inactive"}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between p-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{item.description === "" ? "No description" : item.description }</p>
                <p className="text-xs text-gray-400 mt-2">{item?.Category?.category_name}</p>
              </div>
              <div>
                <div className="mt-3 text-green-600 font-bold text-lg">
                  {formatMoney(item.price)}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 mt-4">
                  <button 
                    onClick={()=> handleOpenEdit(item)}
                    className="flex-1 bg-blue-500 text-white text-sm py-1.5 rounded-lg hover:bg-blue-600"
                    >
                    Edit
                  </button>

                  <button
                    onClick={() => handleOpenDelete(item.product_id)}
                    className="flex-1 bg-red-500 text-white text-sm py-1.5 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <EmptyTable
          title={title}
          emptyTable={productLists}
        />
      </div>
      <ConfirmPopup
        open={openDelete}
        title="Delete Item"
        message="Do you really want to delete this item?"
        onConfirm={handleDelete}
        onCancel={() => setOpenDelete(false)}
      />
    </>
  )
}

export default TableProduct