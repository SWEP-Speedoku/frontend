import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Toolbar, Box } from '@mui/material';
import SudokuCell from './SudokuCell';
import { styled } from '@mui/material/styles';

export default function SudokuBoard() {
    // const [grid, setGrid] = useState([...Array(9)].map(() => Array(9).fill(null)));
    const [difficulty, setDifficulty] = React.useState("easy");
    const [grid, setGrid] = React.useState(generateGrid(difficulty));
    const gridFull = grid;
    const newDifficulty = difficulty;

    function handleChangeDifficulty(difficulty) {
        setGrid(generateGrid(difficulty));
    }

    return (
        <React.Fragment>
            <Toolbar />
            <CssBaseline />
            <SudokuBox >
                <SudokuCol spacing={9} direction={'column'} alignItems={"stretch"} >
                    {grid.map((row, rowIndex) => renderRow(row, rowIndex))}
                </SudokuCol>
            </SudokuBox>
        </React.Fragment >
    )
}

const SudokuBox = styled(Box)({
    aspectRatio: "1/1",
    width: "58vmin",
});

const SudokuCol = styled(Grid)({
    height: "calc(100/9)%",
    width: "100%",
    borderRadius: 0,
    wrap: 'nowrap',
});

const SudokuRow = styled(Grid)({
    height: "100%",
    width: "100%",
    borderRadius: 0,
});

//Reihe darstellen
function renderRow(row, rowIndex) {
    return (
        <SudokuRow item wrap='nowrap'>
            {row.map((value, columnIndex) => renderCell(value, columnIndex, rowIndex))}
        </SudokuRow>
    );
}

//Zellen darstellen
function renderCell(value, columnIndex, rowIndex) {
    return (
        <SudokuCell value={value} columnIndex={columnIndex} rowIndex={rowIndex} />
    );
}

function copyGrid(gridToCopy) {
    return [...gridToCopy];
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
                    }
                }
            }
        }
    }
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

function generateGrid(difficulty) {
    let newGrid = emptyGrid();
    fillGrid(newGrid)
    console.log("Grid filled");
    deleteCells(newGrid, checkDifficulty(difficulty));
    return newGrid;
}
