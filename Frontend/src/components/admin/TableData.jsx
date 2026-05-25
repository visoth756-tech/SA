import React from 'react'
import { formatMoney } from '../../utils/formating';

function TableData({ tableHeader, tableCards }) {
  const normalizedData = tableCards.map((item) => ({
    id: item.id,
    name: item.name,
    subName: item.category || item.label,
    secondary: item.customer_name || item.email,
    subSecondary: item.label || '',
    third: item.phone || `${formatMoney(item.price)}`,
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
          <div className="flex justify-center">Status</div>
          <div className="flex justify-center">Action</div>
        </div>

        {/* ROW */}
        {normalizedData.map((data) => (
          <div className="grid grid-cols-7 items-center p-4 text-sm border-b border-gray-100">

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

            <div className="col-span-1">
              <div className="font-medium">{data.id}</div>
              <div className="text-gray-400 text-xs">create_ID</div>
            </div>

            <div className="col-span-1">
              <div className="font-medium truncate">{data.secondary}</div>
              <div className="text-gray-400 text-xs">{data.subSecondary}</div>
            </div>

            <div className="col-span-1">
              <div className="font-semibold truncate">{data.third}</div>
              <div className="text-gray-400 text-xs">{data.subThird}</div>
            </div>

            <div className="flex justify-center col-span-1 text-yellow-500 font-medium">
              {data.status}
            </div>

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