function makeCharts(classes2) {

  var classesLabels3 = classes2.map(function (d) { return d.class }).slice(0, 21);
  var inflationData3 = classes2.map(function (d) { return d.difference }).slice(0, 21);


  var departmentColors3 = classes2.map(function (d) {
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
  }).slice(0, 21);


  var ctx3 = document.getElementById("fallinflatChart");
  var fallinflatChart = new Chart(ctx3, {
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
      labels: classesLabels3,
      datasets: [
        {
          data: inflationData3,
          backgroundColor: departmentColors3
        }
      ]
    }
  })

  var classesLabels4 = classes2.map(function (d) { return d.class }).slice(991, 1011);
  var inflationData4 = classes2.map(function (d) { return d.difference }).slice(991, 1011);

  var departmentColors4 = classes2.map(function (d) {
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
  }).slice(991, 1011);

  var ctx4 = document.getElementById("falldeflatChart");
  var falldeflatChart = new Chart(ctx4, {
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
      labels: classesLabels4,
      datasets: [
        {
          data: inflationData4,
          backgroundColor: departmentColors4
        }
      ]
    }
  }



  )
}



d3.csv('/datasets/covid-grade-inflation/inflat_rank_fall.csv')
  .then(makeCharts);




