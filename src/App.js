// /*
// import logo from './logo.svg';
// */
// import './App.css';
// import React from "react";
// import SudokuGrid from './components/SudokuGrid';
// // import SudokuGrid from "./components/SudokuGrid.jsx";
// import DifficultyButton from './components/DifficultyButton';
// import setDifficulty from "./components/SudokuGrid.jsx"
// import SudokuMenu from './components/SudokuMenu';
// import SudokuAppBar from './components/SudokuAppBar';
// import Toolbar from '@mui/material/Toolbar';
// import SudokuBottomBar from './components/SudokuBottomBar';
// import SudokuBoard from './components/Sudoku/SudokuBoard';

// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Numpad from './components/Numpad';



// function App() {



//   return (

//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <SudokuAppBar />
//       <SudokuMenu />
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <SudokuBoard />
//       </Box>
//       <Numpad />
//       <SudokuBottomBar />
//     </Box>
//   );

// }

// export default App;


/*
import logo from './logo.svg';
*/
import './App.css';
import React from "react";
import Login from "./components/Login"
import Home from "./components/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
