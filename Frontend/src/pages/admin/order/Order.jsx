import React from 'react'
import './Order.css';
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableData from '../../../components/admin/TableData';
// import fakeTotalValue from '../../../utils/admin/fakeTotalValue';


export function Order() {
  const titleBoard = "Order";
  const tableHeader = ['Product Name', 'Order Id', 'Customer', 'Price'];
  const img = "/images/person.png"
  // status tpye ["pending", "confirmed", "preparing", "completed", "cancelled"]
  const tableCards = [
    {
      "id": 1,
      "name": "Coffee",
      "category": "Coffee",
      "customer_name": "Sok Dara",
      "label": "VIP Customer",
      "price": 200,
      payment_type: "paypal",
      "status": "completed",
      img: img,

    },
    {
      "id": 2,
      "name": "Cake",
      "category": "Balary",
      "customer_name": "Chan Monika",
      "label": "Star Customer",
      "price": 895,
      payment_type: "paypal",
      "status": "pending",
      img: img
    },
    {
      "id": 3,
      "name": "Macha",
      "category": "Coffee",
      "customer_name": "Kim Vutha",
      "label": "Regular Customer",
      "price": 450,
      payment_type: "paypal",
      "status": "cancelled",
      img: img
    }
  ]

  return (
    <>
      <title>Order</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={titleBoard} />
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* <TotalValue
              totalValue={fakeTotalValue.orders}
            /> */}
            <AddNewValue title={titleBoard} />
          </div>
          <SearchInfo />

          <TableData tableHeader={tableHeader} tableCards={tableCards} />
        </div>
      </div>
    </>
  );
}