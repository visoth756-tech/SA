import React from 'react'

function EmptyTable({ title, emptyTable }) {
  return (
    emptyTable.length === 0 && (
      <div className="text-center py-8 text-gray-500">
        No {title} found.
      </div>
    )
  );
}

export default EmptyTable