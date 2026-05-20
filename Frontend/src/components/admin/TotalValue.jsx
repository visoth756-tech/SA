import React from 'react'
import { formatMoney, formatNumber, formatPercentage } from '../../utils/admin/formating';

function TotalValue({ totalValue }) {
  const collectAllSections = (data) => {
    return Object.values(data).map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      period: item.period || null,
      value: item.value,
      history: item.history || [],
      date: item.history?.at(-1)?.month || "N/A",
      per: calculatePercent(item.history),
    }));
  };

  const calculatePercent = (history) => {
    if (!history || history.length < 2) return 0;

    const prev = history[history.length - 2].value;
    const current = history[history.length - 1].value;

    return ((current - prev) / prev) * 100;
  };

  const formatValue = (item) => {
    return item.type === "money"
      ? formatMoney(item.value)
      : formatNumber(item.value);
  };

  const normalizeData = collectAllSections(totalValue);

  return (
    <div className="col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
      {normalizeData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between bg-white p-4 rounded-2xl border border-line shadow-sm"
        >
          <div className="text-gray-600 lg:text-base md:text-sm font-semibold truncate">
            {item.name}
          </div>

          <div className="lg:mt-3 md:mt-2">
            <div className="text-2xl font-semibold text-black/70 wrap-break-word">
              {formatValue(item)}
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1">
              <div className="flex items-center gap-2 w-fit bg-app px-2 py-1.5 rounded-xl">
                <img
                  src={
                    `/images/stock_${item.per >= 0 ? "up" : "down"}.png`
                  }
                  className="w-5 lg:w-6"
                />

                <div
                  className={
                    `text-sm lg:text-base 
                      ${item.per >= 0 ? "text-green-600" : "text-red-600"}`
                  }
                >
                  {formatPercentage(item.per)}
                </div>
              </div>

              <div className="hidden sm:block text-sm text-gray-400 w-14 whitespace-nowrap">
                {item.period}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TotalValue