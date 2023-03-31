import React from "react";

function GenericButton({ onClick = () => {}, children }) {
    return (
      <button className="generic-button" onClick={onClick}>
        {children}
      </button>
    );
}

export default GenericButton;