import React, { useState, useEffect } from "react";
import avatarIcon from "../../assets/media/Generic avatar.png";
import "./AppointmentPopup.css";
import InputField from "../../InputField/InputFiled";

const AppointmentPopup = ({ data, onClose, onSubmit, mode }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    if (mode === "cancel") {
      // Retrieve appointments from localStorage
      const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      const currentAppointment = appointments.find(
        (appointment) => appointment.doctorName === data.name
      );

      if (currentAppointment) {
        setName(currentAppointment.name);
        setPhone(currentAppointment.phone);
        setDatetime(currentAppointment.datetime);
      }
    }
  }, [data.name, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "datetime") {
      setDatetime(value);
    }
  };

  const handleBlur = (e) => {
    // Validation can be added here
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (mode === "cancel") {
      // Remove appointment from localStorage
      const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      const updatedAppointments = appointments.filter(
        (appointment) => appointment.doctorName !== data.name
      );
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      window.location.reload();

      // Handle other cancel actions if needed
      onClose(); // Close the popup
    } else {
      // Form data object
      const appointmentData = {
        name,
        phone,
        datetime,
        doctorName: data?.name || "Unknown",
        speciality: data?.speciality || "Speciality",
        experience: data?.experience || "N/A",
        ratings: data?.ratings || "N/A",
      };

      // Pass the data to the onSubmit handler
      onSubmit(appointmentData);
      onClose(); // Close the popup
    }
  };

  return (
    <div className="appointment-popup">
      <img src={avatarIcon} alt="Avatar" />
      <h3>{data?.name || "Unknown"}</h3>
      <p>{data?.speciality || "Speciality"}</p>
      <p>{data?.experience} years experience</p>
      <p>{data?.ratings}</p>

      {mode !== "cancel" ? (
        <form className="popup-form" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <InputField
            label="Phone"
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            placeholder="+X XXX XXX XXXX"
            pattern="\+\d{1,3} \d{3} \d{3} \d{4}"
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <InputField
            label="Date of Appointment"
            type="datetime-local"
            id="datetime"
            value={datetime}
            name="datetime"
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="appointment-popup-button-container">
            <button
              type="button"
              className="button secondary-button appointment-button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button primary-button appointment-button"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <form className="popup-form" onSubmit={handleSubmit}>
          <strong>Name:</strong>
          <p>{name}</p>

          <strong>Phone:</strong>
          <p>{phone}</p>

          <strong>Date of Appointment:</strong>
          <p>{datetime}</p>

          <div className="appointment-popup-button-container">
            <button
              type="button"
              className="button secondary-button appointment-button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button primary-button appointment-button"
            >
              Cancel Appointment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentPopup;
