import React from "react";

export default function AuthInut({
  label,
  inputType,
  inputId,
  inputValue,
  onChange,
}) {
  function handldeInput(e) {
    e.preventDefault();
    onChange(e.target.value);
  }
  return (
    <div className="authentication">
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>

      <input
        type={inputType}
        className="form-input"
        id={inputId}
        value={inputValue}
        onChange={handldeInput}
        required
      />
    </div>
  );
}
