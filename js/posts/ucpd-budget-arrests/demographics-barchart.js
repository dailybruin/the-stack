var barChartRace = {
  labels: [
    'White',
    'Black',
    'Hispanic',
    'Asian',
    'American Indian',
    'Other',
  ],
  datasets: [
    {
      label:'UCPD Arrest Data (2012-2019)',
      backgroundColor: 'rgba(44, 130, 201, .5)',
      borderColor: 'rgba(44, 130, 201, 1)',
      borderWidth: 1,
      data: [36, 31, 22, 4, 7]
    },
    {
      label: 'Westwood Demographic Data (2019)',
      backgroundColor: 'rgba(0, 177, 106, .5)',
      borderColor: 'rgba(0, 177, 106, 1)',
      borderWidth: 1,
      data: [53, 3, 17, 21, .15, 5]
    }
  ]
};

var racechartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Arrest Demographics by Race"
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
    }],
    yAxes: [{
      display: true,
      gridLines: {
        display: false
      },
        scaleLabel: {
          display: true,
          labelString: 'Percent of Arrests',
      ticks: {
        beginAtZero: true
      }
    }
    }],
  },
  }



var ctxRace = document.getElementById("race_chart")//.getContext("2d");
RaceChart = new Chart(ctxRace, {
  type: "bar",
  data: barChartRace,
  options: racechartOptions
})

if (window.matchMedia('(max-width: 480px)').matches) {
  RaceChart.canvas.style = 'max-height:500px';
  RaceChart.options.maintainAspectRatio = false;
  RaceChart.update();
};


// Gender Chart
var barChartGender = {
    labels: [
      'Male',
      'Female',
    ],
    datasets: [
      {
        label:'UCPD Arrest Data (2012-2019)',
        backgroundColor: 'rgba(44, 130, 201, .5)',
        borderColor: 'rgba(44, 130, 201, 1)',
        borderWidth: 1,
        data: [80, 12]
      },
      {
        label: 'Westwood Demographic Data (2019)',
        backgroundColor: 'rgba(0, 177, 106, .5)',
        borderColor: 'rgba(0, 177, 106, 1)',
        borderWidth: 1,
        data: [48, 52]
      }
    ]
  };
  
  var genderchartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Arrest Demographics by Gender"
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: false
        },
          scaleLabel: {
            display: true,
            labelString: 'Percent of Arrests',
      },
      ticks: {
        beginAtZero: true
      },
      }]
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }
  
var ctxGender = document.getElementById("gender_chart")//.getContext("2d");
GenderChart = new Chart(ctxGender, {
  type: "bar",
  data: barChartGender,
  options: genderchartOptions

  
})

if (window.matchMedia('(max-width: 480px)').matches) {
  GenderChart.canvas.style = 'max-height:500px';
  GenderChart.options.maintainAspectRatio = false;
  GenderChart.update();
};;

// Age Chart
var barChartAge = {
  labels: [
    '10 - 19',
    '20 - 29',
    '30 - 39',
    '40 - 49',
    '50 - 59',
    '60 - 69',
    '70+',
  ],
  datasets: [
    {
      label:'UCPD Arrest Data (2012-2019)',
      backgroundColor: 'rgba(44, 130, 201, .5)',
      borderColor: 'rgba(44, 130, 201, 1)',
      borderWidth: 1,
      data: [0, 21, 32, 22, 16, 7, 2]
    },
    {
      label: 'Westwood Demographic Data (2019)',
      backgroundColor: 'rgba(0, 177, 106, .5)',
      borderColor: 'rgba(0, 177, 106, 1)',
      borderWidth: 1,
      data: [12, 24, 17, 13, 9, 8, 9]
    }
  ]
};
  var agechartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Arrest Demographics by Age"
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: false
        },
          scaleLabel: {
            display: true,
            labelString: 'Percent of Arrests',
        ticks: {
          beginAtZero: true
        }
      }
      }]
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        }
      }
    }
  }
  var ctxAge = document.getElementById("age_chart")//.getContext("2d");
AgeChart = new Chart(ctxAge, {
  type: "bar",
  data: barChartAge,
  options: agechartOptions
    })
if (window.matchMedia('(max-width: 480px)').matches) {
  AgeChart.canvas.style = 'max-height:500px';
  AgeChart.options.maintainAspectRatio = false;
  AgeChart.update();
};;