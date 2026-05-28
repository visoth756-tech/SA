import React, { useEffect, useRef, useState } from 'react'
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

  const defaultForm = {
    name: "",
    desc: "",
    price: "",
    category_id: categoryList[0]?.category_id ?? "",
    status: "true",
  };

  const [form, setForm] = useState(defaultForm);

  const [imagePreview, setImagePreview] = useState("");
  const imageRef = useRef(null);

  const loadProduct = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      imageRef.current = file;
      setImagePreview(URL.createObjectURL(file));
    }
  }

  const createFormData = () => {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "price") {
        formData.append(key, Number(parseFloat(value) * 100));
      } else if (key === "status") {
        formData.append("is_active", value === "true");
      } else if (key === "desc") {
        formData.append("description", value);
      } else if (key === "category_id") {
        formData.append("category_id", value);
      } else {
        formData.append(key, value);
      }
    });
    if (imageRef.current) formData.append("image", imageRef.current);

    return formData;
  };

  const resetForm = () => {
    setForm(defaultForm)
    setImagePreview("");
    imageRef.current = null;
    setEditId(null);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = createFormData();
      if (mode === "add") {
        await axios.post("/api/products",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

      } else {
        await axios.put(`/api/products/${editId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

      }

      resetForm();
      setOpen(false);
      loadProduct();

    } catch (err) {
      console.log("Error:", err.response?.data);
      setOpen(false);
    } finally {
      setLoading(false)
    }
  };

  const handleOpenAdd = () => {
    resetForm();
    setMode("add");
    setOpen(true);
  };

  const handleOpenEdit = (item) => {
    setMode("edit");
    setEditId(item.product_id)

    setForm({
      name: item.name,
      desc: item.description,
      price: Number(item.price) / 100,
      category_id: item.category_id,
      status: String(item.is_active),
    });

    setImagePreview(item.image_url)
    setOpen(true);
  }

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
            <AddNewValue
              title={title}
              onClick={() => handleOpenAdd()}
            />
          </div>
          <SearchInfo />

          <TableProduct
            title={title}
            productLists={productLists}
            handleOpenEdit={handleOpenEdit}
            loadProduct={loadProduct}
          />
        </div >
      </div >
      <PopupProducts
        title={title}
        open={open} setOpen={setOpen}
        form={form} setForm={setForm}
        imagePreview={imagePreview}
        mode={mode}
        loading={loading}

        categoryList={categoryList}

        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}