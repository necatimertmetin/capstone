import React, { useEffect, useState } from "react";
import "./Reports.css";
import CardContainer from "../CardContainer/CardContainer";

const Reports = () => {
  const [reviews, setReviews] = useState([]);

  const predefinedDoctors = [
    { name: "Denis Raj", speciality: "Dentist" },
    { name: "Emily Clarke", speciality: "Pediatrician" },
    // Add more predefined doctors if necessary
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Reports</div>
      <CardContainer cardData={predefinedDoctors} cardType={"report"} />
    </div>
  );
};

export default Reports;
