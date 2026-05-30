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

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const defaultDate = {
    name: "",
    desc: "",
    price: "",
    category_id: categoryList[0]?.category_id ?? "",
    status: true,
    image: null,
  }
  const [form, setForm] = useState(defaultDate);

  useEffect(() => {
    if (categoryList?.length > 0) {
      setForm(prev => ({
        ...prev,
        category_id: categoryList[0].category_id
      }));
    }
  }, [categoryList]);

  const loadProduct = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setForm(defaultDate);
    setImagePreview("");
    setEditId(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("description", form.desc);
      formData.append("price", form.price);
      formData.append("category_id", form.category_id);
      formData.append("is_active", form.status);

      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      if (mode === "add") {
        console.log(form.image);
        await axios.post("/api/products", formData);
      } else {
        await axios.put(`/api/products/${editId}`, formData);
      }

      resetForm();
      loadProduct();
      setOpen(false);
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
      setOpen(false);
    } finally {
      setLoading(false)
    }
  };

  const handleOpenAdd = () => {
    resetForm();
    setMode("add");
    loadProduct();
    setOpen(true);
  };

  const handleOpenEdit = (item) => {
    setMode("edit");
    setEditId(item.product_id)

    setForm({
      name: item.name,
      desc: item.description,
      price: Number(item.price),
      category_id: item.category_id,
      status: item.is_active === true || item.is_active === "true",
      image: null,
    });

    setImagePreview(item.image_url)
    setOpen(true);
  }

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
            <AddNewValue
              title={title}
              onClick={() => handleOpenAdd()}
            />
          </div>
          <SearchInfo />

          <TableProduct
            title={title}
            productLists={productLists}
            loading={loading} setLoading={setLoading}

            handleOpenEdit={handleOpenEdit}
            loadProduct={loadProduct}
          />
        </div >
      </div >
      <PopupProducts
        title={title}
        open={open} setOpen={setOpen}
        form={form}
        imagePreview={imagePreview}
        mode={mode}
        loading={loading}

        categoryList={categoryList}

        handleChange={handleChange}
        handleImageChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}