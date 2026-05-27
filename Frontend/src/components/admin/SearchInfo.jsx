import { useState } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

const statusList = ["All Status", "Active", "Inactive"];

export default function SearchInfo() {
  const container ="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white";

  const [status, setStatus] = useState("All Status");
  const [showStatus, setShowStatus] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3 border border-line rounded-2xl bg-white">

      {/* Search */}
      <div className="relative w-full md:w-[45%]">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className={`w-full pl-11 pr-4 ${container}`}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">

        {/* Status Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowStatus(!showStatus)}
            className={`flex items-center gap-2 ${container} min-w-40 justify-between`}
          >
            <span className="text-gray-700">{status}</span>
            <FiChevronDown
              className={`transition-transform ${
                showStatus ? "rotate-180" : ""
              }`}
            />
          </button>

          {showStatus && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
              {statusList.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setStatus(item);
                    setShowStatus(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Range */}
        <div className={`flex items-center gap-2 ${container}`}>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none bg-transparent"
          />

          <span className="text-gray-400">→</span>

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
          className={`flex items-center gap-2 ${container} hover:bg-gray-50 transition`}
        >
          <FiFilter />
          <span>More Filter</span>
        </button>
      </div>
    </div>
  );
}