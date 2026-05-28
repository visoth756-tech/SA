import './Customer.css';
import React, { useRef, useState } from 'react'

import { Header } from "../../../components/admin/Header";
import NewValue from "../../../components/admin/NewValue";
import Sidebar from "../../../components/admin/Sidebar";
import TableData from '../../../components/admin/TableData';
import TotalValue from '../../../components/admin/TotalValue';
import AddNewValue from '../../../components/admin/AddNewValue';
import SearchInfo from '../../../components/admin/SearchInfo';
import TableCustomer from './TableCustomer';
import axios from 'axios';
import PopupCustomer from './PopupCustomer';

const defaultForm = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
  loyalty_points: 0,
  status: "true",
};

export function Customer({ customerList, loadCustomer }) {
  const title = "Customer";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(defaultForm);
  const [imagePreview, setImagePreview] = useState("");
  const imageRef = useRef(null);

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

    formData.append("first_name", form.first_name);
    formData.append("last_name", form.last_name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("loyalty_points", form.loyalty_points);
    formData.append("is_active", form.status === "true");

    if (form.password) {
      formData.append("password", form.password);
    }

    if (imageRef.current) {
      formData.append("image", imageRef.current);
    }

    return formData;
  };

  const resetForm = () => {
    setForm({ ...defaultForm })
    setImagePreview("");
    imageRef.current = null;
    setEditId(null);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = createFormData();
      if (mode === "add") {
        await axios.post("/api/customers",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

      } else {
        await axios.put(`/api/customers/${editId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      resetForm();
      setOpen(false);
      loadCustomer();

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

  const handleOpenEdit = (customer) => {
    setMode("edit");
    setEditId(customer.customer_id)

    setForm({
      first_name: customer.first_name || "",
      last_name: customer.last_name || "",
      email: customer.email || "",
      password: "",
      phone: customer.phone || "",
      loyalty_points: customer.loyalty_points ?? 0,
      status: String(customer.is_active ?? true),
    });

    setImagePreview(customer.image_url || "")
    setOpen(true);
  }

  const totalCard = {
    total_customer: {
      id: "total_customer",
      name: "Total Customer",
      type: "static",
      value: Object.keys(customerList).length,
    }
  }
  
  return (
    <>
      <title>Customer</title>

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

          <TableCustomer
            title={title}
            customerList={customerList}
            handleOpenEdit={handleOpenEdit}
            loadCustomer={loadCustomer}
          />
        </div>
      </div>
      <PopupCustomer
        title={title}
        open={open} setOpen={setOpen}
        form={form} setForm={setForm}

        imagePreview={imagePreview}
        loading={loading}

        customerList={customerList}

        mode={mode}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}