// CONSTANTS
var timeLabels = ['6 months', '12 months', '18 months'];
var colorCodes = {
  ugrad: '#3e95cd',
  grad: '#8e5ea2',
  tot_hos: '#3C0919CC',
  tot_icu: '#FF2C5580',
}; //TODO: Or pick better colors?
var borderDash = [5, 20];
var availableBeds = {
  general_acute: {
    total: 234,
  },
  icu: {
    total: 120,
  },
};
var UCLA_UGRAD_POP = 31453;
var UCLA_GRAD_POP = 12828;
var SIX_MONTH_RATIO = 0.01368653925;
var TWELVE_MONTH_RATIO = 0.00684326963;
var EIGHTEEN_MONTH_RATIO = 0.00446333323;

// HELPER FUNCTIONS
function display_slider_value(value) {
  document.getElementById('slider-display').innerHTML =
    value + '% of UCLA infected';
}

function projected_figures(student_type, value) {
  var cur_infected;
  if (student_type == 'ugrad') cur_infected = (UCLA_UGRAD_POP * value) / 100;
  else cur_infected = (UCLA_GRAD_POP * value) / 100;
  return [
    Math.round(cur_infected * SIX_MONTH_RATIO),
    Math.round(cur_infected * TWELVE_MONTH_RATIO),
    Math.round(cur_infected * EIGHTEEN_MONTH_RATIO),
  ];
}

// CHART
let lineChart = new Chart(document.getElementById('line-chart'), {
  type: 'line',
  data: {
    datasets: [
      {
        data: projected_figures('ugrad', 50),
        label: 'Undergraduate Students Needing Hospital Beds',
        borderColor: colorCodes['ugrad'],
        pointRadius: 5,
        fill: false,
      },
      {
        data: projected_figures('grad', 50),
        label: 'Graduate Students Needing Hospital Beds',
        borderColor: colorCodes['grad'],
        pointRadius: 5,
        fill: false,
      },
      {
        data: Array(timeLabels.length).fill(
          availableBeds['general_acute'].total
        ),
        label: 'General Acute Beds',
        borderColor: colorCodes['pot_hos'],
        borderDash: borderDash,
        pointRadius: 0,
        fill: false,
      },
      {
        data: Array(timeLabels.length).fill(availableBeds['icu'].total),
        label: 'ICU Beds',
        borderColor: colorCodes['tot_icu'],
        borderDash: borderDash,
        pointRadius: 0,
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Hypothetical Hospital and ICU Beds needed by UCLA Students', //TODO: or better naming
    },
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: timeLabels,
          scaleLabel: {
            display: false,
            labelString: 'Time into the future', //TODO: or better naming
          },
          display: true,
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 450,
          },
        },
      ],
    },
    legend: {
      align: 'center',
      position: 'right',
    },
  },
});

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
lineChart.canvas.parentNode.style.width = '900px';

function update_line_chart(value) {
  lineChart.data.datasets = [
    {
      data: projected_figures('ugrad', value),
      label: 'Undergraduate Students Needing Hospital Beds',
      borderColor: colorCodes['ugrad'],
      pointRadius: 5,
      fill: false,
    },
    {
      data: projected_figures('grad', value), //dummy numbers
      label: 'Graduate Students Needing Hospital Beds',
      borderColor: colorCodes['grad'],
      pointRadius: 5,
      fill: false,
    },
    {
      data: Array(timeLabels.length).fill(availableBeds['general_acute'].total),
      label: 'General Acute Beds',
      borderColor: colorCodes['tot_hos'],
      borderDash: borderDash,
      pointRadius: 0,
      fill: false,
    },
    {
      data: Array(timeLabels.length).fill(availableBeds['icu'].total),
      label: 'ICU Beds',
      borderColor: colorCodes['tot_icu'],
      borderDash: borderDash,
      pointRadius: 0,
      fill: false,
    },
  ];

  lineChart.update();
}
