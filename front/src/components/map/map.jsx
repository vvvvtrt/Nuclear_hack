import React from "react";
import LineChart from "./chart";
import  {Lines} from "./lines.tsx";
import ScalablePoint from "./buttons.jsx";
import Metro from "./metro.jsx";
import Iframe from 'react-iframe'
import './map.css'


function Map(){

    function handleClick(){
        //
    }

    return(
        <div className="wrapper-graph">
            {/* <Lines/> */}
            {/* <Metro/> */}
            {/* <img src="./map/map.svg" style={{"width": "auto",
            "height": "100%",
            "object-fit": "contain",
            "max-height": "800px",
            }}></img> */}
        {/* <ScalablePoint x={0} y={0} size={5} 
        // handleClick={() => handleClick}
        /> */}
         {/* <iframe src="../mapClass/moscow_metro-master/map.html"></iframe> */}
         {/* <Iframe url="../mapClass/moscow_metro-master/map.html"></Iframe> */}
         <Iframe url="http://127.0.0.1:5500/moscow_metro/index.html" 
          width="1300px"
          height="100%"
          id=""
          className="iframe__style"
         
         ></Iframe>


    </div>)
}

export default Map;