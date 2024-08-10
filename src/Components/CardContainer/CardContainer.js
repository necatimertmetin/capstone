import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ cardData }) => {
  return (
    <div className="card-container">
      {cardData && cardData.map((card, index) => (
        <Card
          key={index}
          type={card.type}
          data={card.data}
        />
      ))}
    </div>
  );
};

export default CardContainer;
