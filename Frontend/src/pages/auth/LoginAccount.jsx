import { Link } from "react-router-dom";
import { validateLogin } from "../../utils/auth/validateLogin";
import InputField from '../../components/auth/InputField';
import { useForm } from "../../utils/auth/useForm";

function LoginAccount() {
  const { form, errors, setErrors, showPassword, setShowPassword, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLogin(form, setErrors)) return;

    console.log(form);
    
    resetForm();
  };

  return (
    <div className="bg-[#F0EDEB] text-inter">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md border border-coffee-200 rounded-2xl bg-white/50 shadow-lg backdrop-blur-sm p-10"
        >
          {/* Header */}
          <Link to="/" className="flex flex-col items-center gap-2">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-32"
            />

            <div className="text-coffee-900 font-bold text-3xl">
              Welcome Back
            </div>

            <div className="text-coffee-900 opacity-70 text-center">
              Login to your account to continue
            </div>

          </Link>

          {/* Email */}
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            wrapperClassName="mt-8"
            inputClassName="focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-400/30 transition"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Password */}
          <div className="mt-4">

            <div className="flex justify-between items-center">

              <label className="text">
                Password
              </label>

              <div className="font-medium text-coffee-400 cursor-pointer hover:underline">
                Forgot Password?
              </div>

            </div>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input-box pr-10 focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-400/30 transition"
                name="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
              />

              <img
                src={`/images/${showPassword ? "hide" : "unhide"}.png`}
                alt="Show Password"
                onClick={() => setShowPassword(!showPassword)}
                className="h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              />

            </div>

            <p className="error-text">
              {errors.password}
            </p>

          </div>

          {/* Login Button */}
          <div className="mt-8">

            <button
              type="submit"
              className="btn"
            >
              Login
            </button>

          </div>

          {/* Create Account */}
          <div className="flex justify-center gap-1.5 mt-10">

            <span className="close-text">
              Don't have an account?
            </span>

            <Link
              to="/auth/createAcc"
              className="close-link"
            >
              Create Account
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAccount;