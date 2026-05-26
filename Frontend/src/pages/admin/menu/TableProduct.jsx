import React, { useState } from 'react'
import { formatMoney } from '../../../utils/formating'
import ConfirmPopup from '../../../components/common/ConfirmPopup'
import axios from 'axios';

function TableProduct({ productLists, loadProduct, img }) {
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
            className="bg-white rounded-xl shadow-md border hover:shadow-lg transition w-full"
          >
            <div className="relative h-44 bg-gray-100">
              <img
                src={img}
                className="w-full h-full object-contain lg:object-cover rounded-xl"
              />
              <span className={`
                    absolute top-2 left-2 text-xs px-2 py-1 rounded-full text-white
                    ${item.is_active ? "bg-green-500" : "bg-red-500"}
                   `}
              >
                {item.is_active ? "Active" : "Inactive"}
              </span>
            </div>

            {/* <!-- Content --> */}
            < div className="p-4" >

              {/* <!-- Title --> */}

              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>

              {/* <!-- Description --> */}
              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>

              {/* <!-- Category --> */}
              <p className="text-xs text-gray-400 mt-2">
                {item.Category.category_name}
              </p>

              {/* <!-- Price --> */}
              <div className="mt-3 text-green-600 font-bold text-lg">
                {formatMoney(item.price)}
              </div>

              {/* <!-- Buttons --> */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-500 text-white text-sm py-1.5 rounded-lg hover:bg-blue-600">
                  Edit
                </button>

                <button
                  onClick={() => { handleOpenDelete(item.product_id) }}
                  className="flex-1 bg-red-500 text-white text-sm py-1.5 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
        {/* Optional: empty state */}
        {productLists.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No Product found.
          </div>
        )}
      </div >
      <ConfirmPopup
        open={openDelete}
        title="Delete Item"
        message="Do you really want to delete this item?"
        onConfirm={() => handleDelete()}
        onCancel={() => setOpenDelete(false)}
      />
    </>
  )
}

export default TableProduct