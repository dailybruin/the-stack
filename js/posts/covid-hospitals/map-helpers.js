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
      '<h4>COVID-19 cases</h4>' +
      (props
        ? '<b>' + props.name + '</b><br />' + text
        : 'Hover over a city or community');
  };
  info.addTo(map);
}

function init_legend() {
  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.id = 'legend';
    return update_legend(div);
  };
  legend.addTo(map);
}

function update_legend(div) {
  var grades = DISPLAY_RATES
    ? [0, 5, 10, 20, 50, 100, 150, 200]
    : [0, 5, 10, 20, 50, 100, 200, 400];
  // loop through our density intervals and generate a label with a colored square for each interval
  div.innerHTML = DISPLAY_RATES
    ? 'Cases per 100K people<br>'
    : 'Total Cases<br>';
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
}

function init_toggle() {
  case_rate_toggle.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'btn-div');
    var b1 = L.DomUtil.create('button', 'btn-group active', div);
    b1.id = 'case-btn';
    var b2 = L.DomUtil.create('button', 'btn-group', div);
    b2.id = 'rate-btn';
    b1.innerHTML = 'Total cases';
    b2.innerHTML = 'Cases per capita';
    return div;
  };
  case_rate_toggle.addTo(map);

  // JQuery for buttons
  $('.btn-group').click(function() {
    $('.btn-group').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr('id') === 'rate-btn') {
      DISPLAY_RATES = true;
    } else {
      DISPLAY_RATES = false;
    }
    geojsonLayer.setStyle(style);
    update_legend(document.getElementById('legend'));
  });
}

// helper functions for geojson layer style  & controls
function getColor(num) {
  if (DISPLAY_RATES) {
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

function style(feature) {
  let c = feature.properties.cases;
  let p = feature.properties.population;
  let rate = c === null || c === 0 ? 0 : c / p;
  return {
    fillColor:
      c !== null ? (DISPLAY_RATES ? getColor(rate) : getColor(c)) : '#AAAAAA',
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
