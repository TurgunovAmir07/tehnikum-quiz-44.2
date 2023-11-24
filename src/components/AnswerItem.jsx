import React from "react";

export const AnswerItem = ({ id, AnswerLabel, isChecked, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={isChecked}
        required
        type="radio"
        name="question"
        id={id}
      />
      <label htmlFor={id}>{AnswerLabel}</label>
    </li>
  );
};
