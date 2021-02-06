var mymap = L.map('mapid', {
  center: [34.0711224, -118.4418554],
  zoom: 15.5,
  minZoom: 15,
  maxBounds: [
    [34.07925, -118.45774],
    [34.06, -118.4362],
  ],
});

var baseLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVycnlsaW5ldyIsImEiOiJjajIwc2E1YXkwMmt6MzNuMXZnaWRjb2lhIn0.u0AHZNQd8_8hFmpaVvI1nQ',
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
  }
);
mymap.addLayer(baseLayer);

var start_locations = {
  Hedrick: 'hedrick',
  Rieber: 'rieber',
  Sproul: 'sproul',
  'De Neve': 'deneve',
};

var end_locations = {
  Powell: 'powell',
  Anderson: 'anderson',
  'Public Affairs': 'public',
  'Court of Sciences': 'court',
  'Young Research Library': 'yrl',
  Target: 'target',
};

var min_per_mile = 20;

d3.select('#start_location')
  .on('change', function(e) {
    let start = $('#start_location option:selected').text();
    let end = $('#end_location option:selected').text();
    generateRoutes(start, end);
    loadStats(start, end);
    generateRoutesforGraph(start, end);
  })
  .selectAll('option')
  .data(Object.keys(start_locations))
  .enter()
  .append('option')
  .attr('value', function(d) {
    return d;
  })
  .text(function(d) {
    return d;
  });

d3.select('#end_location')
  .on('change', function(e) {
    let start = $('#start_location option:selected').text();
    let end = $('#end_location option:selected').text();
    generateRoutes(start, end);
    loadStats(start, end);
    generateRoutesforGraph(start, end);
  })
  .selectAll('option')
  .data(Object.keys(end_locations))
  .enter()
  .append('option')
  .attr('value', function(d) {
    return d;
  })
  .text(function(d) {
    return d;
  });

d3.selectAll("input[name='speed']").on('change', function(e) {
  min_per_mile = this.value;
  let start = $('#start_location option:selected').text();
  let end = $('#end_location option:selected').text();
  loadStats(start, end);
});

generateRoutes('Hedrick', 'Powell');
loadStats('Hedrick', 'Powell');
generateRoutesforGraph('Hedrick', 'Powell');

// calculateStats();

function generateRoutes(start, end) {
  mymap.eachLayer(function(layer) {
    if (layer != baseLayer) {
      layer.remove();
    }
  });

  var path = '/datasets/walking-to-class/';
  var route_A =
    path + start_locations[start] + '_' + end_locations[end] + '_A.gpx';
  var route_B =
    path + start_locations[start] + '_' + end_locations[end] + '_B.gpx';

  var r1 = this.generateLayer(route_A, 'green');
  mymap.addLayer(r1);

  var r2 = this.generateLayer(route_B, 'blue');
  mymap.addLayer(r2);
}

function generateLayer(filePath, color) {
  return new L.GPX(filePath, {
    async: true,
    marker_options: {
      startIconUrl: '',
      endIconUrl: '',
      shadowUrl: '',
    },
    polyline_options: {
      color: color,
    },
  });
}

async function loadStats(start, end) {
  let data = await loadCSVData(start_locations[start], end_locations[end]);

  document.getElementById('dist_A').innerHTML =
    Number(data[0]['distance']).toFixed(3) + ' miles';
  document.getElementById('gain_A').innerHTML =
    Number(data[0]['elevation_gain']).toFixed(1) + ' feet';
  document.getElementById('loss_A').innerHTML =
    Number(data[0]['elevation_loss']).toFixed(1) + ' feet';
  document.getElementById('stairs_A').innerHTML = data[0]['number_stairs'];
  document.getElementById('time_A').innerHTML =
    Number(data[0]['distance'] * min_per_mile).toFixed(0) + ' minutes';

  document.getElementById('dist_B').innerHTML =
    Number(data[1]['distance']).toFixed(3) + ' miles';
  document.getElementById('gain_B').innerHTML =
    Number(data[1]['elevation_gain']).toFixed(1) + ' feet';
  document.getElementById('loss_B').innerHTML =
    Number(data[1]['elevation_loss']).toFixed(1) + ' feet';
  document.getElementById('stairs_B').innerHTML = data[1]['number_stairs'];
  document.getElementById('time_B').innerHTML =
    Number(data[1]['distance'] * min_per_mile).toFixed(0) + ' minutes';
}

function loadCSVData(start, end) {
  return new Promise(resolve => {
    d3.csv('/datasets/walking-to-class/route_stats.csv', function(csv) {
      csv = csv.filter(function(row) {
        return row['start'] == start && row['stop'] == end;
      });
      resolve(csv);
    });
  });
}

async function calculateStats() {
  let route_data =
    'start,stop,route,distance,elevation_gain,elevation_loss,number_stairs\n';

  for (s in start_locations) {
    for (e in end_locations) {
      let start = start_locations[s];
      let end = end_locations[e];

      let path = '/datasets/walking-to-class/';
      let route_A = path + start + '_' + end + '_A.gpx';
      let route_B = path + start + '_' + end + '_B.gpx';

      let a_stats = await getStats(route_A);
      let b_stats = await getStats(route_B);

      route_data +=
        start +
        ',' +
        end +
        ',A,' +
        a_stats[0] +
        ',' +
        a_stats[1] +
        ',' +
        a_stats[2] +
        ',\n';
      route_data +=
        start +
        ',' +
        end +
        ',B,' +
        b_stats[0] +
        ',' +
        b_stats[1] +
        ',' +
        b_stats[2] +
        ',\n';
    }
  }

  console.log('\n\n' + route_data);

  var hiddenElement = document.createElement('a');
  hiddenElement.href =
    'data:text/route_data;charset=utf-8,' + encodeURI(route_data);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'route_data.csv';
  hiddenElement.click();
}

function getStats(filePath) {
  return new Promise(resolve => {
    let x = new L.GPX(filePath, {
      async: true,
      marker_options: {
        startIconUrl: '',
        endIconUrl: '',
        shadowUrl: '',
      },
    }).on('loaded', function(e) {
      d = e.target.get_distance_imp();
      g = e.target.get_elevation_gain();
      l = e.target.get_elevation_loss();
      resolve([d, g, l]);
    });
  });
}
function generateRoutesforGraph(start, end) {
  var path = '/datasets/walking-to-class/';
  var route_A =
    path + start_locations[start] + '_' + end_locations[end] + '_A.json';
  var route_B =
    path + start_locations[start] + '_' + end_locations[end] + '_B.json';
  getelevationpoints(route_A, 'green');
  getelevationpoints(route_B, 'blue');
}

var config = {
  type: 'scatter',
  options: {
    cubicInterpolationMode: 'monotone',
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Distance (mi)',
          },
          gridLines: {
            offsetGridLines: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Elevation (ft)',
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'point',
    },
    legend: {
      display: false,
    },
  },
};
var ctx = document.getElementById('chartA').getContext('2d');
var myLineChart = new Chart(ctx, config);

function getelevationpoints(path, color) {
  var points = [];
  $.getJSON(path, function(data) {
    data = $.parseJSON(data);
    distance = data.distance;
    elevation = data.elevation;
    for (var key in distance) {
      points.push({
        x: distance[key],
        y: elevation[key],
      });
    }

    var newDataset = {
      label: 'please work!',
      data: points,
      fill: false,
      borderColor: color,
      showLine: true,
      pointRadius: 0,
    };

    if (config.data.datasets.length > 1) {
      config.data.datasets.pop();
      config.data.datasets.pop();
    }
    config.data.datasets.push(newDataset);
    myLineChart.update();
  });
}
