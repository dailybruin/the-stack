var map = L.map('map').setView([34.05, -118.25], 9);


// base layer of map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ'
}).addTo(map);


// add boundaries for neighborhoods & cities
var geojsonLayer = new L.GeoJSON.AJAX("/datasets/covid-hopsitals/neighborhoods.geojson", {
    onEachFeature: onEachFeature,
    style: style
});
console.log(geojsonLayer);
geojsonLayer.addTo(map);

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}

function style(feature) {
    return {
        fillColor: 'orange',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// mouseover event
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

// mouseout event
function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
    info.update();
}

// add info div in top right corner of map
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>COVID-19 cases</h4>' +  (props ?
        '<b>' + props.name + '</b>'
        : 'Hover over a city or community');
};

info.addTo(map);
