//  MAP
var map = L.map('map', {
  center: [34.05, -118.25],
  zoom: 9,
  maxBounds: [
    [40, -122],
    [28, -114],
  ],
});

// MAP CONTROLS
var info = L.control();
var legend = L.control({ position: 'bottomright' });
var layerControl = L.control
  .layers({}, {}, { position: 'bottomleft', collapsed: false })
  .addTo(map);

// MAP LAYERS
var totalCasesLayer;
var caseRateLayer;
var hospitalLayer;
var baseLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken:
      'pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ',
  }
).addTo(map);

// REGISTER HANDLER FOR CHANGING BASE LAYERS
map.on('baselayerchange', function(e) {
  let show_rates = e.layer === caseRateLayer;
  legend.update(show_rates);
});

// SET UP MAP
init_info();
init_legend();
initHospitalLayer();
initCasesLayers();
addUCLAMarker();

function addUCLAMarker() {
  L.marker([34.0729, -118.442114], { icon: UCLAIcon, zIndexOffset: 1000 })
    .bindTooltip('UCLA')
    .addTo(map);
}

// creates layer with all hospital markers
async function initHospitalLayer() {
  let hospitals = await loadCSVData('/datasets/covid-hospitals/hospitals.csv');
  let markerArray = [];
  hospitals.forEach(function(item) {
    let label =
      '<span class="marker-label"><strong>' +
      item['FACNAME'] +
      '</strong> <br>' +
      ' General Acute Care Beds: ' +
      item['GAC_BEDS'] +
      '<br>' +
      ' ICU Beds: ' +
      Number(item['ICU_BEDS']).toFixed(0) +
      '</span>';
    let coords = [Number(item['LATITUDE']), Number(item['LONGITUDE'])];
    markerArray.push(
      L.marker(coords, { icon: hospitalIcon }).bindTooltip(label)
    );
  });
  hospitalLayer = L.layerGroup(markerArray).addTo(map);
  layerControl.addOverlay(
    hospitalLayer,
    '<span class="selector">Hospitals</span>'
  );
}

// creates layer w/ neighborhood boundaries & coloring
async function initCasesLayers() {
  let geojson = await loadJSON(
    '/datasets/covid-hospitals/neighborhoods.geojson'
  );

  totalCasesLayer = new L.GeoJSON(geojson, {
    onEachFeature: onEachFeature,
    style: totalCasesStyle,
  });
  totalCasesLayer.addTo(map);
  layerControl.addBaseLayer(
    totalCasesLayer,
    '<span class="selector">Total cases</span>'
  );

  caseRateLayer = new L.GeoJSON(geojson, {
    onEachFeature: onEachFeature,
    style: caseRateStyle,
  });
  layerControl.addBaseLayer(
    caseRateLayer,
    '<span class="selector">Cases per capita</span>'
  );

  document.getElementById('updatedate').innerHTML =
    'Data as of ' + geojson['lastUpdated'];
}
