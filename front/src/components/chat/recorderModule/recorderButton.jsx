import React, { useState, useEffect } from 'react';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './recorderButton.css'

const SpeechButton = ({sendMessage, sendMessage2}) => {
  const [transcript, setTranscript] = useState('');
  const [load, isLoad] = useState(false)

  const startListening = () => {
    isLoad(true);
    let timeout;
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onstart = function() {
      clearTimeout(timeout);
    };
    recognition.onresult = function(event) {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);

      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        recognition.stop();
        isLoad(false);
        if (speechToText) {
        } else{
          console.log("В отправленном голосом сообщении меньше 3 букв")
        }
      }, 3000);
    };
  
    recognition.onend = function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isLoad(false);
        
      }, 3000);
    };
    recognition.start();

  };
  //
  useEffect(()=>{
    if(transcript !== '')
        // sendMessage({message: transcript})
        sendMessage2({message: transcript})
  },
[transcript])


  return (
    <div>
        {isLoad && <p style={{"color": "black"}}>Loading...</p>}
      <button onClick={startListening} className={load? "btn-recorder active" : "btn-recorder"}><KeyboardVoiceIcon/></button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechButton;
