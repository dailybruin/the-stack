var map = L.map('map').setView([34.05, -118.25], 9);
var info = L.control();
var geojsonLayer;

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

//      SET UP MAP
updateCases();
addMarkers();

// initialize info div
info.onAdd = function(map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};
// method that we will use to update the control based on feature properties passed
info.update = function(props) {
  let text;
  if (props) {
    let rate = props.cases === 0 ? 0 : props.cases / props.population;
    text =
      props.cases !== null
        ? props.cases + ' cases<br />(' + rate.toFixed(2) + ' per 100K)'
        : 'No data available';
  }
  this._div.innerHTML =
    '<h4>COVID-19 cases</h4>' +
    (props
      ? '<b>' + props.name + '</b><br />' + text
      : 'Hover over a city or community');
};
info.addTo(map);

// initialize legend
var legend = L.control({ position: 'bottomright' });
legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 5, 10, 20, 50, 100, 200, 400],
    labels = [];
  // loop through our density intervals and generate a label with a colored square for each interval
  div.innerHTML += '<i style="background:#AAAAAA"></i> No data<br>';
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? '&ndash;' + (grades[i + 1] - 1) + '<br>' : '+');
  }
  return div;
};
legend.addTo(map);

// helper functions for geojson layer style  & controls
function getColor(d) {
  return d >= 400
    ? '#990000'
    : d >= 200
    ? '#d7301f'
    : d >= 100
    ? '#ef6548'
    : d >= 50
    ? '#fc8d59'
    : d >= 20
    ? '#fdbb84'
    : d >= 10
    ? '#fdd49e'
    : d >= 5
    ? '#fee8c8'
    : '#fff7ec';
}

function style(feature) {
  return {
    fillColor:
      feature.properties.cases !== null
        ? getColor(feature.properties.cases)
        : '#AAAAAA',
    weight: 2,
    opacity: 1,
    color: 'gray',
    dashArray: '',
    fillOpacity: 0.7,
  };
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}

// mouseover event
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 3,
    color: 'white',
    dashArray: '',
    fillOpacity: 0.7,
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

// helper functions to load data
function loadCSVData(path) {
  return new Promise(resolve => {
    d3.csv(path, function(csv) {
      resolve(csv);
    });
  });
}

function loadJSON(path) {
  return new Promise(resolve => {
    $.getJSON(path, function(json) {
      resolve(json);
    });
  });
}

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

  // clean data names to match geojson feautures
  cases.forEach(function(c) {
    let name = c['CITY/COMMUNITY'];
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
        let rate = Number(c['Rate']);
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
  // console.log(geojsonLayer);
  geojsonLayer.addTo(map);
}
