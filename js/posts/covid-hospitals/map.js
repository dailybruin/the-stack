var map = L.map('map').setView([34.05, -118.25], 9);

var info = L.control();
var legend = L.control({ position: 'bottomright' });
var case_rate_toggle = L.control({ position: 'bottomleft' });

var geojsonLayer;

const LONG_BEACH_POPULATION = 467354;
const PASADENA_POPULATION = 141371; //sourced from US Census 7/2018 estimates

var DISPLAY_RATES = false;

// base layer of map
L.tileLayer(
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

init_info();
init_legend();
init_toggle();

// SET UP MAP
updateCases();
addMarkers();

// add hospital markers
async function addMarkers() {
  let hopsitals = await loadCSVData(
    '/datasets/covid-hopsitals/hospital_data.csv'
  );
  hopsitals.forEach(function(item) {
    let label = item['Facility Name'] + ' (' + item['Total Beds'] + ' beds)';
    let coords = [Number(item['lat']), Number(item['long'])];
    L.marker(coords)
      .addTo(map)
      .bindPopup(label);
  });
}

// update geojson with cases from LA department of health
async function updateCases() {
  let neighborhoods = await loadJSON(
    '/datasets/covid-hopsitals/LA-neighborhoods.geojson'
  );
  let cases = await loadCSVData('/datasets/covid-hopsitals/covid-cases.csv');

  let lb_pasadena_cases = await loadCSVData(
    '/datasets/covid-hopsitals/long-beach-pasadena.csv'
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

  addNeighborhoodsLayer(neighborhoods);
}

function addNeighborhoodsLayer(geojson) {
  // add boundaries for neighborhoods & cities
  geojsonLayer = new L.GeoJSON(geojson, {
    onEachFeature: onEachFeature,
    style: style,
  });
  geojsonLayer.addTo(map);
}
