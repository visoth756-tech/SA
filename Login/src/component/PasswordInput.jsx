function PasswordInput({ label, name, placeholder, className, show, onToggle, value, onChange, error }) {
  return (
    <div className={className}>
      <label className="text">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="input-box pr-10 focus:outline-none focus:border-coffee-400 focus:ring-2 focus:ring-coffee-400 transition"
          name={name}
          autoComplete="current-password"
          value={value}
          onChange={onChange}
        />
        <img
          src={`/image/${show ? "hide" : "unhide"}.png`}
          alt="Show/Hide"
          onClick={onToggle}
          className="h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
      <p className="error-text">{error}</p>
    </div>)
}

export default PasswordInput