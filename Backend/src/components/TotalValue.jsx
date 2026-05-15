import React from 'react'
import { formatMoney, formatNumber, formatPercentage } from '../utils/formating';

function TotalValue({ totalValue }) {
  const normalizeDate = totalValue.map((item) => ({
    id: item.id || 'No ID(error)',
    title: item.title,
    type: item.type,
    value: item.value,
    per: item.per || 'hidden',
    date: item.date,
  }));

  const formatValue = (data) => {
    return data.type === "money"
      ? formatMoney(data.value)
      : formatNumber(data.value);
  };

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      {normalizeDate.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white p-4 rounded-2xl border border-line shadow-sm"
          >
            <div className="text-gray-600 lg:text-base md:text-sm font-semibold truncate">
              {item.title}
            </div>

            <div className="lg:mt-3 md:mt-2">
              <div className="lg:text-2xl md:text-xl font-semibold text-black/70 wrap-break-word">
                {formatValue(item)}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-1">
                <div className="flex items-center gap-2 w-fit bg-app px-2 py-1.5 rounded-xl">
                  <img
                    src={
                      `images/stock_${item.per / 100 >= 50 ? "up" : "down"}.png`
                    }
                    className="w-5 lg:w-6"
                  />

                  <div
                    className={
                      `text-sm lg:text-base 
                      ${item.per / 100 >= 50 ? "text-green-600" : "text-red-600"}
                      ${item.per}`
                    }
                  >
                    {formatPercentage(item.per)}
                  </div>
                </div>

                <div className="hidden md:block text-xs lg:text-sm text-gray-400 w-14 whitespace-nowrap">
                  {item.date}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default TotalValue