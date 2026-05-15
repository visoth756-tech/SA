import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import './Analytic.css';

export function Analytic() {
  return (
    <>
      <title>Analytic Report</title>

      <div className="flex min-h-screen bg-body font-Inter">
        <Sidebar />

        <div className="flex-1 p-6 overflow-auto bg-white border-gray-900 rounded-2xl">
          <Header header={"Analytic Report"} />
        </div>

      </div>
    </>
  );
}