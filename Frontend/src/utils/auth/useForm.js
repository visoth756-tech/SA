import { useState } from "react";

export function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const resetForm = () => {
    setForm(initialValues);
    setErrors({});
    setShowPassword(false);
  };

  return { form, errors, setErrors, showPassword, setShowPassword, handleChange, resetForm, setForm };
}