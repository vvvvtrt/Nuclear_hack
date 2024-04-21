import React from 'react'
import './btnSetAcc.css'

function SetButtonNav(){

    function onClickZoomIn(){}
    function onClickZoomOut(){}
    function onClickQuestion(){}


    return(  
        
        <div className="wrapper-button">
        <div className="inner-wrapper">
            <button className="button home"></button>
            <button className="button search"></button>
            <button className="button logout"></button>
        </div>

        <button className="button exit"></button>

        </div>
    )
}

export default SetButtonNav;