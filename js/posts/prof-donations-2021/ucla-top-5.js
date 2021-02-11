let ctx = document.getElementById('test');

var uclaBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
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
          fontSize: 12,
          labelString: 'Campaigns',
        },
      }
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 609978.20,// Your absolute max value
          callback: function (value) {
            return (value / 1742794.86 * 100).toFixed(0) + '%'; // convert it to percentage
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

