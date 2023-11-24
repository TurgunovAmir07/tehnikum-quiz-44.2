import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled, onClick }) => {
  return (
    <button
      type={buttonType === "submit" ? "submit" : "button"}
      disabled={isDisabled}
      // onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
