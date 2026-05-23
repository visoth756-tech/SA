import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-body font-Inter">
      <h1 className="text-3xl font-bold text-red-500">404 - Page not found</h1>
      <p className="text-red-500">The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound