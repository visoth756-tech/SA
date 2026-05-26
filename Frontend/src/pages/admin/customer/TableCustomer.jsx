import React, { useRef, useEffect, useState } from 'react'
import { HiChevronDown } from "react-icons/hi";
import { formatFullname } from '../../../utils/formating';

function TableCustomer({ customerList }) {
  const [openView, setOpenView] = useState(false);
  const [status, setStatus] = useState("active");

  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpenView(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);


  return (
    <div className="w-full overflow-auto border border-line rounded-2xl">
      <div className="min-w-225">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[0.5fr_2fr_2fr_1.5fr_0.5fr_1fr_1.5fr] gap-2 sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300">
          <div>ID</div>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div className="flex justify-center">Points</div>
          <div className="flex justify-center">Status</div>
          <div className="flex justify-center">Action</div>
        </div>

        {/* ROW */}
        {customerList.map((c) => (
          <div
            key={c.customer_id}
            className="grid grid-cols-[0.5fr_2fr_2fr_1.5fr_0.5fr_1fr_1.5fr] gap-2 items-center p-4 text-sm border-b border-gray-100"
          >
            <div className="flex items-center gap-3 font-semibold">{c.customer_id}</div>
            <div className="font-medium truncate">{formatFullname(c.first_name, c.last_name)}</div>
            <div className="font-medium truncate">{c.email}</div>
            <div className="font-medium truncate">{c.phone}</div>
            <div className="flex justify-center">{c.loyalty_points}</div>
            <div className="flex justify-center">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={`border rounded px-2 py-1 text-sm font-medium
                  ${status === "active"
                    ? "text-green-600 border-green-400"
                    : status === "inactive"
                      ? "text-yellow-600 border-yellow-400"
                      : "text-red-600 border-red-400"
                  }
                  `}
              >
                <option value="active">Active</option>
                <option value="inactive">Pending</option>
                <option value="banned">Banned</option>
              </select>
            </div>
            <div className="flex justify-center gap-2">
              <div ref={ref} className="inline-block text-right">

                {/* Button */}
                <button
                  key={c.customer_id}
                  onClick={() => setOpenView(true)}
                  className="flex gap-1 border py-1 px-2 rounded-md text-gray-500 hover:text-black items-center"
                >
                  <div>View</div>
                  <HiChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Dropdown */}
        {openView && (
          <div
            key={customerList.customer_id}
            className="absolute top-0 w-40 bg-white border rounded-md shadow-md z-50"
          >
            <button
              onClick={() => setOpenView(false)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              View Detail
            </button>

            <button
              onClick={() => setOpenView(false)}
              className="w-full text-left px-3 py-2 text-blue-500 hover:bg-gray-100"
            >
              Edit
            </button>

            <button
              onClick={() => setOpenView(false)}
              className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TableCustomer