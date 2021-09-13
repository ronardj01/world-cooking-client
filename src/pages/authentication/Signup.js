import React, { useState } from "react";
import AuthInput from "../../components/authentication/AuthInput";
import fetchData from "../../utils/fetchData";

export default function Signup() {
  const [email, setEmail] = useState("");

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupData = {email, password, userName};
    const url = `${process.env.REACT_APP_BACK_URL}/authentication/register`;
    const data = await fetchData(signupData, url, "POST");
  };
  return (
    <div className="signup auth">
      <div className="auth-container">
        <h1 className="auth-h1">Welcome to World Cooking!</h1>
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
          <button type="submit" className="auth-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
