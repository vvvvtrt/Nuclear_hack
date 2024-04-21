const container = document.body;
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
const map = new MoscowMetro(container, options);

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

// destroy
map.destroy();