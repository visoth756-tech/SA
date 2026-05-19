import './Menu.css';
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import NewValue from "../../components/NewValue";
import { formatMoney } from "../../utils/formating";
import TotalValue from '../../components/TotalValue';
import AddNewValue from '../../components/AddNewValue';
import fakeTotalValue from '../../utils/fakeTotalValue';
import SearchInfo from '../../components/SearchInfo';

export function Menu() {
  const titleBoard = "Menu";
  const img = "images/product-coffee.jpg";
  const products = [
    {
      id: 1,
      name: "Iced Latte",
      price: 350,
      category: "Coffee",
      stock: true,
      image: img
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 400,
      category: "Coffee",
      stock: true,
      image: img
    },
    {
      id: 3,
      name: "Chocolate Cake",
      price: 280,
      category: "Dessert",
      stock: false,
      image: img
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 280,
      category: "Dessert",
      stock: false,
      image: img
    }
  ];

  return (
    <>
      <title>Menu</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={titleBoard} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            <TotalValue
              totalValue={fakeTotalValue.menu}
            />
            <AddNewValue title={titleBoard} />
          </div>
          <SearchInfo />

          {/* Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="border border-line rounded-2xl p-4 bg-white shadow-sm flex flex-col gap-4"
              >
                {/* image */}
                <img src={item.image} alt={item.name} className="w-100 object-cover text-sm" />

                {/* name + price */}
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{item.name}</div>
                  <div className="font-semibold text-primary">{formatMoney(item.price)}</div>
                </div>

                <div className="flex justify-between">
                  {/* category */}
                  <div className="text-sm text-primary">{item.category}</div>

                  {/* stock */}
                  <div
                    className={`w-fit px-2 py-1 rounded-2xl text-xs border ${item.stock
                      ? "bg-green-100 text-green-600 border-green-300"
                      : "bg-red-100 text-red-600 border-red-300"
                      }`}
                  >
                    {item.stock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                <hr className="border border-line" />

                {/* actions */}
                <div className="flex justify-between">
                  <button className="bg-green-300 text-green-600 px-4 py-2 rounded-lg text-sm cursor-pointer transition hover:bg-app/10 hover:scale-105">
                    Edit
                  </button>
                  <button className="bg-red-100 text-red-500 px-4 py-2 rounded-lg text-sm cursor-pointer transition hover:bg-red-200 hover:scale-105">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}