import React, { useState } from "react";
import AuthInput from "../../components/authentication/AuthInput";

export default function Signup() {
  const [email, setEmail] = useState("");

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit Working");
  };
  return (
    <div className="signup">
      <h1>Welcome!</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <AuthInput
          label="Email"
          inputType="email"
          inputId="email-input"
          inputValue={email}
          onChange={setEmail}
        />
        <AuthInput
          label="User Name"
          inputType="text"
          inputId="username-input"
          inputValue={userName}
          onChange={setUserName}
        />
        <AuthInput
          label="Password"
          inputType="password"
          inputId="password-input"
          inputValue={password}
          onChange={setPassword}
        />
        <button type="submit" className="btn">
          Signup
        </button>
      </form>
    </div>
  );
}
