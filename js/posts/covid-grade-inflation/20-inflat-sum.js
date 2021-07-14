/*let select = document.querySelector('#chartType');

select.addEventListener('change', showHide);

function showHide() {
  // concat Chart for the canvas ID
  let chart = this.options[select.selectedIndex].value + 'Test';
    document.querySelectorAll('div')
    .forEach(c => {
      c.style.display = (c.id === chart) ? 'inherit' : 'none';
    })
}
*/


/*(document).ready(function() {
  ("select").on('change', function() {
      (this).find("option:selected").each(function() {
          var quarter = (this).attr("value");
          if (quarter) {
              (".GFG").not("." + quarter).hide();
              ("." + quarter).show();
          } else {
              (".GFG").hide();
          }

      });
  }).change();
});
*/

$(document).ready(function () {
  $("select").on('change', function () {
    $(this).find("option:selected").each(function () {
      var quarter = $(this).attr("value");
      if (quarter) {
        $(".GFG").not("." + quarter).hide();
        $("." + quarter).show();

      } else {
        $(".GFG").hide();

      }

    });
  }).change();
});

function makeCharts(classes) {

  var classesLabels = classes.map(function (d) { return d.class }).slice(0, 20);
  var inflationData = classes.map(function (d) { return d.difference }).slice(0, 20);


  var departmentColors = classes.map(function (d) {
    //console.log(d);
    if (d.department === 'physical') {
      return '#77b1d2';
    } else if (d.department === 'life_science') {
      return '#A2F2A3';
    } else if (d.department === 'social') {
      return '#FFE589';
    } else if (d.department === 'humanities') {
      return '#B5BAF2';
    } else if (d.department === 'engineering') {
      return '#E26C5D';
    } else {
      return '#CFCFC4';
    }
  }).slice(0, 20);


  var ctx = document.getElementById("inflationChart");
  var inflationChart = new Chart(ctx, {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: true,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false
        }
      },
      title: {
        display: true,
        text: 'Top 20 Most Inflated Classes'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
              style: 'percent',
              maximumFractionDigits: 2,
            });
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              min: -1,
              max: 1.5, // Your absolute max value

            },
            scaleLabel: {
              display: true,
              labelString: 'Average GPA Point Difference',
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

  var classesLabels2 = classes.map(function (d) { return d.class }).slice(360, 380);
  var inflationData2 = classes.map(function (d) { return d.difference }).slice(360, 380);

  var departmentColors2 = classes.map(function (d) {
    //console.log(d);
    if (d.department === 'physical') {
      return '#77b1d2';
    } else if (d.department === 'life_science') {
      return '#A2F2A3';
    } else if (d.department === 'social') {
      return '#FFE589';
    } else if (d.department === 'humanities') {
      return '#B5BAF2';
    } else if (d.department === 'engineering') {
      return '#E26C5D';
    } else {
      return '#CFCFC4';
    }
  }).slice(360, 380);

  var ctx2 = document.getElementById("deflationChart");
  var deflationChart = new Chart(ctx2, {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: true,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false
        }
      },
      title: {
        display: true,
        text: 'Top 20 Most Deflated Classes'
      },
      tooltips: {
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.xLabel.toLocaleString('en-US', {
              style: 'percent',
              maximumFractionDigits: 2,
            });
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              min: -1,
              max: 1.5, // Your absolute max value

            },
            scaleLabel: {
              display: true,
              labelString: 'Average GPA Point Difference',
              fontSize: 16,
            }
          }
        ]
      }
    },
    data: {
      labels: classesLabels2,
      datasets: [
        {
          data: inflationData2,
          backgroundColor: departmentColors2
        }
      ]
    }
  }



  )

  if (window.matchMedia('(max-width: 480px)').matches) {
    inflationChart.canvas.style = 'max-height:400px';
    inflationChart.options.maintainAspectRatio = false;
    //console.log(inflationChart);
    inflationChart.update();
  };
  if (window.matchMedia('(max-width: 480px)').matches) {
    deflationChart.canvas.style = 'max-height:400px';
    deflationChart.options.maintainAspectRatio = false;
    //console.log(deflationChart);

    deflationChart.update();
  };

}



d3.csv('/datasets/covid-grade-inflation/inflat_rank_sum.csv')
  .then(makeCharts);
















