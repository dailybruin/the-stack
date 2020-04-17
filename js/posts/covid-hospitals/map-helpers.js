// initialize info div in upper right displaying case info per neighborhood
function init_info() {
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
      '<h4 class="hover-title">COVID-19 cases</h4>' +
      (props
        ? '<b class="hover-label">' + props.name + '</b><br />' + text
        : '<span class="hover-label">Hover over a city or community</span>');
  };
  info.addTo(map);
}

// initialize legend in bottom right showing key for colors
function init_legend() {
  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.id = 'legend';
    return update_legend(div, false);
  };
  legend.addTo(map);
}

function update_legend(div, show_rates) {
  var grades = show_rates
    ? [0, 5, 10, 20, 50, 100, 150, 200]
    : [0, 5, 10, 20, 50, 100, 200, 400];
  // loop through our density intervals and generate a label with a colored square for each interval
  div.innerHTML = show_rates
    ? '<span class="legend"><strong>Cases per 100K people<br></strong></span>'
    : '<span class="legend"><strong>Total Cases<br></strong></span>';
  div.innerHTML +=
    '<i class="legend" style="background:#AAAAAA"></i> No data<br>';
  for (var i = 0; i < grades.length; i++) {
    let color = show_rates
      ? getRateColor(grades[i] + 1)
      : getCasesColor(grades[i] + 1);
    div.innerHTML +=
      '<i class="legend" style="background:' +
      color +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? '&ndash;' + (grades[i + 1] - 1) + '<br>' : '+');
  }
  return div;
}

// helper functions for geojson layer style  & controls
function getRateColor(num) {
  return num >= 200
    ? '#990000'
    : num >= 150
    ? '#d7301f'
    : num >= 100
    ? '#ef6548'
    : num >= 50
    ? '#fc8d59'
    : num >= 20
    ? '#fdbb84'
    : num >= 10
    ? '#fdd49e'
    : num >= 5
    ? '#fee8c8'
    : '#fff7ec';
}

function getCasesColor(num) {
  return num >= 400
    ? '#990000'
    : num >= 200
    ? '#d7301f'
    : num >= 100
    ? '#ef6548'
    : num >= 50
    ? '#fc8d59'
    : num >= 20
    ? '#fdbb84'
    : num >= 10
    ? '#fdd49e'
    : num >= 5
    ? '#fee8c8'
    : '#fff7ec';
}

function totalCasesStyle(feature) {
  return {
    fillColor:
      feature.properties.cases !== null
        ? getCasesColor(feature.properties.cases)
        : '#AAAAAA',
    weight: 2,
    opacity: 1,
    color: 'gray',
    dashArray: '',
    fillOpacity: 0.7,
  };
}

function caseRateStyle(feature) {
  let c = feature.properties.cases;
  let p = feature.properties.population;
  let rate = c === null || c === 0 ? 0 : c / p;
  return {
    fillColor: c !== null ? getRateColor(rate) : '#AAAAAA',
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
  totalCasesLayer.resetStyle();
  caseRateLayer.resetStyle();
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

var hospitalIcon = L.Icon.extend({
  options: {
    // shadowUrl: '/js/posts/covid-hospitals/leaf-shadow.png',
    iconSize: [20, 20],
    shadowSize: [0, 0],
    // iconAnchor:   [22, 94],
    // shadowAnchor: [0, 0],
    // popupAnchor:  [-3, -76]
  },
});

L.icon = function(options) {
  return new L.Icon(options);
};

var UCLAIcon = new hospitalIcon({
    iconUrl: '/js/posts/covid-hospitals/ucla-icon.png',
  }), // im not sure how to make this only go to westwood
  hospitalIcon = new hospitalIcon({
    iconUrl: '/js/posts/covid-hospitals/hospital-icon.png',
  });
