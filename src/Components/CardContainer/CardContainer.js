import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";
const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
          review: "Excellent service!",
        }}
      />

      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
       <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
          review: "Excellent service!",
        }}
      />

      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
      <Card
        type="doctor"
        data={{
          name: "Denis Raj",
          speciality: "Dentist",
        }}
      />
    </div>
  );
};

export default CardContainer;
