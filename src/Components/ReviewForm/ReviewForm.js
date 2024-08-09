import React from "react";
import "./ReviewForm.css";
import CardContainer from "../CardContainer/CardContainer";
const ReviewForm = () => {
  const reviews = "Reviews";
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">{reviews}</div>
      <CardContainer/>
    </div>
  );
};

export default ReviewForm;
