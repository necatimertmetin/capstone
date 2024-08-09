import React from "react";

const VerticalWrapper = ({ children }) => {
    // You can add any logic here that you want to apply to the wrapped components
    return (
      <div className="VerticalWrapper">
        {children}
      </div>
    );
  };
export default VerticalWrapper;