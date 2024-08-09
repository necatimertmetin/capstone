import React, { useState } from "react";
import InputField from "../InputField/InputFiled";
import "./Login.css";

const Login = ({handleSignUp}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    // Basit doğrulama örneği
    if (name === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === "password") {
      isValid = value.length >= 8;
    }

    setFormErrors({
      ...formErrors,
      [name]: isValid ? true : false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemleri burada yapılabilir
  };

  return (
    <div id="sign-in-popup" className="sign-in-popup">
      <div className="popup-header">
        <h2 className="popup-header-title">Welcome Back</h2>
      </div>

      <form className="popup-form" onSubmit={handleSubmit}>
        <InputField
          label="E-Mail"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="example@example.com"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
          isCorrect={formErrors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="***********"
          required
          isCorrect={formErrors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="form-button-container">
          <button className="primary-button popup-button button" type="submit">
            Submit
          </button>
          <label className="button-container-label">
            Don't have an account?
          </label>
          <button
            className="teriary-button popup-button button"
            onClick={() => handleSignUp()} // Bu işlevi değiştirebilirsiniz
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
