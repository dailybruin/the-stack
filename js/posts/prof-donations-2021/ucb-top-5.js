let ctx = document.getElementById('ucb-top-5');

var ucbBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
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
          fontSize: 12,
          labelString: 'Campaigns',
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 395503.15,// Your absolute max value
          callback: function (value) {
            return (value / 1130009.57 * 100).toFixed(0) + '%'; // convert it to percentage
          },
        },
        scaleLabel: {
          display: true,
          fontStyle: "bold",
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
