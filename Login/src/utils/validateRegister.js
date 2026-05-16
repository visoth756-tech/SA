import { errorMessages } from "./errorMessages";
import { emails } from "./fakeData";

export const validateRegister = (form, setErrors) => {
  const newErrors = {};

  if (!form.firstName.trim())
    newErrors.firstName = errorMessages.firstName.required;

  if (!form.lastName.trim())
    newErrors.lastName = errorMessages.lastName.required;

  if (!form.gender)
    newErrors.gender = errorMessages.gender.required;

  if (!form.phone)
    newErrors.phone = errorMessages.phone.required;
  else if (!/^\d{9,}$/.test(form.phone))
    newErrors.phone = errorMessages.phone.invalid;

  if (!form.email.trim())
    newErrors.email = errorMessages.email.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    newErrors.email = errorMessages.email.invalid;
  else if (emails.includes(form.email))
    newErrors.email = errorMessages.email.exists;

  if (!form.password)
    newErrors.password = errorMessages.password.required;
  else if (form.password.length < 8)
    newErrors.password = errorMessages.password.tooShort;

  if (!form.confirmPassword)
    newErrors.confirmPassword = errorMessages.confirmPassword.required;
  else if (form.confirmPassword !== form.password)
    newErrors.confirmPassword = errorMessages.confirmPassword.mismatch;

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};