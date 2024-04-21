import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Field from '../field/OwnFiled.jsx';
import Price from '../price/price.jsx'
import './permanentNavigation.css'
import CollapseReg from '../collapse/collapse.tsx'
import SetButtonNav from './ButtonSetAcc.jsx';
import Chat from '../chat/chat_3/chat.tsx'
import SpeechButton from '../chat/recorderModule/recorderButton.jsx';
// import Chat2 from '../chat/chatComponents/src/pages/chat2.js'


const drawerWidth = 34;

export default function PermanentNavigation() {
  return (
    <>
      <Drawer
        sx={{
          width: '34%',
          'background-color': '#191016',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            left: '0',
          'background-color': '#191016',
          'color': 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <SetButtonNav/>
        <Chat/>
        <SpeechButton/>
        {/* <Toolbar /> */}
        <Divider />
        {/* <CollapseReg/>         */}
        <Divider />
      </Drawer>

      </>
  );
}
