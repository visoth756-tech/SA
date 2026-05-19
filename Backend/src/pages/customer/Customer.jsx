import './Customer.css';

import { Header } from "../../components/Header";
import NewValue from "../../components/NewValue";
import { Sidebar } from "../../components/Sidebar";
import TableData from '../../components/TableData';
import { tableCards } from '../../utils/fakeData';
import TotalValue from '../../components/TotalValue';
import AddNewValue from '../../components/AddNewValue';
import fakeTotalValue from '../../utils/fakeTotalValue';
import SearchInfo from '../../components/SearchInfo';

export function Customer() {
  const titleBoard = "Customer";
  const tableHeader = ['Name', 'Cusotmer ID', 'Email', 'Phone'];

  return (
    <>
      <title>Menu</title>

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