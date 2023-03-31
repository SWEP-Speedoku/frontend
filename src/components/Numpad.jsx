import { Toolbar } from "@mui/material";
import React, { useState } from "react";

function Numpad() {
    const [currentNumber, setCurrentNumber] = useState("");

    const handleNumberClick = (number) => {
        if (currentNumber.length < 1) {
            setCurrentNumber(number);
        }
    };

    const handleDeleteClick = () => {
        setCurrentNumber("");
    };

    return (
        < div id="numpad" >
            <Toolbar />
            <div id="numpadButtonCol">
                <button className="numpadButton" onClick={() => handleNumberClick("1")}>1</button>
                <button className="numpadButton" onClick={() => handleNumberClick("2")}>2</button>
                <button className="numpadButton" onClick={() => handleNumberClick("3")}>3</button>
                <button className="numpadButton" onClick={() => handleNumberClick("4")}>4</button>
                <button className="numpadButton" onClick={() => handleNumberClick("5")}>5</button>
                <button className="numpadButton" onClick={() => handleNumberClick("6")}>6</button>
                <button className="numpadButton" onClick={() => handleNumberClick("7")}>7</button>
                <button className="numpadButton" onClick={() => handleNumberClick("8")}>8</button>
                <button className="numpadButton" onClick={() => handleNumberClick("9")}>9</button>
                <button className="numpadButton" onClick={() => handleDeleteClick()}>&lt;</button>
            </div>
        </div >
    );
}

export default Numpad;
