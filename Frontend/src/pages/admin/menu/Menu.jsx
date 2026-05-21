import React from 'react'
import './Menu.css';
import { formatMoney } from "../../../utils/admin/formating";
import TableData from "../../../components/admin/TableData";
import TotalValue from "../../../components/admin/TotalValue";
import fakeTotalValue from "../../../utils/admin/fakeTotalValue";
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';

export function Menu() {
  const titleBoard = "Menu";
  const img = "/images/product-coffee.png";
  const products = [
    {
      id: 1,
      name: "Iced Latte",
      price: 350,
      category: "Coffee",
      image: img
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 400,
      category: "Coffee",
      image: img
    },
    {
      id: 3,
      name: "Chocolate Cake",
      price: 280,
      category: "Dessert",
      image: img
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 280,
      category: "Dessert",
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
              <div className="w-full max-w-sm bg-white border rounded-2xl shadow-sm overflow-hidden">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 space-y-2">

                  {/* Name + ID */}
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                  </div>

                  {/* Category */}
                  <p className="flex justify-between text-sm text-gray-500">
                    Category: <span className="font-medium">{item.category}</span>
                  </p>

                    {/* Price */}
                    <div className="text-lg font-bold">
                      {formatMoney(item.price)}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        // onClick={() => onEdit(item)}
                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        // onClick={() => onDelete(item.id)}
                        className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}