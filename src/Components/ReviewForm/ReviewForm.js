import React, { useEffect, useState } from "react";
import "./ReviewForm.css";
import CardContainer from "../CardContainer/CardContainer";

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Retrieve feedbacks from localStorage
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    // Example predefined doctors, replace this with your actual data source
    const predefinedDoctors = [
      { name: "Denis Raj", speciality: "Dentist" },
      { name: "Emily Clarke", speciality: "Pediatrician" },
      // Add more predefined doctors if necessary
    ];

    // Enrich predefined doctors with feedbacks
    const enrichedReviews = predefinedDoctors.map((doctor) => {
      // Filter feedbacks related to this doctor
      const doctorFeedbacks = storedFeedbacks.filter(
        (feedback) => feedback.doctorName === doctor.name
      );

      // Return the enriched doctor object
      return {
        ...doctor,
        reviews: doctorFeedbacks.map(feedback => ({
          review: feedback.review,
          rating: feedback.rating,
          date: feedback.date,
        })),
      };
    });

    // Update state with enriched reviews
    setReviews(enrichedReviews);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Reviews</div>
      <CardContainer cardData={reviews} cardType={"review"} />
    </div>
  );
};

export default ReviewForm;
