import React, { useEffect, useRef } from 'react';
import MoscowMetro from '@experium/moscow_metro';
import {App} from '@experium/moscow_metro';


const Map = () => {
  const containerRef = useRef(null); //link to element

  useEffect(() => {
    const container = containerRef.current;
    const options = {
        selectable: false,  // default true
        check_icons: false, // default true
        parking: false,     // default true
        legend: false,      // default true
        river: false,       // default true
        zoom: {
            k: 1.5,         // default 1.25,
            min: -5,        // default -7
            max: 5          // default 7
        }
    };
    const map = new App(container, options);
    
    // middleware, fires on every station click
    map.use((station, next) => {
        // do something
        next();
    });
    
    // zoom
    map.zoomIn();
    map.zoomOut();
    
    // selecting
    map.select(81);         // or [80, 81]
    map.deselect(81);       // or [80, 81] 
    map.getAll();
    map.getSelected();

    return () => {
      container.removeEventListener('click', () => {
      });
    }
  }, []); 

  return <div ref={containerRef}></div>;
};

export default Map;
