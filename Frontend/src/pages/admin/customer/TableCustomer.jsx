import React, { useRef, useEffect, useState } from 'react'
import { HiChevronDown } from "react-icons/hi";
import EmptyTable from '../../../components/common/EmptyTable';
import { formatFullname, formatPhone } from '../../../utils/formating';
import axios from 'axios';
import ConfirmPopup from '../../../components/common/ConfirmPopup';

function TableCustomer({ title, customerList, handleOpenEdit, loadCustomer }) {
  const grid_cols = "grid-cols-[2.2fr_2fr_1.5fr_1fr_1fr_0.8fr]";
  const [openMenuId, setOpenMenuId] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: 0
  });
  const containerRef = useRef(null);
  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleOpenDelete = (id) => {
    setOpenMenuId(null);
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/customers/${deleteId}`);
      setOpenDelete(false);
      loadCustomer();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleOpenMenu = (e, customer) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setDropdownPos({
      top: rect.bottom + window.scrollY + 8,
      left: rect.right - 176
    });

    setSelectedCustomer(customer);

    setOpenMenuId(
      openMenuId === customer.customer_id
        ? null
        : customer.customer_id
    );
  };

  return (
    <>
      <div
        className="w-full overflow-x-auto border border-line rounded-2xl bg-white relative"
        ref={containerRef}
      >
        <div className="min-w-275">
          <div className={`grid ${grid_cols} gap-3 sticky top-0 bg-gray-50 text-gray-500 font-semibold text-xs uppercase tracking-wide px-4 py-3 border-b border-gray-200 z-10`}>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div className="flex justify-center">Loyalty Points</div>
            <div className="flex justify-center">Status</div>
            <div className="flex justify-center">Action</div>
          </div>

          {customerList.map((c) => (
            <div
              key={c.customer_id}
              className={`grid ${grid_cols} gap-3 items-center px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors`}
            >
              {/* NAME */}
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={
                    c.image_url ||
                    "/images/customer_fill.png"
                  }
                  alt={c.first_name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />

                <div className="min-w-0">
                  <div className="font-semibold text-gray-800 truncate">
                    {formatFullname(c.first_name, c.last_name)}
                  </div>

                  <div className="text-xs text-gray-400 truncate">
                    ID: #{c.customer_id}
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="truncate text-gray-600">
                {c.email}
              </div>

              {/* PHONE */}
              <div className="truncate text-gray-600">
                {formatPhone(c.phone)}
              </div>

              {/* POINTS */}
              <div className="flex justify-center">
                <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 font-semibold text-xs">
                  {c.loyalty_points || 0} pts
                </div>
              </div>

              {/* STATUS */}
              <div className="flex justify-center">
                {/* <select
                  value={
                    statusMap[c.customer_id] ??
                    (c.is_active ? "active" : "inactive")
                  }
                  onChange={(e) =>
                    handleStatusChange(
                      c.customer_id,
                      e.target.value
                    )
                  }
                  className={`rounded-full px-3 py-1 text-xs font-semibold border outline-none
                    ${(
                      statusMap[c.customer_id] ??
                      (c.is_active ? true : false)
                    ) === "active"
                      ? "text-green-600 border-green-200 bg-green-50"
                      : "text-yellow-600 border-yellow-200 bg-yellow-50"
                    }`}
                >
                  <option value="active">
                    Active
                  </option>

                  <option value="inactive">
                    Inactive
                  </option>
                </select> */}
                {c.is_active ? "Active" : "Inactive"}
              </div>

              {/* ACTION */}
              <div className="flex justify-center">
                <button
                  onClick={(e) => handleOpenMenu(e, c)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-600 transition"
                >
                  <span>View</span>

                  <HiChevronDown
                    size={16}
                    className={`transition-transform ${openMenuId === c.customer_id ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>
          ))}
          {/* GLOBAL DROPDOWN */}
          {openMenuId && selectedCustomer && (
            <div
              className="fixed w-44 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-9999"
              style={{
                top: dropdownPos.top,
                left: dropdownPos.left
              }}
            >
              <button
                onClick={() => {
                  handleOpenEdit(selectedCustomer)
                  setOpenMenuId(null)
                }}
                className="w-full text-left px-4 py-2.5 text-blue-600 hover:bg-blue-50 transition"
              >
                Edit
              </button>

              <button
                onClick={() => handleOpenDelete(selectedCustomer.customer_id)}
                className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          )}
          <EmptyTable
            title={title}
            emptyTable={customerList}
          />
        </div>
      </div>

      <ConfirmPopup
        open={openDelete}
        title={`Delete ${title}`}
        message={`Do you really want to delete this ${title}`}
        onConfirm={handleDelete}
        onCancel={() => setOpenDelete(false)}
      />
    </>
  )
}

export default TableCustomer;