import React, { useEffect } from 'react'
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
// import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableData from '../../../components/admin/TableData';
import AddNewCategory from './addNewCategory';
import axios from 'axios';

function Category({ list }) {
  const titleBoard = "Category";
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3100/api/categories/${id}`
      );
      window.location.reload();

      console.log("Deleted:", res.data);
    } catch (err) {
      console.log("Delete error:", err);
    }
  };
  useEffect(() => {
    handleDelete();
  }, []);

  return (
    <>
      <title>{titleBoard}</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={titleBoard} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* <TotalValue
            /> */}
            <AddNewCategory title={titleBoard} />
          </div>
          <SearchInfo />
          <div className="w-full overflow-auto border border-line rounded-2xl">
            <div className="min-w-[225px]">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] sticky top-0 bg-app font-semibold text-sm rounded-t-2xl px-4 py-3 border-b border-gray-300">
                <div>ID</div>
                <div>Category</div>
                <div>Status</div>
                <div className="flex justify-center">Action</div>
              </div>

              {/* TABLE ROWS (dynamic) */}
              {list.map((category) => (
                <div
                  key={category.category_id}
                  className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr] text-sm px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div>{category.category_id}</div>
                  <div>{category.category_name}</div>
                  <div>
                    <span className={`rounded-full text-xs`}>
                      STATUS
                    </span>
                  </div>
                  <div className="flex justify-center gap-3">
                    <button
                      // onClick={() => handleEdit(category)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                    <button
                      key={category.category_id}
                      onClick={() => handleDelete(category.category_id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {/* Optional: empty state */}
              {list.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No categories found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category