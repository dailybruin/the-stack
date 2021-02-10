let ctx = document.getElementById('test');

var uclaBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    label: 'Campaign',
    labels: [
      'ActBlue',
      'Biden Victory Fund',
      'Biden for President',
      'DNC Services Corp / Democratic National Committee',
      'DCCC',
    ],
    datasets: [
      {
        label: 'Donation Amount',
        data: [441971.4, 201469.93, 199178.67, 113315.32, 52796.0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
      ],
            borderWidth: 0.5
      },
    ],
  },
  options: {
    legend: {
      display: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          Rotation: 90,
        },
        scaleLabel: {
          display: true,
          fontStyle: "bold",
          labelString: 'Campaigns',
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: this.max,// Your absolute max value
          callback: function (value) {
            return (value / 1742794.86 * 100).toFixed(0) + '%'; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage of Total Donations',
        },
      },
    ],
},
title: {
  display: true,
  text: 'Top 5 Campaigns Donated to by UCLA Professors',
  fontSize: 16,
},
tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      return tooltipItem.yLabel.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      });
    },
  },
},
  }
});




/*let ctxOne = document.getElementById('ucb-top-5');

var ucbBarChart = new Chart(ctxOne, {
  type: 'bar',
  data: {
    label: 'Campaign',
    labels: [
      'ActBlue',
      'Biden for President',
      'Biden Victory Fund',
      'DNC Services Corp / Democratic National Committee',
      'Black PAC',
    ],
    datasets: [
      {
        label: 'Donation Amount',
        data: [253892.06, 169078.98, 102776.16, 66496.79, 50000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 127, 80, 0.2)'
      ],
      borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 127, 80, 1)'
      ],
            borderWidth: 0.5
      },
    ],
  },
  options: {
    legend: {
      display: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          Rotation: 90,
        },
        scaleLabel: {
          display: true,
          fontStyle: "bold",
          labelString: 'Campaigns',
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: this.max,// Your absolute max value
          callback: function (value) {
            return (value / 1130009.57 * 100).toFixed(0) + '%'; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage of Total Donations',
        },
      },
    ],
},
title: {
  display: true,
  text: 'Top 5 Campaigns Donated to by UC Berkeley Professors',
  fontSize: 16,
},
tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      return tooltipItem.yLabel.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      });
    },
  },
},
  }
});
 */


/* yAxes: [
  {
    scaleLabel: {
      display: true,
      labelString: 'Donation Amount',
    },
    ticks: {
      beginAtZero:true,
      callback: function(value) {
        return value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        });
      },
    },
  },
], */


let ctxTwo = document.getElementById('ucb-top-5');

var uscBarChart = new Chart(ctxTwo, {
  type: 'bar',
  data: {
    label: 'Campaign',
    labels: [
      'ActBlue',
      'Biden for President',
      'DCCC',
      'Biden Victory Fund',
      'DSCC',
    ],
    datasets: [
      {
        label: 'Donation Amount',
        data: [416044.09, 143908.88, 127033, 58636.77, 47079.17],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(0, 48, 143, 0.2)',
          
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(0, 48, 143, 1)',
      ],
            borderWidth: 0.5
      },
    ],
  },
  options: {
    legend: {
      display: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          Rotation: 90,
        },
        scaleLabel: {
          display: true,
          fontStyle: "bold",
          labelString: 'Campaigns',
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: this.max,// Your absolute max value
          callback: function (value) {
            return (value / 1302976.44 * 100).toFixed(0) + '%'; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Percentage of Total Donations',
        },
      },
    ],
},
title: {
  display: true,
  text: 'Top 5 Campaigns Donated to by USC Professors',
  fontSize: 16,
},
tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      return tooltipItem.yLabel.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      });
    },
  },
},
  }
}); 

