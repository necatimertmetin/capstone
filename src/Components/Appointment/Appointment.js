import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";

const Appointment = () => {
  const [searchValue, setSearchValue] = useState("");


  const cardData = [
    {
      type: "speciality",
      data: {
        name: "Neurology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Cardiology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Urology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Gynecology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Pulmonology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Orthopedics",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Otology",
      },
    },
    {
      type: "speciality",
      data: {
        name: "Endocrinology",
      },
    },
  ];


  // Filter cardData based on searchValue
  const filteredCardData = cardData.filter(card =>
    card.data.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Find a doctor at your own ease</div>
     
      <Search value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <CardContainer cardData={filteredCardData} />
    </div>
  );
};

export default Appointment;
