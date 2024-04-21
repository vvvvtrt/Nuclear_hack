import {
    MinChatUiProvider,
    MainContainer,
    MessageInput,
    MessageContainer,
    MessageList,
    MessageHeader,
    TypingIndicator,
    Message
  } from "@minchat/react-chat-ui";
import React, {useState} from "react";

  function Chat({sendMessage, messages, sendData}) {
    // const [messages, setMessages] = useState(Array<any>)

    // function sendData(text){
    //     let incomeMessage = ''
    //     fetch("http://drfrg", {method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({message: text})
    //     })     
    //     .then(resp => resp.json())
    //     .then(resp => (incomeMessage = resp.message))
    //     .catch(err => {
    //         if(err.code === 418){
    //             setMessages(prev => [...prev, {text: "Некоректный запрос",
    //                 user: 
    //                      {id: 'bot', 
    //                      name: '',}
    //                }]
    //            )
               
    //         }
    //         //
    // //         setMessages(prev => [...prev, {text: "Некоректный запрос",
    // //         user: 
    // //              {id: 'bot', 
    // //              name: '',}
    // //        }]
    // //    ) 
    //    //
    //         console.log("error in sending data")
        
    //     })                                                                                             //Request
    //     return incomeMessage
    // }

    // function sendMessage(data){
    //     console.log(data)
    //     setMessages(prev => [...prev, {text: data.message,
    //         direction: "outgoing",
    //          user: 
    //               {id: 'me', 
    //               name: '',}
    //         }])

    //     let incomeMessage = sendData(data.message)
    //     // let incomeMessage = '234432'
    //     if(incomeMessage !== ''){

    //     setMessages(prev => [...prev, {text: incomeMessage,
    //          user: 
    //               {id: 'bot', 
    //               name: 'Данные о пассажиронагруженности',}
    //         }])

    //     }
    // }
    // function addMessage(message){
    //     setMessages(prev => [...prev, {text: message,
    //      user: 
    //           {id: 'bot', 
    //           name: 'Данные о пассажиронагруженности',}
    //     }]
    // )
    // }
    return (
        <div style={{'overlay': 'auto', 'height': '800px'}}>
      <MinChatUiProvider theme="#6ea9d7">
        <MainContainer style={{ height: '70%' }}>
          <MessageContainer>
            <MessageHeader />
            <MessageList
              currentUserId='me'
              messages={messages}
            //   styles={{'overlay': 'scroll'}}
            />
            <MessageInput placeholder="Type message here" showSendButton={true}
            onSendMessage ={(text) => sendMessage({ message: text })}
             />

            {/* <button onClick={() => addMessage('5')}></button> */}
          </MessageContainer>
        </MainContainer>
      </MinChatUiProvider>
      </div>
    )
  }
  
  export default Chat
  
  