import React from "react";

export const AnswerItem = ({ id, AnswerLabel, value, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        onChange={onChange}
        checked={value === id}
        required
        type="radio"
        name="question"
        id={id}
        value={id}
      />
      <label htmlFor={id}>{AnswerLabel}</label>
    </li>
  );
};
