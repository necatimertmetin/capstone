import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ cardData, cardType, onSelect }) => {

  return (
    <div className="card-container">
       {cardData && cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Card
            key={index}
            type={card.type}
            data={card}
            cardType={cardType}
            onSelect={onSelect}
          />
        ))
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
};

export default CardContainer;
