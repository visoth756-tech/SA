import { useState } from "react";

const statusList = [
  "All Status",
  "Active",
  "Inactive",

];

const container = "px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300";

export default function SearchInfo() {
  const [status, setStatus] = useState("All Status");
  const [showStatus, setShowStatus] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="flex items-center justify-between gap-4 p-3 border border-line rounded-2xl">

      {/* Search */}
      <div className="relative w-full md:w-[50%] max-w-md">
        <img
          src="images/search_outline.png"
          className="w-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
        />
        <input
          type="text"
          placeholder="Search..."
          className={`w-full pl-12 pr-4 ${container}`}
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Status */}
        <div className="relative">
          <button
            onClick={() => setShowStatus(!showStatus)}
            className={`flex items-center justify-between gap-3 ${container}`}
          >
            <div className="flex items-center gap-2 text-gray-700">
              {status}
            </div>
          </button>

          {showStatus && (
            <div
              className="
                absolute top-full left-0 mt-2
                w-full bg-white border border-gray-200
                rounded-2xl shadow-lg overflow-hidden z-50
              "
            >
              {statusList.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setStatus(item);
                    setShowStatus(false);
                  }}
                  className="
                    w-full text-left px-4 py-3
                    hover:bg-gray-100 transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Range */}
        <div
          className={`flex items-center gap-2 ${container}`}
        >
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none bg-transparent"
          />

          <span className="text-gray-400">to</span>

          <input
            type="date"
            min={startDate}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="outline-none bg-transparent"
          />
        </div>

        {/* More Filter */}
        <button
          className={`flex items-center gap-2 ${container}`}
        >
          <span>More Filter</span>
        </button>
      </div>
    </div>
  );
}