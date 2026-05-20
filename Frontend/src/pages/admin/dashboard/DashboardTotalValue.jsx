import React from 'react'
import { formatMoney, formatPercentage } from '../../../utils/admin/formating';

export default function DashboardTotalValue() {
  const total = [
    {
      name: 'Income',
      current: { priceInCents: 300000, percent: 3000 },
      previous: { priceInCents: 200000, percent: 1000 }
    },
    {
      name: 'Menu',

      current: { priceInCents: 400000, percent: 500 },
      previous: { priceInCents: 200000, percent: 1000 }
    },
    {
      name: 'Order',
      current: { priceInCents: 400000, percent: 4500 },
      previous: { priceInCents: 200000, percent: 1000 }
    },
    {
      name: 'Customer',
      current: { priceInCents: 400000, percent: 500 },
      previous: { priceInCents: 200000, percent: 1000 }
    }
  ];

  function getStockStatus(current, previous) {
    if (typeof current !== 'number' || typeof previous !== 'number') {
      return { diff: 0, percent: 0 };
    }

    const diff = current - previous;
    const percent = previous === 0 ? 0 : (diff / previous) * 100;

    return {
      diff,
      percent: Math.abs(percent)
    };
  }

  return (
    <div
      className="
    flex-1
    grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-3
  "
    >
      {total.map((item, index) => {
        const { diff, percent } = getStockStatus(
          item.current.percent,
          item.previous.percent
        );

        return (
          <div
            key={index}
            className="
              flex flex-col justify-between
              bg-white py-4 px-3 rounded-2xl border border-line shadow-sm min-h-37.5"
          >
            {/* TITLE */}
            <div
              className="
                text-gray-600
                font-semibold
                whitespace-nowrap
              "
            >
              Total {item.name}
            </div>

            {/* CONTENT */}
            <div className="mt-4">
              <div
                className="
                  text-2xl
                  font-semibold
                  wrap-break-word
                "
              >
                {formatMoney(item.current.priceInCents)}
              </div>

              <div
                className="
                  flex items-center flex-wrap
                  gap-2
                  mt-3
                "
              >
                {/* STOCK STATUS */}
                <div
                  className="
                    flex items-center
                    gap-2
                    w-fit
                    bg-app
                    px-2 py-1.5
                    rounded-xl
                  "
                >
                  <img
                    src={`images/stock_${diff > 0 ? "up" : "down"}.png`}
                    className="w-5 lg:w-6"
                  />

                  <div
                    className={`
                      text-sm
                      ${diff > 0 ? "text-green-600" : "text-red-600"}
                    `}
                  >
                    {formatPercentage(percent)}
                  </div>
                </div>

                {/* MONTH */}
                <div
                  className="
                    hidden md:block
                    text-sm
                    text-gray-400
                    whitespace-nowrap
                  "
                >
                  This Month
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
