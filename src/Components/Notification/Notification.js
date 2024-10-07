import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [appointments, setAppointments] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    // Retrieve existing appointments and user from storage
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(storedAppointments);
    console.log(storedUser);
    if (storedUser && storedUser.name) {
      // Convert both the user's name and appointment names to lowercase for comparison
      const nameMatch = storedAppointments.some(
        (appointment) =>
          appointment.name.toLowerCase() === storedUser.name.toLowerCase()
      );
      console.log(nameMatch);
      setActiveUser(nameMatch ? storedUser.name : null);
    }

    setAppointments(storedAppointments);
  }, []);

  // Filter appointments based on the active user
  const filteredAppointments = activeUser
    ? appointments.filter(
        (appointment) =>
          appointment.name.toLowerCase() === activeUser.toLowerCase()
      )
    : [];

  if (filteredAppointments.length === 0) {
    return null; // Return null if no appointments found for the active user
  }

  return (
    <div className="notification-container">
      {filteredAppointments.map((appointment, index) => (
        <div key={index}>
          <strong>Doctor:</strong> {appointment.doctorName} <br />
          <strong>Speciality:</strong> {appointment.speciality} <br />
          <strong>Name:</strong> {appointment.name} <br />
          <strong>Phone:</strong> {appointment.phone} <br />
          <strong>Date of Appointment:</strong> {appointment.datetime} <br />
        </div>
      ))}
    </div>
  );
};

export default Notification;
