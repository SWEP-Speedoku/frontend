import React from "react";
import GenericButton from "./GenericButton";

function DifficultyButton(props) {
  const { text, onClick } = props;

  function handleClick() {
    if (text) {
      onClick(text.toLowerCase());
    }
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );
}

export default DifficultyButton;