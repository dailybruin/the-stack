let ctxTwo = document.getElementById('usc-top-5');

let uscTotal = 1302976.44;
let bidenTotal = 143908.88 + 58636.77;

let USCFullCommitteeNames = [
  'ActBlue',
  'Biden for President & Biden Victory Fund',
  'Democratic Congressional Campaign Committee',
  'Democratic Senatorial Campaign Committee',
  'Jon Ossoff for Senate',
];

var uscBarChart = new Chart(ctxTwo, {
  type: 'bar',
  data: {
    labels: USCFullCommitteeNames,
    datasets: [
      {
        label: 'Donation Amount',
        data: [416044.09, bidenTotal, 127033, 47079.17, 26560.54],
        backgroundColor: [
          'rgba(255, 127, 80, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(161, 75, 158, 0.2)',
        ],
        borderColor: [
          'rgba(255, 127, 80, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(161, 75, 158, 1)',
        ],
        borderWidth: 0.5,
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
            maxRotation: 0,
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold',
            fontSize: 12,
            labelString: 'Campaigns / Committees',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: this.max, // Your absolute max value
            stepSize: uscTotal * 0.05,
            callback: function(value) {
              return (value / uscTotal * 100).toFixed(0) + '%'; // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold',
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
        label: function(tooltipItem, chart) {
          return tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
        },
        title: function(tooltipItem, chart) {
          return USCFullCommitteeNames[tooltipItem[0].index];
        },
      },
    },
  },
});

if (window.matchMedia('(max-width: 480px)').matches) {
  uscBarChart.canvas.style = 'max-height:300px';
  uscBarChart.options.maintainAspectRatio = false;
  uscBarChart.options.scales.xAxes[0].labels = [
    'ActBlue',
    'Biden',
    'DCCC',
    'DSCC',
    'Jon Ossoff',
  ];
  uscBarChart.update();
}
