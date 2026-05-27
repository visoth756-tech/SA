import './Customer.css';
import React, { useState } from 'react'

import { Header } from "../../../components/admin/Header";
import NewValue from "../../../components/admin/NewValue";
import Sidebar from "../../../components/admin/Sidebar";
import TableData from '../../../components/admin/TableData';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableCustomer from './TableCustomer';

export function Customer({ customerList, loadUser }) {
  const title = "Customer";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add"); // add or edit


  const totalCard = {
    total_customer: {
      id: "total_customer",
      name: "Total Customer",
      type: "static",
      value: Object.keys(customerList).length,
      per: 100
    }
  }


  return (
    <>
      <title>Customer</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={title} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            <TotalValue
              totalValue={totalCard}
            />
            <AddNewValue
              title={title}
              onClick={() => {
                setMode("add");
                setOpen(true);
              }}
            />
          </div>
          <SearchInfo />
          <TableCustomer
            title={title}
            customerList={customerList}
            loadUser={loadUser}
          />
        </div>
      </div>
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
                {mode === "edit" ? `Edit ${title}` : `Add New ${title}`}
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4"
            // onSubmit={handleSubmit}
            >
              {/* First Name */}
              <input
                type="text"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full border rounded-xl px-4 py-2"
                required
              />

              {/* Last Name */}
              <input
                type="text"
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full border rounded-xl px-4 py-2"
                required
              />

              {/* Email */}
              <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border rounded-xl px-4 py-2"
                required
              />

              {/* Phone */}
              <input
                type="text"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full border rounded-xl px-4 py-2"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-xl border hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
                >
                  {mode === "edit" ? "Update Customer" : "Save Customer"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}