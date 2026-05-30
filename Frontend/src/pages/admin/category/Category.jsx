import React, { useState } from 'react'
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableData from '../../../components/admin/TableData';
import EmptyTable from '../../../components/common/EmptyTable';

import axios from 'axios';
import ConfirmPopup from '../../../components/common/ConfirmPopup';
import CategoryPopup from './CategoryPopup';
import TableCategory from './TableCategory';

function Category({ category, categoryList, loadCategory }) {
  const title = "Category";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const totalCard = {
    total_categories: {
      id: "total_category",
      name: "Total Categories",
      type: "static",
      value: category.total_categories,
    }
  }

  const handleOpenAdd = () => {
    setMode("add");
    setName("");
    setDesc("");
    setOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (mode === "add") {
        await axios.post("/api/categories", { category_name: name });
      } else {
        await axios.put(`/api/categories/${editId}`, { category_name: name });
      }
      setName(""); 
      setDesc(""); 
      setOpen(false); 
      loadCategory();

    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenEdit = (category) => {
    setMode("edit");
    setEditId(category.category_id);
    setName(category.category_name);
    setDesc("");
    setOpen(true);
  };

  return (
    <>
      <title>{title}</title>

      <div className="flex h-screen overflow-hidden bg-body font-Inter">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto bg-white border border-line rounded-2xl">
          <Header header={title} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
            <TotalValue
              totalValue={totalCard}
            />
            {/* Card */}
            <div className="flex flex-col justify-between gap-4 bg-white p-4 lg:p-5 rounded-2xl border border-line shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src="/images/add_coffee_outline.png"
                  className="w-9 h-9 lg:w-10 lg:h-10 bg-[#F0EDEB] rounded-lg p-2 shrink-0"
                  alt="add icon"
                />

                <div className="min-w-0">
                  <div className="text-base lg:text-lg font-medium truncate">
                    New {title}
                  </div>

                  <div className="truncate text-xs lg:text-sm text-gray-400">
                    Create new {title.toLowerCase()}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleOpenAdd()}
                className="bg-primary hover:opacity-90 text-white text-sm lg:text-base py-2.5 rounded-2xl transition-all duration-200"
              >
                Add {title}
              </button>
            </div>
          </div>
          <SearchInfo />
          <TableCategory
            title={title}
            categoryList={categoryList}
            loadCategory={loadCategory}

            handleOpenEdit={handleOpenEdit}
          />
        </div>
      </div>

      <CategoryPopup
        title={title}
        open={open}
        setOpen={setOpen}
        name={name}
        setName={setName}
        desc={desc}
        setDesc={setDesc}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Category