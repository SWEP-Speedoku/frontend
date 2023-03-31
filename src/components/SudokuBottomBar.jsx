import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function SudokuBottomBar() {
    return (

        <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Button variant="test" color="primary">Impressum</Button>
            </Toolbar>
        </AppBar >
    );
}