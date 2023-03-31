import * as React from 'react';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export default function SudokuMenu() {
  return (

    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItem key="quick_game" disablePadding>
          <ListItemButton>
            <ListItemText primary="Quick Game" />
          </ListItemButton>
        </ListItem>
        <ListItem key="game_select" disablePadding>
          <ListItemButton>
            <ListItemText primary="Game Select" />
          </ListItemButton>
        </ListItem>
        <ListItem key="load_save" disablePadding>
          <ListItemButton>
            <ListItemText primary="Load/Save" />
          </ListItemButton>
        </ListItem>
        <ListItem key="rules" disablePadding>
          <ListItemButton>
            <ListItemText primary="Rules" />
          </ListItemButton>
        </ListItem>
        <ListItem key="leaderboard" disablePadding>
          <ListItemButton>
            <ListItemText primary="Leaderboard" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}