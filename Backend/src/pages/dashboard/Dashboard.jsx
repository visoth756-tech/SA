import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import "./Dashboard.css";
import { formatPercentage } from "../../utils/formating";
import TableData from "../../components/TableData";
import { tableCards } from "../../utils/fakeData";
import TotalValue from "../../components/TotalValue";

export function Dashboard() {
  const tableHeader = ['Product Name', 'Order Id', 'Customer', 'Price'];
  const topSell = [
    { name: "Coffee", qty: 756, percent: "8080" },
    { name: "Doughnut", qty: 132, percent: "3990" },
    { name: "Cookie", qty: 100, percent: "2000" },
    { name: "Croissant", qty: 69, percent: "1590" },
  ];
  const totalValue = [
    {
      id: "total_orders",
      title: "Total Income",
      value: 128000,
      type: "money",
      per: 2000,
      date: "This Month"
    },
    {
      id: "revenue",
      title: "Total Revenue",
      value: 345075,
      type: "money",
      per: 5000,
      date: "This Month"
    },
    {
      id: "avg_order_value",
      title: "Total Order",
      value: 129500,
      type: "money",
      per: 10000,
      date: "This Month"
    },
    {
      id: "today_orders",
      title: "Total Customer",
      value: 42000,
      type: "money",
      per: 6800,
      date: "This Month"
    }
  ]

  return (
    <>
      <title>Dashboard</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />

        {/* MAIN CONTENT */}
        <div
          className="
            flex-1 overflow-y-auto
            bg-white border border-line rounded-2xl p-4
          "
        >
          <Header header={"Dashboard"} />

          {/* CONTENT */}
          <div
            className="overflow-hidden
              flex flex-col xl:flex-row gap-4 
              pt-4
            "
          >
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col gap-4">
              {/* HEADER */}
              <div
                className="
                  bg-white rounded-2xl border border-line shadow-sm p-4
                  flex flex-col lg:flex-row justify-between gap-4
                "
              >
                <div>
                  <p className="text-xs lg:text-sm font-semibold text-primary">
                    Welcome back, SCPisit
                  </p>

                  <h1
                    className="
                      text-base lg:text-xl
                      font-semibold
                      leading-normal
                    "
                  >
                    Coffeep take it, drink it
                    <span className="text-gray-400 font-normal">
                      {" "}
                      | Shop Status{" "}
                    </span>

                    <span className="text-green-500 font-medium">●</span>

                    <span className="text-primary font-bold">
                      {" "}
                      Online
                    </span>
                  </h1>
                </div>

                <div
                  className="
                    text-left lg:text-right
                    text-xs lg:text-sm
                    text-gray-500
                  "
                >
                  <div
                    className="
                      font-semibold
                      text-gray-700
                      flex items-center
                      lg:justify-end
                      gap-2
                    "
                  >
                    ☕ Coffeep
                    <span>↗</span>
                  </div>

                  <p>Take it, drink it</p>
                </div>
              </div>

              {/* TOTAL VALUE */}
              <TotalValue totalValue={totalValue} />

              {/* REVENUE */}
              <div
                className="
                  p-4
                  bg-white
                  border border-line
                  rounded-2xl
                  shadow-sm
                "
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm lg:text-base">
                    Revenues VS Sales
                  </span>

                  <select
                    className="
                      border border-line
                      rounded-lg
                      p-1.5
                      text-xs lg:text-sm
                    "
                  >
                    <option>Monthly</option>
                  </select>
                </div>

                <div
                  id="chart-container"
                  className="h-52 lg:h-64"
                ></div>
              </div>

              {/* RECENT ORDERS */}
              <div>
                <div className="text-base lg:text-lg font-semibold mb-3">
                  Recent Orders
                </div>

                <TableData tableHeader={tableHeader} tableCards={tableCards} />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                w-full
                flex flex-col
                gap-4
              "
            >
              {/* TODAY PERFORMANCE */}
              <div className="p-4 bg-white border border-line rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm lg:text-base">
                    Today Performance
                  </span>

                  <a
                    href="#"
                    className="text-xs text-gray-400"
                  >
                    Detail
                  </a>
                </div>

                <div
                  id="today-revenue-chart"
                  className="h-28 lg:h-32"
                ></div>
              </div>

              {/* LIVE ORDERS */}
              <div
                className="p-4 bg-white border border-line rounded-2xl shadow-sm">
                <div className="font-semibold mb-3">
                  Live Orders
                </div>

                <div className="flex justify-between gap-3 text-xs lg:text-sm text-gray-500">
                  <div className="truncate">
                    Paistudio purchased 1x Choco Chucu Coffee
                  </div>
                  <div>View</div>
                </div>
              </div>

              {/* TOP SELLING */}
              <div className="p-4 bg-white border border-line rounded-2xl shadow-sm">

                <div className="font-semibold mb-3">
                  Top Selling Items
                </div>

                <div className="text-sm flex flex-col gap-3">

                  {topSell.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">

                      {/* Left */}
                      <div>{item.name}</div>
                      {/* Right */}
                      <div>
                        <span className="text-green-500 mr-3">{item.qty}</span>
                        ({formatPercentage(item.percent)})
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}