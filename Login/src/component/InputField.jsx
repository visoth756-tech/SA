function InputField({ label, type, name, placeholder, wrapperClassName, inputClassName, value, onChange, error }) {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      <label className="text">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input-box ${inputClassName}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="error-text">{error}</p>
    </div >
  )
}

export default InputField