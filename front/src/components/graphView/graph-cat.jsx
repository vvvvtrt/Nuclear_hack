import React from 'react'
import './graph.css'

//props.isZoom - выполнение зума
//props.data - данные для двух/трёх детей


function CatGraph(props){

    return(
        <div className="full-graph">
        <div className="graph-parent">
        <p className="graph-parent price">Цена типа: 620 P</p>
        <svg width="4" height="112" viewBox="0 0 4 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00003 104L2.00003 52L2.00001 -7.6294e-06" stroke="#96B2B2" stroke-width="3"/>
            <path d="M4 110C4 111.105 3.10457 112 2 112C0.89543 112 0 111.105 0 110C0 108.895 0.89543 108 2 108C3.10457 108 4 108.895 4 110Z" fill="#96B2B2"/>
        </svg>
        <p className="graph-p">Мобильные телефоны</p>   
        </div>

        <div className="graph-parent">
        <p className="graph-parent price">Цена типа: 620 P</p>
        <svg width="4" height="112" viewBox="0 0 4 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00003 104L2.00003 52L2.00001 -7.6294e-06" stroke="#96B2B2" stroke-width="3"/>
            <path d="M4 110C4 111.105 3.10457 112 2 112C0.89543 112 0 111.105 0 110C0 108.895 0.89543 108 2 108C3.10457 108 4 108.895 4 110Z" fill="#96B2B2"/>
        </svg>
        <p className="graph-p">Xioami</p>   
        </div>
        
        <div className="graph-checked loc">
        <p className="graph-parent-price">Цена типа: 220 P</p>
        <svg width="40" height="128" viewBox="0 0 40 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0001 118L19.907 1" stroke="#A3B6A4" stroke-width="3"/>
            <circle cx="20" cy="108" r="20" fill="#00F75A"/>
        </svg>  

        <p className="graph-checked">Xioami Mi Band 5</p> 
        </div>

        {props.isZoom &&
        <>
            <div>
            <svg>
            <circle r="30" cx="50" cy="50" fill="green" />
            </svg>
            <p className="graph-p">Xioami Mi Band 5</p>
                </div>
                <div>
                <svg>
                <circle r="30" cx="50" cy="50" fill="green" />
                </svg>
                <p className="graph-p">Xioami Mi Band 5</p>
            </div>
            <div>
            <svg>
            <circle r="30" cx="50" cy="50" fill="green" />
            </svg>
            <p className="graph-p">Xioami Mi Band 5</p>
                </div>
                <div>
                <svg>
                <circle r="30" cx="50" cy="50" fill="green" />
                </svg>
                <p className="graph-p">Xioami Mi Band 5</p>
            </div>
        </>
        }
        </div>)
}

export default CatGraph;