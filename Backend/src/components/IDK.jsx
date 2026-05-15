import React from 'react'
import { Sidebar } from './Sidebar'

function IDK() {
  return (
    <div className="flex min-h-screen bg-body font-Inter">
      <Sidebar />
      <div className=" flex flex-col items-center justify-center h-screen w-full gap-5">
        <h1 className="text-3xl font-bold text-red-500">??? - Page not found</h1>
        <h1 className="text-red-500 text-5xl">No UX/UI design.</h1>
      </div>
    </div>
  )
}

export default IDK;
