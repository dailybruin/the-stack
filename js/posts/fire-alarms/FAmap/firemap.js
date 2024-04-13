var firemap = new L.map("map", {
  center: new L.LatLng(34.0682709,-118.4457082),
  zoom: 15
});

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> <a href="https://stamen.com/" target="_blank">&copy; Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
}
).addTo(firemap);

//map.addLayer(layer);
const oms = new OverlappingMarkerSpiderfier(firemap, {
keepSpiderfied: true,
markersWontMove: true,
});
const isMobile = window.matchMedia('(max-width: 480px)').matches;


const categories = {
'Actual Fire': {
  markers: [],
  hexCode: '#d3392d',
  iconUrl: './red-pin-copy.svg',
},
'Fire Alarm': {
  markers: [],
  hexCode: '#ff8b17',
  iconUrl: './orange-pin-copy.svg',
},
};

firegeojson.features.map(feature => {
const coords = [
  feature.geometry.coordinates[1],
  feature.geometry.coordinates[0],
];
// if crime has multiple categories, only use first one
const cat = feature.properties.Event;
console.log(cat)
const pinIcon = L.icon({
  iconUrl: categories[cat].iconUrl,
  iconSize: [35, 35],
});
const marker = new L.marker(coords, { icon: pinIcon });

const popUpText = `<b>${feature.properties.Date}</b><br/><br/>
  <b>Time:</b><br/>
  ${feature.properties.Time.split('\n').join('<br/>')}<br/><br/>
  <b>Event:</b><br/>
  ${feature.properties.Event}<br/><br/>
  <b>Reported location:</b><br/>
  ${feature.properties.Location}<br/><br/>`;
const popUpOptions = {
  className: 'custom-popup',
  maxWidth: isMobile ? 200 : 300,
};
marker.bindPopup(popUpText, popUpOptions);

categories[cat].markers.push(marker);
marker.addTo(firemap);
oms.addMarker(marker);
});

const overlayLayers = {};
Object.entries(categories).forEach(([key, val]) => {
const legendText = `
  <div class="legend-container">
    <div class="legend-box" style="background:${val.hexCode};"></div>
    <div class="legend-text">${key}</div>
  </div>`;
overlayLayers[legendText] = L.layerGroup(val.markers);
});
Object.values(overlayLayers).forEach(layer => layer.addTo(firemap));
L.control.layers(null, overlayLayers, { collapsed: isMobile }).addTo(firemap);

// create custom header for layering control (legend)
const header = document.createElement('h3');
header.setAttribute('class', 'legend-header');
const headerText = document.createTextNode('Category');
header.appendChild(headerText);
const layerControl = document.getElementsByClassName(
'leaflet-control-layers-list'
)[0];
layerControl.insertBefore(header, layerControl.childNodes[0]);