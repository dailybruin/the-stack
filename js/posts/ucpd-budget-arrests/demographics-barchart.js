var barChartRace = {
  labels: [
    'White',
    'Black',
    'Hispanic',
    'Asian',
    'American Indian',
    'Other',
    'Unknown',
  ],
  datasets: [
    {
      label:'UCPD Arrest Data',
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [35.92, 31.25, 21.87, 3.89,0.1544, 6.83]
    },
    {
      label: 'Westwood Demographic Data',
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 1,
      data: [53, 3, 17, 21, 0, 5, 0]
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
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}


var ctxRace = document.getElementById("race_chart").getContext("2d");
RaceChart = new Chart(ctxRace, {
  type: "bar",
  data: barChartRace,
  options: racechartOptions
});


// Gender Chart
var barChartGender = {
    labels: [
      'Male',
      'Female',
    ],
    datasets: [
      {
        label:'UCPD Arrest Data',
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [80.017, 11.982]
      },
      {
        label: 'Westwood Demographic Data',
        backgroundColor: "lightblue",
        borderColor: "blue",
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
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  
var ctxGender = document.getElementById("gender_chart").getContext("2d");
GenderChart = new Chart(ctxGender, {
  type: "bar",
  data: barChartGender,
  options: genderchartOptions
});

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
      label:'UCPD Arrest Data',
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [0, 20.13589, 32.45831, 21.24768, 15.84311,  8.678196,  1.636813]
    },
    {
      label: 'Westwood Demographic Data',
      backgroundColor: "lightblue",
      borderColor: "blue",
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
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  var ctxAge = document.getElementById("age_chart").getContext("2d");
AgeChart = new Chart(ctxAge, {
  type: "bar",
  data: barChartAge,
  options: agechartOptions
    });