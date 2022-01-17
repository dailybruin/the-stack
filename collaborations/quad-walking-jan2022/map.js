const mymap = L.map('map').setView([34.07, -118.45], 15);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiY2F0aGVyaW5laGh1IiwiYSI6ImNrbnY2MXlucTBlanAyb3BpMHpwaXA2MmMifQ.wLjhsdl39EF7EbXTa9DZOg',
  }
).addTo(mymap);

function addRoutes() {
  const starts = ['lv', 'reiber', 'sor'];
  const ends = ['kerckhoff', 'pubaff'];

  for (const s of starts) {
    for (const e of ends) {
      const path = `/collaborations/quad-walking-jan2022/${s}_${e}.gpx`;

      const route = new L.GPX(path, {
        async: true,
        marker_options: {
          startIconUrl: '',
          endIconUrl: '',
          shadowUrl: '',
        },
        polyline_options: {
          color: '#A683EB',
          opacity: 0.5,
          weight: 3,
          lineCap: 'round',
        },
      });

      route.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
      });

      mymap.addLayer(route);
    }
  }
}

function highlightFeature(e) {
  console.log('highlight');
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#930C62',
    dashArray: '',
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  console.log(layer);
  info.update({
    distance: layer.get_distance_imp(),
    elevation_gain: layer.get_elevation_gain_imp(),
  });
}

function resetHighlight(e) {
  e.target.setStyle({
    color: '#A683EB',
    opacity: 0.5,
    weight: 3,
    lineCap: 'round',
  });
  info.update();
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}

addRoutes();

const info = L.control();

info.onAdd = function(mymap) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function(props) {
  this._div.innerHTML =
    '<h4>Route Data</h4>' +
    (props
      ? '<b>' +
        'route name' +
        '</b><br />' +
        props.distance.toFixed(2) +
        ' miles' +
        '</b><br />' +
        props.elevation_gain.toFixed(2) +
        ' feet elevation gain'
      : 'Hover over a campus route');
};

info.addTo(mymap);
