import { useState } from 'react';
import './CreateAccount.css'
import { NavLink } from "react-router-dom";
import { fakeCreateAcc } from '../utils/fakeData';
import PasswordInput from '../component/PasswordInput';
import InputField from '../component/InputField';
import { validateRegister } from '../utils/validateRegister';
import { useForm } from '../utils/useForm';

function CreateAccount() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const inputClass = "focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-400 transition";

  const { form, errors, setErrors, showPassword, setShowPassword, handleChange, resetForm, setForm } = useForm({
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateRegister(form, setErrors)) return;

    console.log(form);

    resetForm();
  };

  return (
    <div className="bg-[#F0EDEB] min-h-screen flex items-center justify-center px-4 py-8">
      <main className="w-full flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white/60 rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-black mb-6 text-coffee-900 font-stretch-100%">
            Create Your Account
          </h1>

          <button
            type="button"
            onClick={() => setForm(fakeCreateAcc)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Auto Fill
          </button>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <InputField
              label="First Name"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              inputClassName={inputClass}
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            {/* Last Name */}
            <InputField
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              inputClassName={inputClass}
              value={form.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text">Gender</label>

              <div className="relative">
                <select
                  className="input-box focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-400 appearance-none cursor-pointer"
                  name='gender'
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="no selecting">Prefer not to say</option>
                </select>

                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-coffee-400"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="error-text">{errors.gender}</p>
            </div>

            {/* Phone */}
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              inputClassName={inputClass}
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            {/* Email */}
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              wrapperClassName="md:col-span-2"
              inputClassName={inputClass}
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Password */}
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              className="md:col-span-2 flex flex-col"
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
              value={form.password}
              onChange={handleChange}
              error={errors.password}
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="md:col-span-2 flex flex-col"
              show={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            {/* Button */}
            <div className="md:col-span-2 mt-1">
              <button
                type='submit'
                className='btn'
              >
                Register
              </button>
              {/* <p className="error-text">{errors.firstName}</p> */}
            </div>

            {/* Login */}
            <div className="md:col-span-2 flex justify-center gap-1.5">
              <span className="close-text">
                Already have an account?
              </span>

              <NavLink to="/" className="close-link">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </main>
    </div>

  );
}

export default CreateAccount;