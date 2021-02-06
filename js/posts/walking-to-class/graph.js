var distance = new Array()
var ctx = document.getElementById('chart');
var path = "/datasets/walking-to-class/data.json";

$.getJSON(path, function(data) {
  data = $.parseJSON(data)
  distance = data.distance
  elevation = data.elevation
  dist = []
  for (var key in distance) {
      dist.push(distance[key])
  }
  elev = []
  for (var key in elevation) {
      elev.push(elevation[key])
  }

  var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dist,
        datasets: [
          {
            label: "Elevation",
            data: elev,
            borderColor: 'orange',
            backgroundColor: 'transparent',
            pointStyle: "line"
          }
        ]
      },
      options: {
        cubicInterpolationMode: "monotone",
        scales: {
          xAxes: [{
            display: false,
          }]
        },
        tooltips: {
                enabled: true,
                mode: 'point',
            },

    }
  });
});
