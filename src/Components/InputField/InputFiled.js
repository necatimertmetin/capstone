import React from 'react';

const InputField = ({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  pattern,
  required = false,
  onChange,
  onBlur,
  isCorrect,
  label
}) => {
  // Determine the input class based on isCorrect value
  let inputClass = 'input-wrapper';
  if (isCorrect === false) {
    inputClass += ' error';
  } else if (isCorrect === true) {
    inputClass += ' success';
  }

  return (
    <div className="input-container">
        <label>{label}</label>
      <div className={inputClass}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type === 'password' && (
          <div className="show-hide-icon" onClick={() => alert('Show/Hide Password')}>s</div>
        )}
        {/* Display an error or success icon based on isCorrect */}
        {isCorrect === false && <div className="error-icon">!</div>}
        {isCorrect === true && <div className="success-icon">✔</div>}
      </div>
    </div>
  );
};

export default InputField;
