import React, { useState } from "react";
import AuthInput from "../../components/authentication/AuthInput";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit Working");
  };
  return (
    <div className="login auth">
      <div className="auth-container">
      <h1 className="auth-h1">Welcome to Worl Cooking!</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <AuthInput
          label="Email"
          inputType="email"
          inputId="email-input"
          inputValue={email}
          onChange={setEmail}
        />
        <AuthInput
          label="Password"
          inputType="password"
          inputId="password-input"
          inputValue={password}
          onChange={setPassword}
        />
        <button type="submit" className="auth-btn">
          Login
        </button>
      </form>
      </div>
    </div>
  );
}
