import {
  MALE_COLOR,
  FEMALE_COLOR,
  PRE_PANDEMIC_COLOR,
  PANDEMIC_COLOR,
  isMobile,
} from './globals.js';
const font_size = 16;

var ctx = document.getElementById('myChart').getContext('2d');

var data = {
  labels: ['Male professors', 'Female professors'],
  datasets: [
    {
      label: 'Pre-pandemic',
      data: [80.35, 79.65],
      backgroundColor: PRE_PANDEMIC_COLOR,
      hoverBackgroundColor: PRE_PANDEMIC_COLOR,
    },
    {
      label: 'Pandemic',
      data: [84.09, 85.02],
      backgroundColor: PANDEMIC_COLOR,
      hoverBackgroundColor: PANDEMIC_COLOR,
    },
  ],
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    title: {
      display: true,
      text: 'Positive review percentages',
      fontSize: font_size,
    },
    legend: {
      labels: {
        fontSize: font_size,
      },
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: function(value, context) {
          let numDecimalPlaces = isMobile() ? 0 : 1;
          return `${Number(value).toFixed(numDecimalPlaces)}%`;
        },
        align: 'start',
        anchor: 'end',
        color: 'white',
        font: {
          size: 16,
        },
      },
    },
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Positive review percentage',
            fontSize: font_size,
          },
          ticks: {
            min: 0,
            max: 100,
          },
        },
      ],
      xAxes: [
        {
          type: 'category',
          labels: ['Male professors', 'Female professors'],
          ticks: {
            fontSize: isMobile() ? 12 : font_size,
          },
        },
      ],
    },
  },
});

if (isMobile()) {
  myBarChart.canvas.style = 'height:400px';
  myBarChart.options.maintainAspectRatio = false;
  myBarChart.update();
}
