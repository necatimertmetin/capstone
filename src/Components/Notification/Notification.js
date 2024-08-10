import React, { useEffect, useState } from 'react';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = () => {
  // State to hold appointments data
  const [appointments, setAppointments] = useState([]);

  // useEffect hook to load appointments from localStorage on component mount
  useEffect(() => {
    // Retrieve existing appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Update state with retrieved appointments
    setAppointments(storedAppointments);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Return null if there are no appointments to display
  if (appointments.length === 0) {
    return null;
  }

  return (
    <div className='notification-container'>
      <div>
        {appointments.map((appointment, index) => (
          <div key={index}>
            <strong>Doctor:</strong> {appointment.doctorName} <br />
            <strong>Speciality:</strong> {appointment.speciality} <br />
            <strong>Name:</strong> {appointment.name} <br />
            <strong>Phone:</strong> {appointment.phone} <br />
            <strong>Date of Appointment:</strong> {appointment.datetime} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
