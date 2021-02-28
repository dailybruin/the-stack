let ctxOne = document.getElementById('ucb-top-5');

let ucbTotal = 1130009.57;
let bidenForPresidentUCB = 169078.98;
let bidenVictoryFundUCB = 102776.16;

let UCBFullCommitteeNames = [
  'Biden for President & Biden Victory Fund',
  'ActBlue',
  'Democratic National Committee',
  'Black PAC',
  'Jon Ossoff for Senate',
];

let UCBShortCommitteeNames = [
  'Biden',
  'ActBlue',
  'DNC',
  'Black PAC',
  'Jon Ossoff',
];

var ucbBarChart = new Chart(ctxOne, {
  type: 'bar',
  data: {
    labels: UCBShortCommitteeNames,
    datasets: [
      {
        label: 'Donation Amount',
        data: [
          bidenForPresidentUCB + bidenVictoryFundUCB,
          253892.06,
          66496.79,
          50000,
          25048.7,
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 127, 80, 0.7)',
          'rgba(250, 84, 255, 0.7)',
          'rgba(174, 189, 66, 0.7)',
          'rgba(161, 75, 158, 0.7)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 127, 80, 1)',
          'rgba(250, 84, 255, 1)',
          'rgba(174, 189, 66, 1)',
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
            max: ucbTotal * 0.35, // Your absolute max value
            stepSize: ucbTotal * 0.05,
            callback: function(value) {
              return ((value / ucbTotal) * 100).toFixed(0) + '%'; // convert it to percentage
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
      text: 'Top 5 Campaigns Donated to by UC Berkeley Professors, 2019-2020',
      fontSize: 16,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, chart) {
          let dollars = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          });
          let percentage = Math.round((tooltipItem.yLabel / ucbTotal) * 100);

          return dollars + ` | ${percentage}% of total`;
        },
        title: function(tooltipItem, chart) {
          return UCBFullCommitteeNames[tooltipItem[0].index];
        },
        afterLabel: function(tooltipItem, chart) {
          if (tooltipItem.index == 0) {
            let bidenPresStr = bidenForPresidentUCB.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            });
            let bidenVictSt = bidenVictoryFundUCB.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            });
            return `\nBiden for President: ${bidenPresStr}\nBiden Victory Fund: ${bidenVictSt}`;
          }
          return '';
        },
      },
    },
  },
});

if (window.matchMedia('(max-width: 480px)').matches) {
  ucbBarChart.canvas.style = 'max-height:300px';
  ucbBarChart.options.maintainAspectRatio = false;
  ucbBarChart.options.scales.xAxes[0].labels = UCBShortCommitteeNames;
  ucbBarChart.update();
} else if (window.matchMedia('(max-width: 1000px)').matches) {
  ucbBarChart.options.scales.xAxes[0].labels = UCBShortCommitteeNames;
  ucbBarChart.update();
}
