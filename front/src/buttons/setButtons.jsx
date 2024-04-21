import React from 'react'
import './btn.css'

function SetButton(){

    function onClickZoomIn(){}
    function onClickZoomOut(){}
    function onClickQuestion(){}


    return(<div className="button-set">
        <button className="button ask-btn"></button>
        <button className="button zm-plus-btn"></button>
        <button className="button zm-minus-btn"></button>

        </div>
    )
}

export default SetButton;