Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

function makeChart(classes) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

  var classesLabels = classes.map(function(d) {return d.class}).slice (1, 21);
  var inflationData = classes.map(function(d) {return +d.difference}).slice (1, 21);
 

  var departmentColors = classes.map(function(d) {return d.department === 'physical' ? 'purple': 'social' ? 'coral':'life science'?'green': 'engineering'?'blue': 'humanities'? 'red': 'orange';});

  //var departmentLabels = classes.map(function(d) {return d.department});
  //['#002437', '#003E60', '#00A6FF', '#4AC0FF', '#7BD1FF']
  var chart = new Chart('20-inflat-sum', {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: true,
      legend: {
        display: true,
      },
      plugins: {
        datalabels: {
          display: false
        }
      },
      scales: {
        xAxes: [
          {ticks: {
            min: -3,
            max: 4, // Your absolute max value
            stepSize: 1
            
          },
            scaleLabel: {
              display: true,
              labelString: 'Class Average Increment Difference (where 1 incremement= B+ to A-, A- to A, etc)',
              fontSize: 16, 
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels,
      datasets: [
        { 
          data: inflationData,
          backgroundColor: departmentColors
        }
      ]
    }
  })
}

// Request data using D3
d3.csv('/datasets/covid-grade-inflation/inflat_rank_sum.csv')
  .then(makeChart);






