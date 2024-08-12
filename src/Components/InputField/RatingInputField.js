import React, { useState } from "react";
import emptyStarImg from "../assets/media/star.png";
import filledStarImg from "../assets/media/star_filled.png";

const RatingInputField = ({ label, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  // Handle star click event
  const handleStarClick = (index) => {
    const newRating = index + 1; // Index is zero-based, so +1 to match star count
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating); // Notify parent about the rating change
    }
  };

  return (
    <div className="input-container rating-container">
      <label>{label}</label>
      <div className="rating-input-star-container">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={index < rating ? filledStarImg : emptyStarImg}
            alt="star"
            onClick={() => handleStarClick(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingInputField;
