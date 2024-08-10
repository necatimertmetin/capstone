import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ cardData, cardType, onSelect, onSubmit }) => {

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
            onSubmit={onSubmit}
          />
        ))
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
};

export default CardContainer;
