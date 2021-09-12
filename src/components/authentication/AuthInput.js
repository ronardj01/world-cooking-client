import React from "react";

export default function AuthInput({
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
      <label htmlFor={inputId} className="form-label text-blacky text-lg font-semibold mb-1 block">
        {label}
      </label>

      <input
        type={inputType}
        className="form-input mb-4 rounded-lg border w-full border-ebony p-2"
        id={inputId}
        value={inputValue}
        onChange={handldeInput}
        required
      />
    </div>
  );
}
