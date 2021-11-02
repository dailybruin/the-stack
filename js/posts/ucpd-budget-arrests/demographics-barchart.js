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
      label: 'LA City Demographic Data',
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 1,
      data: [28, 9, 49, 11, 0, , 2, 0]
    }
  ]
};

var chartOptions = {
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
  options: chartOptions
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
        label: 'LA City Demographic Data',
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [49, 51]
      }
    ]
  };
  
  var chartOptions = {
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
  options: chartOptions
});

