var barChartData = {
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
    text: "Chart.js Bar Chart"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
};