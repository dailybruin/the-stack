//  MAP
var map = L.map('map', {
  center: [34.05, -118.25],
  zoom: 9,
  maxBounds: [
    [40, -122],
    [28, -114],
  ],
});

var neighborhoodsGeoJSON;

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
  update_legend(document.getElementById('legend'), show_rates);
});

// SET UP MAP
init_info();
init_legend();
updateCases();
initHospitalLayer();

// creates layer with all hospital markers
async function initHospitalLayer() {
  let hospitals = await loadCSVData('/datasets/covid-hospitals/hospitals.csv');
  let markerArray = [];
  hospitals.forEach(function(item) {
    let label =
      item['FACNAME'] +
      ' (' +
      item['GAC_BEDS'] +
      ' general acute care beds, ' +
      Number(item['ICU_BEDS']).toFixed(0) +
      ' ICU beds)';
    let coords = [Number(item['LATITUDE']), Number(item['LONGITUDE'])];
    markerArray.push(L.marker(coords).bindPopup(label));
  });
  hospitalLayer = L.layerGroup(markerArray).addTo(map);
  layerControl.addOverlay(hospitalLayer, 'Hospitals');
}

// creates layer w/ colorings for total cases
function initTotalCasesLayer() {
  // add boundaries for neighborhoods & cities
  totalCasesLayer = new L.GeoJSON(neighborhoodsGeoJSON, {
    onEachFeature: onEachFeature,
    style: totalCasesStyle,
  });
  totalCasesLayer.addTo(map);
  layerControl.addBaseLayer(totalCasesLayer, 'Total cases');
}

// creates layer w/ colorings for case rate
function initCaseRateLayer() {
  caseRateLayer = new L.GeoJSON(neighborhoodsGeoJSON, {
    onEachFeature: onEachFeature,
    style: caseRateStyle,
  });
  layerControl.addBaseLayer(caseRateLayer, 'Cases per capita');
}

// update geojson with cases from LA department of health
async function updateCases() {
  let neighborhoods = await loadJSON(
    '/datasets/covid-hospitals/LA-neighborhoods.geojson'
  );
  let cases = await loadCSVData('/datasets/covid-hospitals/covid-cases.csv');

  let lb_pasadena_cases = await loadCSVData(
    '/datasets/covid-hospitals/long-beach-pasadena.csv'
  );
  lb_pasadena_cases.forEach(function(c) {
    if (c['Locations'].includes('Long Beach')) {
      cases.push({
        'CITY/COMMUNITY**': 'Long Beach',
        'Total Cases': c['Total Cases'],
        'Rate**': Number(c['Total Cases']) / (LONG_BEACH_POPULATION / 100000),
      });
    }
    if (c['Locations'].includes('Pasadena')) {
      cases.push({
        'CITY/COMMUNITY**': 'Pasadena',
        'Total Cases': c['Total Cases'],
        'Rate**': Number(c['Total Cases']) / (PASADENA_POPULATION / 100000),
      });
    }
  });

  // clean data names to match geojson feautures
  cases.forEach(function(c) {
    let name = c['CITY/COMMUNITY**'];
    if (name.includes('City of')) {
      name = name.substring(8);
    } else if (name.includes('Los Angeles - ')) {
      name = name.substring(14);
    } else if (name.includes('Unincorporated - ')) {
      name = name.substring(17);
    }
    if (conversions.hasOwnProperty(name)) {
      name = conversions[name];
    }

    if (isNaN(c['Total Cases'])) {
      return; //suppressed numbers
    }

    let match = false;
    neighborhoods['features'].forEach(function(d) {
      let name2 = d.properties.name;
      if (name === name2) {
        match = true;

        let numcases = Number(c['Total Cases']);
        let rate = Number(c['Rate**']);
        let pop = rate !== 0 ? numcases / rate : 0;
        if (d.properties.cases !== null) {
          d.properties.cases += numcases;
          d.properties.population += pop;
        } else {
          d.properties.cases = numcases;
          d.properties.population = pop;
        }
      }
    });
    if (!match) {
      console.log(name + ': ' + c['Total Cases']);
    }
  });
  neighborhoodsGeoJSON = neighborhoods;

  initTotalCasesLayer();
  initCaseRateLayer();
}
