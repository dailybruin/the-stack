let map;
function makeMap(data){
    map = L.map('map').setView([40.8, -110], 3.5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFydW5nbyIsImEiOiJjbDNlc2Q2cGEwMGo0M2luZW5iaTlsaXhqIn0.dVufWiWzW63BK_sbjnWhCg', {
        id: 'mapbox/light-v9',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    L.geoJson(data).addTo(map);

    L.geoJson(data, {style: style}).addTo(map);

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    info.addTo(map);

    legend.addTo(map);
}

function deleteMap(){
    map.remove();
    let div = document.createElement("div");
    div.setAttribute("id","map");
    document.getElementById('map-box').append(div)
}

function getColor(d) {
    return d > 100000 ? '#800026' :
           d > 50000  ? '#BD0026' :
           d > 20000  ? '#E31A1C' :
           d > 10000  ? '#FC4E2A' :
           d > 5000   ? '#FD8D3C' :
           d > 2000   ? '#FEB24C' :
           d > 0   ? '#FED976' :
                      'green';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.difference),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// L.geoJson(statesData, {style: style}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

var geojson;

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var info = L.control();

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-2, 1, 2000, 5000, 10000, 20000, 50000, 100000],
        labels = [];

    // loop through our difference intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    console.log("in legend")
    console.log(div)
    return div;
};

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    info.update = function (props) {
        if (props) {difference = props.difference.toLocaleString('en-US')}
        this._div.innerHTML = '<h4>2030 Nurse Projections</h4>' +  (props ?
            '<b>' + props.name + '</b><br /> Difference between supply and demand: ' + difference + ' nurses'
            : 'Hover over a state');
    };};    



function Allmap(){
    deleteMap();
    makeMap(AllData);
    console.log('all')
}

function LPNmap(){
    deleteMap();
    makeMap(LPNData);
    console.log('LPN')
}

function RNmap(){
    deleteMap();
    makeMap(RNData);
    console.log('RN')
}

makeMap(RNData);