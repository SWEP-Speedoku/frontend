import React, { useState, useEffect, useCallback } from "react";

//Gitter erstellung
function SudokuGrid() {
  // const [grid, setGrid] = useState([...Array(9)].map(() => Array(9).fill(null)));
  const [difficulty, setDifficulty] = useState("easy");
  const [grid, setGrid] = useState(generateGrid(difficulty));
  const gridFull = grid;
  const newDifficulty = difficulty;

  function copyGrid(gridToCopy) {
    return [...gridToCopy];
  }

  //Zellen darstellen
  function renderCell(value, columnIndex) {
    return (
      <div className="cell" key={columnIndex}>
        {value}
      </div>
    );
  }

  //Reihe darstellen
  function renderRow(row, rowIndex) {
    return (
      <span className="row" key={rowIndex}>
        {row.map((value, columnIndex) => renderCell(value, columnIndex))}
      </span>
    );
  }

  //Gitter mit Zahlen auffüllen
  function fillGrid(gridToFill) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (gridToFill[row][col] === null) {
          shuffle(numbers);
          for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            if (isValid(gridToFill, row, col, number)) {
              gridToFill[row][col] = number;
              // if (fillGrid(gridToFill)) {
              //   // copyGrid(gridToFill);
              //   return true;
              // }
              // gridToFill[row][col] = null;
            }
          }
          // return false;
        }
      }
    }

    // return true;
  }

  function resetGrid(grid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; i < 9; j++) {
        grid[i][j] = 0;
      }
    }
  }


  //Ueberpruefen ob Regeln verletzt werden
  function isValid(grid, row, col, number) {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number) {
        return false;
      }
      if (grid[i][col] === number) {
        return false;
      }
      const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      const boxCol = Math.floor(col / 3) * 3 + (i % 3);
      if (grid[boxRow][boxCol] === number) {
        return false;
      }
    }
    return true;
  }

  //Zahlen mixen
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function checkDifficulty(difficulty) {
    let numCellsToDelete;

    switch (difficulty) {
      case "easy":
        numCellsToDelete = 40;
        break;
      case "medium":
        numCellsToDelete = 60;
        break;
      case "hard":
        numCellsToDelete = 70;
        break;
      default:
        numCellsToDelete = 40;
    }
    return numCellsToDelete;
  }

  function deleteCells(gridToDeleteFrom, numCellsToDelete) { // function signature ändern
    while (numCellsToDelete > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (gridToDeleteFrom[row][col] !== null) {
        gridToDeleteFrom[row][col] = null;
        numCellsToDelete--;
      }
    }
  }

  function emptyGrid() {
    return [...Array(9)].map(() => Array(9).fill(null));
  }

  //Gitter darstellen
  function renderGrid() {
    return (
      <div id="sudoku-grid">
        {grid.map((row, rowIndex) => renderRow(row, rowIndex))}
      </div>
    );
  }

  function handleChangeDifficulty(difficulty) {
    setGrid(generateGrid(difficulty));
  }

  function generateGrid(difficulty) {
    let newGrid = emptyGrid();
    fillGrid(newGrid)
    console.log("Grid filled");
    deleteCells(newGrid, checkDifficulty(difficulty));
    return newGrid;
  }

  // useEffect(() => {
  //   // const newGrid = [...grid];
  //   // handleChangeDifficulty(difficulty);

  //   renderGrid();
  // }, [grid, fillGrid]);

  return renderGrid();
}

export default SudokuGrid;