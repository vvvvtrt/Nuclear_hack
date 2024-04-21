import React, {useEffect} from "react";
import LineChart from "./chart";
import  {Lines} from "./lines.tsx";
import ScalablePoint from "./buttons.jsx";
import Metro from "./metro.jsx";
import Iframe from 'react-iframe'
import './map.css'


function Map(){

    useEffect(() => {
        const handleMessage = (event) => {
          // Обработка сообщения из iframe
          console.log('Message received from iframe:', event.data);
        };
        window.addEventListener('message', handleMessage);
        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);

    return(
        <div className="wrapper-graph">
         <Iframe url="http://127.0.0.1:5500/index.html" 
          width="1300px"
          height="100%"
          id=""
          className="iframe__style"
         
         ></Iframe>


    </div>)
}

export default Map;