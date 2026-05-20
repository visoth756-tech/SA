import { errorMessages } from "./errorMessages";
import { users } from "./fakeData";

export const validateLogin = (form, setErrors) => {
  const newErrors = {};

  if (!form.email.trim())
    newErrors.email = errorMessages.email.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    newErrors.email = errorMessages.email.invalid;

  if (!form.password)
    newErrors.password = errorMessages.password.required;

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return false;
  }

  // Check email exists
  const user = users.find(u => u.email === form.email);
  if (!user) {
    newErrors.email = errorMessages.email.notFound;
    setErrors(newErrors);
    return false;
  }

  // Check password matches
  if (user.password !== form.password) {
    newErrors.password = errorMessages.password.wrong;
    setErrors(newErrors);
    return false;
  }

  setErrors({});
  return true;
};