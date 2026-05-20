import './Customer.css';
import React from 'react'

import { Header } from "../../../components/admin/Header";
import NewValue from "../../../components/admin/NewValue";
import Sidebar from "../../../components/admin/Sidebar";
import TableData from '../../../components/admin/TableData';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import fakeTotalValue from '../../../utils/admin/fakeTotalValue';
import { tableCards } from '../../../utils/admin/fakeData';

export function Customer() {
  const titleBoard = "Customer";
  const tableHeader = ['Name', 'Cusotmer ID', 'Email', 'Phone'];

  return (
    <>
      <title>Customer</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={titleBoard} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            <TotalValue
              totalValue={fakeTotalValue.orders}
            />
            <AddNewValue title={titleBoard} />
          </div>
          <SearchInfo />
          <TableData tableHeader={tableHeader} tableCards={tableCards} />
        </div>
      </div>
    </>
  );
}