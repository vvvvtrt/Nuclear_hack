import React from "react";
import SetButton from "../../buttons/setButtons";
import Graph from "../graphView/graph";
import CatGraph from "../graphView/graph-cat";
import './field.css'
import SpeechButton from '../chat/recorderModule/recorderButton.jsx'
import Map from '../map/map.jsx'

function Field(){


    return(<div className="field">
            {/* <div> */}
            <Map/>
            <SetButton/>
            </div>
        // </div>
)
}

export default Field;