import React, { useState } from 'react';

const SpeechButton = () => {
  const [transcript, setTranscript] = useState('');
  const [load, isLoad] = useState(false)

  const startListening = () => {
    isLoad(true)
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onresult = function(event) {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };
    recognition.start();
    isLoad(false)
  }
  console.log("transript: ", transcript)
  

  return (
    <div>
        {isLoad && <p style={{"color": "black"}}>Loading...</p>}
      <button onClick={startListening}>Start Recording</button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechButton;
