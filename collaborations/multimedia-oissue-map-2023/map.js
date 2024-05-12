var NEWSmap = new L.map('map', {
  center: new L.LatLng(34.0682709, -118.4457082),
  zoom: 15,
});

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
).addTo(NEWSmap);

// map.addLayer(marker);
const oms = new OverlappingMarkerSpiderfier(NEWSmap, {
  keepSpiderfied: true,
  markersWontMove: true,
});
const isMobile = window.matchMedia('(max-width: 480px)').matches;

const categories = {
  'University Housing': {
    markers: [],
    hexCode: '#ff8b17',
    iconUrl: './pins/orange-pin.svg',
  },
  'Departments / Lecture Halls': {
    markers: [],
    hexCode: '#1545a4',
    iconUrl: './pins/blue-pin-1.svg',
  },
  'Cafes / Open Areas': {
    markers: [],
    hexCode: '#d7b53c',
    iconUrl: './pins/yellow-pin.svg',
  },
  'School Facilities': {
    markers: [],
    hexCode: '#40904d',
    iconUrl: './pins/green-pin.svg',
  },
  Other: {
    markers: [],
    hexCode: '#d3392d',
    iconUrl: './pins/red-pin.svg',
  },
};

NEWSgeojson.features.map(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];
  // if point has multiple categories, only use first one
  const cat = feature.properties.GROUP;
  console.log(cat);
  const pinIcon = L.icon({
    iconUrl: categories[cat].iconUrl,
    iconSize: [25, 25],
  });
  const marker = new L.marker(coords, { icon: pinIcon });

  const popUpText = `<b>Location:</b><br/>
    ${feature.properties.LOCATION}<br/><br/>
    ${
      feature.properties.NEWSSTAND
        ? `<b>Newsstand Type:</b><br/>
    ${feature.properties.NEWSSTAND}<br/><br/>`
        : ''
    } 
    ${
      feature.properties.DESCRIPTION
        ? `<b>Description:</b><br/>
    ${feature.properties.DESCRIPTION}<br/><br/>`
        : ''
    }  
    ${
      feature.properties.ADDRESS
        ? `<b>Address:</b><br/>
    ${feature.properties.ADDRESS}<br/><br/>`
        : ''
    }  
    <b>Category:</b><br/>
    ${feature.properties.GROUP}`;

  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };
  marker.bindPopup(popUpText, popUpOptions);

  categories[cat].markers.push(marker);
  marker.addTo(NEWSmap);
  oms.addMarker(marker);
});

const overlayLayers = {};
Object.entries(categories).forEach(([key, val]) => {
  const legendText = `<div class="legend-container"><div class="legend-box" style="background:${val.hexCode};"></div><div class="legend-text">${key}</div></div>`;
  overlayLayers[legendText] = L.layerGroup(val.markers);
});
Object.values(overlayLayers).forEach(layer => layer.addTo(NEWSmap));
L.control
  .layers(null, overlayLayers, { collapsed: isMobile, position: 'bottomright' })
  .addTo(NEWSmap);

// create custom header for layering control (legend)
const header = document.createElement('h3');
header.setAttribute('class', 'legend-header');
const headerText = document.createTextNode('Category');
header.appendChild(headerText);
const layerControl = document.getElementsByClassName(
  'leaflet-control-layers-list'
)[0];
layerControl.insertBefore(header, layerControl.childNodes[0]);
