import React from "react";

export const AnswerItemImg = ({
  id,
  AnswerParagraph,
  isChecked,
  onChange,
  imgSrc,
  imgAlt,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <img src={imgSrc} alt={imgAlt} />
        <p>{AnswerParagraph}</p>
      </label>
    </li>
  );
};
