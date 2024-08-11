import React, { useEffect, useState } from 'react';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = () => {
  // State to hold appointments data
  const [appointments, setAppointments] = useState([]);
  // State to hold the active user name (if there is a match)
  const [activeUser, setActiveUser] = useState(null);

  // useEffect hook to load appointments from localStorage and check for user match on component mount
  useEffect(() => {
    // Retrieve existing appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Retrieve user object from sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('user'));

    // Check if there's a user in sessionStorage and if the user name matches any appointment name
    if (storedUser && storedUser.name) {
      const nameMatch = storedAppointments.some(appointment => appointment.name === storedUser.name);
      setActiveUser(nameMatch ? storedUser.name : null);
      console.log(nameMatch); // Log whether there is a name match
    }

    // Update state with retrieved appointments
    setAppointments(storedAppointments);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Filter appointments to only include those for the active user
  const filteredAppointments = activeUser
    ? appointments.filter(appointment => appointment.name === activeUser)
    : [];

  // Return null if there are no appointments to display
  if (filteredAppointments.length === 0) {
    return null;
  }

  return (
    <div className='notification-container'>
      <div>
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
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
