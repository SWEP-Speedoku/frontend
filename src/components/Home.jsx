import * as React from 'react';

import DifficultyButton from './DifficultyButton';
import SudokuMenu from './SudokuMenu';
import SudokuAppBar from './SudokuAppBar';
import SudokuBottomBar from './SudokuBottomBar';
import SudokuBoard from './Sudoku/SudokuBoard';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Numpad from "./Numpad"



export default function Home() {
    return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SudokuAppBar />
      <SudokuMenu />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <SudokuBoard />
      </Box>
      <Numpad />
      <SudokuBottomBar />
    </Box>
  );
}


