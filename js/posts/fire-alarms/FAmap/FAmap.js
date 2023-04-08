var FAmap = new L.map('map', {
  center: new L.LatLng(34.0682709, -118.4457082),
  zoom: 15,
});

L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png',
  }
).addTo(FAmap);

//map.addLayer(layer);
const oms = new OverlappingMarkerSpiderfier(FAmap, {
  keepSpiderfied: true,
  markersWontMove: true,
});
const isMobile = window.matchMedia('(max-width: 480px)').matches;

const categories = {
  'ACTUAL FIRE': {
    markers: [],
    hexCode: '#d3392d',
    //iconUrl: '../../../../red-pin-copy.svg',
  },
  'FIRE ALARM': {
    markers: [],
    hexCode: '#ff8b17',
    //iconUrl: '/orange-pin-copy.svg',
  },
};

FAgeojson.features.map(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];
  // if crime has multiple categories, only use first one
  const cat = feature.properties.EVENT;
  console.log(cat);
  const pinIcon = L.icon({
    iconUrl: categories[cat].iconUrl,
    iconSize: [35, 35],
  });
  const marker = new L.marker(coords, { icon: pinIcon });

  const popUpText = `<b>${feature.properties.DATE}</b><br/><br/>
    <b>Time:</b><br/>
    ${feature.properties.TIME.split('\n').join('<br/>')}<br/><br/>
    <b>Event:</b><br/>
    ${feature.properties.EVENT}<br/><br/>
    <b>Reported location:</b><br/>
    ${feature.properties.LOCATION}<br/><br/>`;
  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };
  marker.bindPopup(popUpText, popUpOptions);

  categories[cat].markers.push(marker);
  marker.addTo(FAmap);
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
Object.values(overlayLayers).forEach(layer => layer.addTo(FAmap));
L.control.layers(null, overlayLayers, { collapsed: isMobile }).addTo(FAmap);

// create custom header for layering control (legend)
const header = document.createElement('h3');
header.setAttribute('class', 'legend-header');
const headerText = document.createTextNode('Category');
header.appendChild(headerText);
const layerControl = document.getElementsByClassName(
  'leaflet-control-layers-list'
)[0];
layerControl.insertBefore(header, layerControl.childNodes[0]);
