import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import './Order.css';
import NewValue from "../../components/NewValue";
import TableData from "../../components/TableData";
import TotalValue from "../../components/TotalValue";
import AddNewValue from "../../components/AddNewValue";

export function Order() {
  const tableHeader = ['Product Name', 'Order Id', 'Customer', 'Price'];
  const img = "images/person.png"
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
  const totalValue = [
    {
      id: "total_orders",
      title: "Total Orders",
      value: 1280,
      type: "number",
      per: 2000,
      date: "This Month"
    },
    {
      id: "revenue",
      title: "Revenue",
      value: 345075,
      type: "money",
      per: 5000,
      date: "This Month"
    },
    {
      id: "avg_order_value",
      title: "Avg Order Value",
      value: 1295,
      type: "money",
      per: 10000,
      date: "This Month"
    },
    {
      id: "today_orders",
      title: "Orders Today",
      value: 42,
      type: "number",
      per: 6800,
      date: "Today"
    }
  ]
  return (
    <>
      <title>Order</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />

        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={'Order'} />
          <div className="flex gap-3">
            <TotalValue totalValue={totalValue} />
            <AddNewValue title={"Order"} />
          </div>
          <TableData tableHeader={tableHeader} tableCards={tableCards} />
        </div>
      </div>
    </>
  );
}