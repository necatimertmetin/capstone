import React, { useState } from "react";

const TextareaField = ({
  id,
  name,
  value,
  placeholder,
  required = false,
  onChange,
  onBlur,
  isCorrect,
  label,
  readOnly = false,
}) => {
  // Determine the textarea class based on isCorrect value
  let textareaClass = "textarea-wrapper";
  if (isCorrect === false) {
    textareaClass += " error";
  } else if (isCorrect === true) {
    textareaClass += " success";
  }

  return (
    <div className="textarea-container">
      <label htmlFor={id}>{label}</label>
      <div className={textareaClass}>
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
        />
        {/* Display an error or success icon based on isCorrect */}
        {isCorrect === false && <div className="error-icon">!</div>}
        {isCorrect === true && <div className="success-icon">✔</div>}
      </div>
    </div>
  );
};

export default TextareaField;
