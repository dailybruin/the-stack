var geojson;

//Center of the United States
var lat = 39.8283;
var long = -98.5795; 

var mymap = L.map('mapid').setView([lat, long], 13);   

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=' + 'pk.eyJ1IjoiYWh1amFyYWRoaWthIiwiYSI6ImNrNWlzZHZmeTA2ZnMzbHBvMmljNGlybjkifQ.XLa_tcqIhbaWWg9dElzLnA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 4,
      minZoom: 3,
      id: 'mapbox.dark'
    }).addTo(mymap);

function getColor(d) {
    return d > 59858 ? '#f5b209' :
        d > 59649  ? '#f8c646' :
        d > 29262  ? '#fad984' :
        d > 0    ? '#fdecc2' : '#ffffff'
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 1,
        opacity: 1,
        color: 'snow',
        fillOpacity: .7
    };
}

function highlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#ffd32a',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    displayInfo.update(layer.feature.properties);
}

function reset(e) {
    geojson.resetStyle(e.target);
    displayInfo.update();
}

function zoomToCountry(e) {
    mymap.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlight,
        mouseout: reset,
        //click: zoomToCountry
    });
    layer.on({
        mousedown: highlight,
        mouseup: reset,
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);

// On hover control that displays information about hovered upon country
var displayInfo = L.control();

displayInfo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// Passes properties of hovered upon country and displays it in the control
displayInfo.update = function (props) {

    this._div.innerHTML = '<div style="background: rgba(255,255,255,0.8); \
                                        padding: 0.5em; \
                                        padding-left: 1em; \
                                        padding-right: 1em; \
                                        border-radius: 5px; \
                                        font-family: \'Lato\', sans-serif; \
                                        text-align: left; \
                                        box-shadow: 0 0 15px rgba(255,255,255,0.2);"> \
        <h2>Total Cost</h2>' +  (props ?
        '<span style="font-size: 14px;"> <b>' +  'Total Cost (in USD): $' + '</b>' + numberWithCommas(props.density) + '<br />'
        + '<b>' + 'State: ' + '</b>' + props.name + '<br /> </span> </div>'
        : 'Hover over a state');
};

displayInfo.addTo(mymap);

// Happens on mouse hover
function highlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#ffd32a'
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    // Updates custom legend on hover
    displayInfo.update(layer.feature.properties);
  }

  // Happens on mouse out
  function reset(e) {
    geojson.resetStyle(e.target);
    // Resets custom legend when user unhovers
    displayInfo.update();
  }