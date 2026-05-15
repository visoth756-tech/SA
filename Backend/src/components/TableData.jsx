import React from 'react'
import { formatMoney } from '../utils/formating';

function TableData({ tableHeader, tableCards }) {
  //   {/* TABLE HEADER */}
  // <div className="grid grid-cols-7 sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300">
  //   <div className="col-span-2 ">Name</div>
  //   <div>Cusotmer ID</div>
  //   <div>Email</div>
  //   <div>Phone</div>
  //   <div>Status</div>
  //   <div className="flex justify-center">Action</div>
  // </div>
  // const customerCard = [
  //   {
  //     id: 1,
  //     name: "Sok Dara",
  //     email: "sokdara@example.com",
  //     phone: "+855 12 345 678",
  //     status: "Active",
  //     label: "Star Customer",
  //     img: img
  //   },
  //   {
  //     id: 2,
  //     name: "Chan Lina",
  //     email: "chanlina@example.com",
  //     phone: "+855 11 222 333",
  //     status: "Active",
  //     label: "Regular Customer",
  //     img: img
  //   },
  //   {
  //     id: 3,
  //     name: "Vuthy Sokha",
  //     email: "vuthy@example.com",
  //     phone: "+855 16 777 888",
  //     status: "Inactive",
  //     label: "VIP Customer",
  //     img: img
  //   },
  //   {
  //     id: 4,
  //     name: "Piseth Dara",
  //     email: "piseth@example.com",
  //     phone: "+855 10 444 555",
  //     status: "Active",
  //     label: "Star Customer",
  //     img: img
  //   },
  //   {
  //     id: 5,
  //     name: "Sreyneang Kim",
  //     email: "sreyneang@example.com",
  //     phone: "+855 17 999 000",
  //     status: "Blocked",
  //     label: "Regular Customer",
  //     img: img
  //   },
  //   {
  //     id: 6,
  //     name: "Meng Chenda",
  //     email: "chenda@example.com",
  //     phone: "+855 15 123 456",
  //     status: "Active",
  //     label: "VIP Customer",
  //     img: img
  //   },
  //   {
  //     id: 7,
  //     name: "Rathana Vann",
  //     email: "rathana@example.com",
  //     phone: "+855 96 654 321",
  //     status: "Active",
  //     label: "Star Customer",
  //     img: img
  //   },
  //   {
  //     id: 8,
  //     name: "Sophea Nara",
  //     email: "nara@example.com",
  //     phone: "+855 81 777 222",
  //     status: "Inactive",
  //     label: "Regular Customer",
  //     img: img
  //   }
  // ];
  const normalizedData = tableCards.map((item) => ({
    id: item.id,
    name: item.name,
    subName: item.category || item.label,
    secondary: item.customer_name || item.email,
    subSecondary: item.label || '',
    third: `${formatMoney(item.price)}` || item.phone,
    subThird: item.payment_type || item.country,
    status: item.status,
    img: item.img,
  }));
  return (
    <div className="w-full overflow-auto border border-line rounded-2xl">
      <div className="min-w-225">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-7 sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300">
          <div className='col-span-2'>{tableHeader[0]}</div>
          <div>{tableHeader[1]}</div>
          <div>{tableHeader[2]}</div>
          <div>{tableHeader[3]}</div>
          <div>Status</div>
          <div className="flex justify-center">Action</div>
        </div>

        {/* ROW */}
        {normalizedData.map((data) => (
          <div className="grid grid-cols-7 items-center p-4 text-sm border-b border-gray-100">

            {/* ITEM */}
            <div className="col-span-2 flex items-center gap-3 min-w-0">
              <img
                src={data.img}
                className="w-8 h-8 rounded-lg object-cover"
              />

              <div className="min-w-0">
                <div className="font-semibold truncate">{data.name}</div>
                <div className="text-gray-400 text-xs">{data.subName}</div>
              </div>
            </div>

            {/* ORDER ID */}
            <div className="col-span-1">
              <div className="font-medium">{data.id}</div>
              <div className="text-gray-400 text-xs">create_ID</div>
            </div>

            {/* CUSTOMER */}
            <div className="col-span-1">
              <div className="font-medium">{data.secondary}</div>
              <div className="text-gray-400 text-xs">{data.subSecondary}</div>
            </div>

            {/* PRICE */}
            <div className="col-span-1">
              <div className="font-semibold">{data.third}</div>
              <div className="text-gray-400 text-xs">{data.subThird}</div>
            </div>

            {/* STATUS */}
            <div className="col-span-1 text-yellow-500 font-medium">
              {data.status}
            </div>

            {/* ACTION */}
            <div className="col-span-1 flex justify-center">
              <button className="bg-gray-200 px-3 py-2 rounded-xl">
                View
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TableData