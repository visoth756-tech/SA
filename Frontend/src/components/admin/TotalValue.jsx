import React from 'react'
import { FaPlus, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { formatMoney, formatNumber, formatPercentage } from '../../utils/formating';
import { formatTrend } from '../../utils/admin/formatTrend';

function TotalValue({ totalValue }) {
  const collectAllSections = (data) => {
    return Object.values(data).map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      period: item.period || null,
      value: item.value,
      per: item.per || null
    }));
  };

  const formatValue = (item) => {
    return item.type === "money"
      ? formatMoney(item.value)
      : formatNumber(item.value);
  };


  const normalizeData = collectAllSections(totalValue);

  return (
    <div className="col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
      {normalizeData.map((item) => {
        const { icon: Icon, color } = formatTrend(item.type, item.per)
        return (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white p-4 rounded-2xl border border-line shadow-sm"
          >
            <div className="text-gray-600 lg:text-base md:text-sm font-semibold truncate">
              {item.name}
            </div>

            <div className="lg:mt-3 md:mt-2">
              <div className="text-2xl font-semibold text-black/70 ms-3 wrap-break-word">
                {item.type === "static" ? item.value : formatValue(item)}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-1">
                <div className={`
                flex items-center gap-2 w-fit bg-app px-2 py-1.5 rounded-xl text-sm lg:text-base ${color}`}
                >
                  <Icon size={16} />
                  <div>
                    {item.type === "static" ? item.value : formatPercentage(item.per)}
                  </div>
                </div>
                <div className="hidden sm:block text-sm text-gray-400 w-14 whitespace-nowrap">
                  {item.type === "static" ? item.type : item.period}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TotalValue