import React, { useEffect, useState } from 'react'
import './Menu.css';
import TableData from "../../../components/admin/TableData";
import TotalValue from "../../../components/admin/TotalValue";
import Sidebar from '../../../components/admin/Sidebar';
import { Header } from '../../../components/admin/Header';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import axios from 'axios';
import PopupProducts from './PopupProducts';
import TableProduct from './TableProduct';

export function Menu({ categoryList }) {
  const title = "Product";
  const img = "/images/product-coffee.png";
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  // const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState(categoryList[0]?.category_id ?? "");
  const [status, setStatus] = useState("true");

  const loadProduct = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/products", {
        name,
        description: desc,
        category_id: categoryId,
        price: Number(price * 100),
        is_active: status === "true",
      });
      setName("");
      setDesc("");
      setCategoryId("");
      setPrice("")
      setStatus("")
      setOpen(false);

      loadProduct();
    } catch (err) {
      console.log("Error:", err.response?.data);
    }
  };

  const handleOpenAdd = () => {
    setMode("add");
    setName("");
    setDesc("");
    setCategoryId(categoryList[0]?.category_id ?? "");
    setPrice("")
    setStatus("true")
    setOpen(true);
  };

  const handleEdit = async () => {
    // your edit logic here
  };

  useEffect(() => {
    const fetchOnMount = async () => {
      await loadProduct();
    };
    fetchOnMount();
  }, []);


  const productLists = products.list || [];
  const totalCard = {
    total_products: {
      id: "total_products",
      name: "Total Products",
      type: "static",
      value: Object.keys(productLists).length,
    }
  }

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
            <AddNewValue title={title}
              onClick={() => handleOpenAdd()}
            />
          </div>
          <SearchInfo />

          <TableProduct
            productLists={productLists}
            loadProduct={loadProduct}
            img={img}
          />
        </div >
      </div >
      <PopupProducts
        title={title}
        open={open} setOpen={setOpen}
        name={name} setName={setName}
        desc={desc} setDesc={setDesc}
        categoryId={categoryId} setCategoryId={setCategoryId}
        price={price} setPrice={setPrice}
        status={status} setStatus={setStatus}

        categoryList={categoryList}
        mode={mode}
        handleSubmit={mode === "edit" ? handleEdit : handleSubmit}
      />
    </>
  );
}