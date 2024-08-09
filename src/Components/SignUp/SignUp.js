import React, { useState } from "react";
import InputField from "../InputField/InputFiled";
import "./SignUp.css";
import "../Login/Login.css";

const SignUp = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: undefined,
    name: undefined,
    phone: undefined,
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

    // Simple validation example
    if (name === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === "phone") {
      isValid = /^\+\d{1,3} \d{3} \d{3} \d{4}$/.test(value);
    } else if (name === "password") {
      isValid = value.length >= 8;
    }

    setFormErrors({
      ...formErrors,
      [name]: isValid ? true : false,
    });
  };

  return (
    <div id="sign-up-popup" className="sign-up-popup">
      <div className="popup-header">
        <h2 className="popup-header-title">Welcome</h2>
      </div>

      <form className="popup-form">
        <div className="input-container">
          <label>Role</label>
          <div className="select-wrapper">
            <div className="custom-select" style={{ width: "200px" }}>
              <select>
                <option className="custom-select-option" value="0">
                  Patient
                </option>
                <option className="custom-select-option" value="1">
                  Doctor
                </option>
                <option className="custom-select-option" value="2">
                  Admin
                </option>
              </select>
            </div>
          </div>
        </div>

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
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder=""
          required
          isCorrect={formErrors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          placeholder="+X XXX XXX XXXX"
          pattern="\+\d{1,3} \d{3} \d{3} \d{4}"
          required
          isCorrect={formErrors.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Password"
          type="password"
          id="password-sign-in"
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
            Already have an account?
          </label>
          <button
            className="teriary-button popup-button button"
            onClick={() => handleLogin()}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
