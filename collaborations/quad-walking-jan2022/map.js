const mymap = L.map('map').setView([34.07, -118.445], 15);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 13,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiY2F0aGVyaW5laGh1IiwiYSI6ImNrbnY2MXlucTBlanAyb3BpMHpwaXA2MmMifQ.wLjhsdl39EF7EbXTa9DZOg',
  }
).addTo(mymap);

const routeNameMap = {
  lv: 'Landfair Vista',
  rieber: 'Rieber Hall',
  hilgard: 'Hilgard Ave',
};

const layerControl = L.control
  .layers({}, {}, { position: 'bottomright', collapsed: false })
  .addTo(mymap);

function addRoutes() {
  const starts = ['lv', 'rieber', 'hilgard'];
  const ends = ['kerckhoff', 'pubaff', 'court', 'powell'];

  for (const s of starts) {
    const routeArray = [];
    for (const e of ends) {
      const path = `/collaborations/quad-walking-jan2022/routes/${s}_${e}.gpx`;

      const pinIcon = L.icon({
        iconUrl: '/collaborations/quad-walking-jan2022/pin.svg',
        iconSize: [35, 35],
        iconAnchor: [18, 30],
      });

      const starIcon = L.icon({
        iconUrl: '/collaborations/quad-walking-jan2022/star.png',
        iconSize: [20, 20], // size of the icon
        iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
      });

      const route = new L.GPX(path, {
        async: true,
        marker_options: {
          startIcon: pinIcon,
          endIcon: starIcon,
          shadowUrl: '',
        },
        polyline_options: {
          color: '#A683EB',
          opacity: 0.7,
          weight: 3,
          lineCap: 'round',
        },
      });

      route.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: clickFeature,
      });

      routeArray.push(route);
      // mymap.addLayer(route);
    }
    const routeLayer = L.layerGroup(routeArray).addTo(mymap);
    layerControl.addOverlay(
      routeLayer,
      `<span class="selector">${routeNameMap[s]}</span>`
    );
  }
}

// for mobile: highlight feature on click
function clickFeature(e) {
  mymap.eachLayer(function(layer) {
    if (layer._gpx) {
      layer.setStyle({
        color: '#A683EB',
        opacity: 0.7,
        weight: 3,
        lineCap: 'round',
      });
      info.update();
    }
  });
  highlightFeature(e);
}

function highlightFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#930C62',
    dashArray: '',
    fillOpacity: 0.9,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  const time = layer.get_distance() / 1.31 / 60; // 1.31 m/s walking speed

  info.update({
    name: layer._info.name,
    distance: layer.get_distance_imp(),
    elevation_gain: layer.get_elevation_gain_imp(),
    time: time,
    steps: time * 116.65, // steps/min
  });
}

function resetHighlight(e) {
  e.target.setStyle({
    color: '#A683EB',
    opacity: 0.7,
    weight: 3,
    lineCap: 'round',
  });
  info.update();
}

addRoutes();

const info = L.control();
info.onAdd = function(mymap) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function(props) {
  this._div.innerHTML =
    '<h4>Route Data</h4>' +
    (props
      ? '<b>' +
        props.name +
        '</b><br />' +
        props.distance.toFixed(2) +
        ' miles' +
        '</b><br />' +
        props.elevation_gain.toFixed(0) +
        ' feet elevation gain' +
        '</b><br />~' +
        props.time.toFixed(0) +
        ' minutes' +
        '</b><br />~' +
        props.steps.toFixed(0) +
        ' steps'
      : 'Hover over a campus route');
};

info.addTo(mymap);

// create custom header for layering control
const header = document.createElement('h4');
header.setAttribute('class', 'control-header');
const headerText = document.createTextNode('Route starting points');
header.appendChild(headerText);
const layerControlElement = document.getElementsByClassName(
  'leaflet-control-layers-list'
)[0];
layerControlElement.insertBefore(header, layerControlElement.childNodes[0]);
