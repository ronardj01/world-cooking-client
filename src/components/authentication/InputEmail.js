import React from "react";

export default function InputEmail({ email, onChange }) {
  function handldeInput(e) {
    e.preventDefault();
    onChange(e.target.value);
  }
  return (
    <div className="authentication">
      <label htmlFor="input-email" className="form-label">
        Email
      </label>

      <input
        type="email"
        className="form-input"
        id="input-email"
        value={email}
        onChange={handldeInput}
        required
      />
    </div>
  );
}
