import React from "react";

export const AppCheckbox = ({ checkboxLabel, ...props }) => {
  return (
    <label>
      <input className="AppCheckbox" type="checkbox" {...props} />
      <span>{checkboxLabel}</span>
    </label>
  );
};
