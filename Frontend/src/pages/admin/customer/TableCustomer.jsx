import React, { useRef, useEffect, useState } from 'react'
import { HiChevronDown } from "react-icons/hi";
import { formatFullname } from '../../../utils/formating';
import EmptyTable from '../../../components/common/EmptyTable';

function TableCustomer({ title, customerList }) {

  const grid_cols = "grid-cols-[0.8fr_2fr_2fr_1.5fr_0.8fr_1fr]";

  const [openMenuId, setOpenMenuId] = useState(null);
  const [statusMap, setStatusMap] = useState({});

  const containerRef = useRef(null);

  // click outside close
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // handle status change per user
  const handleStatusChange = (id, value) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="w-full overflow-auto border border-line rounded-2xl">
      <div className="min-w-225" ref={containerRef}>

        {/* HEADER */}
        <div className={`grid ${grid_cols} gap-2 sticky top-0 bg-app font-semibold text-sm px-4 py-3 border-b border-gray-300`}>
          <div>Image</div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div className="flex justify-center">Status</div>
          <div className="flex justify-center">Action</div>
        </div>

        {/* ROWS */}
        {customerList.map((c) => (
          <div
            key={c.customer_id}
            className={`grid ${grid_cols} gap-2 items-center p-4 text-sm border-b border-gray-100 relative`}
          >

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={c.image_url || "/images/logo.png"}
                alt="customer"
                className="w-10 h-10 rounded-full object-cover border"
              />
            </div>

            <div className="font-medium truncate">{formatFullname(c.first_name, c.last_name)}</div>
            <div className="font-medium truncate">{c.email}</div>
            <div className="font-medium truncate">{c.phone}</div>
            <div className="flex justify-center">
              <select
                value={statusMap[c.customer_id] || "active"}
                onChange={(e) =>
                  handleStatusChange(c.customer_id, e.target.value)
                }
                className={`border rounded px-2 py-1 text-sm font-medium
                  ${statusMap[c.customer_id] === "active"
                    ? "text-green-600 border-green-400"
                    : statusMap[c.customer_id] === "inactive"
                      ? "text-yellow-600 border-yellow-400"
                      : "text-red-600 border-red-400"
                  }`}
              >
                <option value="active">Active</option>
                <option value="inactive">Pending</option>
                <option value="banned">Banned</option>
              </select>
            </div>

            <div className="flex justify-center relative">
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === c.customer_id ? null : c.customer_id)
                }
                className="flex gap-1 border py-1 px-2 rounded-md text-gray-500 hover:text-black items-center"
              >
                <div>View</div>
                <HiChevronDown size={18} />
              </button>

              {openMenuId === c.customer_id && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-md shadow-md z-50">

                  <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    View Detail
                  </button>

                  <button className="w-full text-left px-3 py-2 text-blue-500 hover:bg-gray-100">
                    Edit
                  </button>

                  <button className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100">
                    Delete
                  </button>

                </div>
              )}
            </div>

          </div>
        ))}
        <EmptyTable
          title={title}
          emptyTable={customerList
          } />

      </div>
    </div>
  )
}

export default TableCustomer;