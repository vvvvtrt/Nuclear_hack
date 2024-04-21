import  React, {useState} from 'react';
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
  const [messages, setMessages] = useState([])

  function sendData(text){
      let incomeMessage = ''
      fetch("http://drfrg", {method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({message: text})
      })     
      .then(resp => resp.json())
      .then(resp => (incomeMessage = resp.message))
      .catch(err => {
          // if(err.code === 418){
          //     setMessages(prev => [...prev, {text: "Некоректный запрос",
          //         user: 
          //              {id: 'bot', 
          //              name: '',}
          //        }]
          //    )
          // }
          setMessages(prev => [...prev, {text: "Некоректный запрос",
          user: 
               {id: 'bot', 
               name: '',}
         }]
     )
          console.log("error in sending data")
        })                                                                                             //Request
        return incomeMessage
    }
    function sendMessage(data){
        console.log(data)
        setMessages(prev => [...prev, {text: data.message,
            direction: "outgoing",
             user: 
                  {id: 'me', 
                  name: '',}
            }])
        let incomeMessage = sendData(data.message)
        // let incomeMessage = '234432'
        if(incomeMessage !== ''){
        setMessages(prev => [...prev, {text: incomeMessage,
             user: 
                  {id: 'bot', 
                  name: 'Данные о пассажиронагруженности',}
            }])
        }
    }
    function addMessage(message){
        setMessages(prev => [...prev, {text: message,
         user: 
              {id: 'bot', 
              name: 'Данные о пассажиронагруженности',}
        }]
    )
    }

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
          'background-color': '#051021',
          'color': 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <SetButtonNav/>
        <Chat
        sendMessage = {sendMessage}
        messages = {messages}
        />
        <SpeechButton sendMessage = {sendMessage}/>
        <button style={{"border": "none", "background-color": "transponit", "text-decoration": "underline" }}></button>
        <Divider />
        {/* <CollapseReg/>         */}
        <Divider />
      </Drawer>

      </>
  );
}
