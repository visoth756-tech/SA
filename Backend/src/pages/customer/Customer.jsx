import './Customer.css';

import { Header } from "../../components/Header";
import NewValue from "../../components/NewValue";
import { Sidebar } from "../../components/Sidebar";
import TableData from '../../components/TableData';
import { tableCards } from '../../utils/fakeData';
import TotalValue from '../../components/TotalValue';
import AddNewValue from '../../components/AddNewValue';

export function Customer() {
  const tableHeader = ['Name', 'Cusotmer ID', 'Email', 'Phone'];
  const totalValue = [
    {
      id: "total_customers",
      title: "Total Customers",
      value: 1280,
      type: "number",
      per: 2500,
      date: "This Month"
    },
    {
      id: "new_customer",
      title: "New Customer",
      value: 345075,
      type: "money",
      per: 5000,
      date: "This Month"
    },
    {
      id: "avg_customer_value",
      title: "Avg Cusotmer Value",
      value: 1295,
      type: "money",
      per: 10000,
      date: "This Month"
    },
    {
      id: "today_customers",
      title: "Customers Today",
      value: 42,
      type: "number",
      per: 7500,
      date: "Today"
    }
  ]
  return (
    <>
      <title>Menu</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={"Customer"} />
          <div className="flex xl:flex-row gap-3">
            <TotalValue totalValue={totalValue} />
            <AddNewValue title={"Customer"} />
          </div>
          <TableData tableHeader={tableHeader} tableCards={tableCards} />
        </div>
      </div>
    </>
  );
}