import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputFiled";

const Profile = () => {
  // State to hold form data and errors
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: false,
    phone: false,
    name: false,
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve users data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the index of the user to update
    const userIndex = users.findIndex((user) => user.email === formData.email);

    if (userIndex !== -1) {
      // Update the user data
      users[userIndex] = {
        ...users[userIndex],
        name: formData.name,
        phone: formData.phone,
      };

      // Save updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("user", JSON.stringify(users[userIndex]));
      window.location.reload();
      // Optionally handle post-submit actions here (e.g., redirect or show success message)
      console.log("User data updated successfully");
    } else {
      console.log("User not found");
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle input blur
  const handleBlur = (event) => {
    const { name, value } = event.target;
    // Handle validation logic here
    // Example: setFormErrors((prevErrors) => ({ ...prevErrors, [name]: !value }));
  };

  // Function to handle Sign Up redirection
  const handleSignUp = () => {
    // Redirect to Sign Up page or handle sign up logic
  };

  // useEffect hook to retrieve user data from sessionStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user")) || {};
    if (storedUser) {
      setFormData({
        email: storedUser.email || "",
        name: storedUser.name || "",
        phone: storedUser.phone || "",
      });
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div id="sign-in-popup" className="edit-popup">
      <div className="popup-header">
        <h2 className="popup-header-title">Edit Profile</h2>
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
          readOnly
          isCorrect={!formErrors.email}
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
          isCorrect={!formErrors.name}
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
          isCorrect={!formErrors.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="form-button-container">
          <button className="primary-button popup-button button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
