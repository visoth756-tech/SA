import React, { useState } from 'react'
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';

function User({ userList }) {
  const title = "User";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");

  const totalCard = {
    total_customer: {
      id: "total_user",
      name: "Total User",
      type: "static",
      // value: Object.keys(userList).length,
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
          {/* <TableCustomer
            title={title}
          /> */}
        </div>
      </div>
      {/* {open && (

      )} */}
    </>
  );
}

export default User