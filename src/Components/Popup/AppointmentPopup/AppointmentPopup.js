import React, { useState } from "react";
import avatarIcon from "../../assets/media/Generic avatar.png";
import "./AppointmentPopup.css";
import InputField from "../../InputField/InputFiled";

const AppointmentPopup = ({ data, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");

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
    // Burada doğrulama yapılabilir
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Formun varsayılan submit işlemini engelle

    // Form verilerini içeren bir nesne oluştur
    const appointmentData = {
      name,
      phone,
      datetime,
      doctorName: data?.name || "Unknown",
      speciality: data?.speciality || "Speciality",
      experience: data?.experience || "N/A",
      ratings: data?.ratings || "N/A",
    };

    // Form verilerini işlemek için onSubmit fonksiyonunu çağır
    onSubmit(appointmentData);
    onClose(); // Popup'ı kapat
  };

  return (
    <div className="appointment-popup">
      <img src={avatarIcon} alt="Avatar" />
      <h3>{data?.name || "Unknown"}</h3>
      <p>{data?.speciality || "Speciality"}</p>
      <p>{data?.experience} years experience</p>
      <p>{data?.ratings}</p>

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
    </div>
  );
};

export default AppointmentPopup;
