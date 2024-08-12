import React, { useState } from "react";
import InputField from "../../InputField/InputFiled";
import TextareaField from "../../InputField/TextareaField";
import RatingInputField from "../../InputField/RatingInputField";

const ReviewPopup = ({ onCancel, doctorName, onFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });
  const [rating, setRating] = useState(0);
  const [formErrors, setFormErrors] = useState({
    name: undefined,
    review: undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    if (name === "name") {
      isValid = value.trim() !== "";
    } else if (name === "review") {
      isValid = value.length >= 8;
    }

    setFormErrors({
      ...formErrors,
      [name]: isValid ? true : false,
    });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name: formData.name,
      review: formData.review,
      rating: rating,
      date: new Date().toISOString(),
      doctorName: doctorName,
    };

    onFeedback(newFeedback);
  };

  return (
    <div className="feedback-popup">
      <h2 className="popup-header-title">Give Your Feedback</h2>

      <form className="popup-form" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          required
          isCorrect={formErrors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextareaField
          label="Review"
          id="review"
          name="review"
          value={formData.review}
          placeholder="Write your review..."
          required
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <RatingInputField
          label="Rating"
          onRatingChange={handleRatingChange}
        />

        <div className="review-popup-button-container">
          <button className="secondary-button card-button button" onClick={onCancel}>
            Cancel
          </button>
          <button className="primary-button card-button button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewPopup;
