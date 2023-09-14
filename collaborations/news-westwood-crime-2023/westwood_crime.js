const arrestMap = L.map('map').setView([34.0682709, -118.4457082], 14);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2FubmVib3lpbmEiLCJhIjoiY2txanFsaHgxMDFiMjJ3bXpnc3BjOHBrZiJ9.a5Lne6oUV-yW1UdZf6nZ5g',
  }
).addTo(arrestMap);

const oms = new OverlappingMarkerSpiderfier(arrestMap, {
  keepSpiderfied: true,
  markersWontMove: true,
});

const isMobile = window.matchMedia('(max-width: 480px)').matches;

var polygon = L.polygon(
  [
    [34.0769, -118.453869],
    [34.075694, -118.455568],
    [34.070415, -118.454967],
    [34.070397, -118.453615],
    [34.070646, -118.452778],
    [34.070171, -118.451496],
    [34.06953990655831, -118.45075573259194],
    [34.06894445403259, -118.44951118770682],
    [34.06716695887877, -118.44810570998659],
    [34.06361185668016, -118.44811643882262],
    [34.06370073607889, -118.44244088473172],
    [34.06417179518559, -118.44106759382399],
    [34.06504280324026, -118.4407457287675],
    [34.065496079400255, -118.4402414735123],
    [34.06651816385792, -118.43964065864662],
    [34.07077523499452, -118.43852485962815],
    [34.072366027198, -118.43723739930182],
    [34.07584367051015, -118.43871467725593],
    [34.076406284725806, -118.43867013751381],
    [34.07698391173699, -118.43903491794133],
    [34.07782812873031, -118.43912074863148],
    [34.07821913165769, -118.43943188487407],
    [34.07752598888478, -118.4406227856771],
    [34.07746378348737, -118.44275782409458],
    [34.07678840763744, -118.4442491322853],
    [34.0734825429646, -118.44493577778329],
    [34.07335812617254, -118.44727466404363],
    [34.073544751286185, -118.44900200668309],
    [34.07564127073457, -118.45047868782301],
    [34.07698314875815, -118.45350421965078],
    // [],
    // [],
    // [],
  ],
  { color: '#2774AE' }
).addTo(arrestMap);

// #2774AE - UCLA Blue
// #FFD100 - UCLA Yellow

const categories = {
  Infraction: {
    markers: [],
    // hexCode: '#E683C5',
    iconUrl: './new_pins/circle-low-red.png',
  },
  Misdemeanor: {
    markers: [],
    // hexCode: '#ff7d2d',
    iconUrl: './new_pins/circle-med-red.png',
  },
  Felony: {
    markers: [],
    // hexCode: '#9dc12b',
    iconUrl: './new_pins/circle-full-red.png',
  },
};

let markers = L.markerClusterGroup.layerSupport({
  maxClusterRadius: 25,
});

westwood_crime_geojson.features.map(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];
  const cat = feature.properties.ARRESTTYPE;
  const pinIcon = L.icon({
    iconUrl: categories[cat].iconUrl,
    iconSize: [10, 10],
  });
  const marker = new L.marker(coords, { icon: pinIcon });

  markers.addLayer(marker);

  const popUpText = `<b>${feature.properties.DATE}</b><br/><br/>
  <b>LAPD designation:</b><br/>
  ${feature.properties.DESCRIPTION.split('\n').join('<br/>')}<br/><br/>
  <b>Reported location:</b><br/>
  ${feature.properties.AREA}<br/>
  ${feature.properties.LOCATION.split('\n').join(',<br/>')}<br/><br/>
  <b>Age / Sex / Race:</b><br/>
  ${feature.properties.AGE} / ${feature.properties.SEX} / ${
    feature.properties.RACE
  } `;
  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };
  marker.bindPopup(popUpText, popUpOptions);

  categories[cat].markers.push(marker);
  marker.addTo(arrestMap);
  oms.addMarker(marker);

  polygon.bindPopup('UCLA Campus');
});

const overlayLayers = {};
Object.entries(categories).forEach(([key, val]) => {
  const legendText = `<div class="legend-container"><div class="legend-box" style="background:${val.hexCode};"></div><div class="legend-text">${key}</div></div>`;
  overlayLayers[legendText] = L.layerGroup(val.markers);
});
Object.values(overlayLayers).forEach(layer => layer.addTo(arrestMap));
L.control
  .layers(null, overlayLayers, { collapsed: isMobile, position: 'bottomright' })
  .addTo(arrestMap);

const header = document.createElement('h3');
header.setAttribute('class', 'legend-header');
const headerText = document.createTextNode('Category');
header.appendChild(headerText);
const layerControl = document.getElementsByClassName(
  'leaflet-control-layers-list'
)[0];
layerControl.insertBefore(header, layerControl.childNodes[0]);
