import './Customer.css';
import React, { useState } from 'react'

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

const defaultDate = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
  status: true,
  loyalty_points: 0,
  image: null,
}

export function Customer({ customerList, loadCustomer }) {
  const title = "Customer";
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState(defaultDate);

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
    setForm(defaultDate)
    setImagePreview("");
    setEditId(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("first_name", form.first_name);
      formData.append("last_name", form.last_name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("is_active", form.status);
      formData.append("loyalty_points", form.loyalty_points);

      if (form.password) {
        formData.append("password", form.password);
      }

      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      if (mode === "add") {
        await axios.post(`/api/customers`, formData);
      } else {
        await axios.put(`/api/customers/${editId}`, formData);
      }

      resetForm();
      loadCustomer();
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
    loadCustomer();
    setOpen(true);
  };

  const handleOpenEdit = (customer) => {
    setMode("edit");
    setEditId(customer.customer_id)

    setForm({
      first_name: customer.first_name || "",
      last_name: customer.last_name || "",
      email: customer.email || "",
      password: customer.email || "",
      phone: customer.phone || "",
      loyalty_points: customer.loyalty_points ?? 0,
      status: customer.is_active === true || customer.is_active === "true",
      imgeUrl: customer.image_url ?? ""
    });

    setImagePreview(customer.image_url)
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
        handleImageChange={handleFileChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}