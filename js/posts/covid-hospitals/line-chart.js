$('input[type="range"]').rangeslider();

// CONSTANTS
var timeLabels = ['6 months', '12 months', '18 months'];
var colorCodes = {
  ugrad: '#fc8d59',
  grad: '#fdd49e',
  total: '#990000',
  tot: null,
  tot_hos: '#3C0919CC',
  tot_icu: '#FF2C5580',
}; //TODO: Or pick better colors?
var borderDash = [5, 10];
var availableBeds = {
  Hospital: {
    total: 234,
  },
  ICU: {
    total: 120,
  },
};
var bedRatios = {
  Hospital: {
    six: 0.01368653925,
    twelve: 0.00684326963,
    eighteen: 0.00446333323,
  },
  ICU: {
    six: 0.00289110203,
    twelve: 0.00144586851,
    eighteen: 0.00094295772,
  },
};
var population = {
  ugrad: 31453,
  grad: 12828,
  total: 44281,
};
var maxScale = {
  Hospital: 650,
  ICU: 150,
};

// HELPER FUNCTIONS
function display_slider_value(value) {
  document.getElementById('percentage-num').innerHTML = value + '%';
}

function projected_figures(student_type, value, bed_type) {
  var cur_infected = (population[student_type] * value) / 100;
  return [
    Math.round(cur_infected * bedRatios[bed_type]['six']),
    Math.round(cur_infected * bedRatios[bed_type]['twelve']),
    Math.round(cur_infected * bedRatios[bed_type]['eighteen']),
  ];
}

// DEFAULT CHART
let lineChart = new Chart(document.getElementById('line-chart'), {
  type: 'line',
  data: {
    datasets: [
      {
        data: projected_figures('total', 50, 'Hospital'),
        label: 'Total Students Needing Hospital Beds',
        borderColor: colorCodes['total'],
        pointRadius: 5,
        fill: false,
      },
      {
        data: projected_figures('ugrad', 50, 'Hospital'),
        label: 'Undergraduate Students Needing Hospital Beds',
        borderColor: colorCodes['ugrad'],
        pointRadius: 5,
        fill: false,
      },
      {
        data: projected_figures('grad', 50, 'Hospital'),
        label: 'Graduate Students Needing Hospital Beds',
        borderColor: colorCodes['grad'],
        pointRadius: 5,
        fill: false,
      },
      {
        data: Array(timeLabels.length).fill(availableBeds['Hospital'].total),
        label: 'Hospital Beds',
        borderColor: colorCodes['tot_hos'],
        borderDash: borderDash,
        pointRadius: 0,
        fill: false,
      },
    ],
  },
  options: {
    animation: {
      duration: 0,
    },
    title: {
      display: true,
      text:
        'Hypothetical Beds needed by UCLA Students at Ronald Reagan Medical Center',
    },
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: timeLabels,
          scaleLabel: {
            display: true,
            labelString: 'Time into the future',
          },
          display: true,
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Number of Beds',
          },
          ticks: {
            min: 0,
            max: 650,
          },
        },
      ],
    },
    legend: {
      position: 'left',
    },
  },
});

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
lineChart.canvas.parentNode.style.width = '900px';

var current_bed_type = 'Hospital';
var current_percentage = 50;

function update_line_chart(percentage, bed_type) {
  if (bed_type != null)
    bed_type ? (current_bed_type = 'ICU') : (current_bed_type = 'Hospital');

  if (percentage != null) current_percentage = percentage;

  lineChart.data.datasets = [
    {
      data: projected_figures('total', current_percentage, current_bed_type),
      label: 'Total Students Needing ' + current_bed_type + ' Beds',
      borderColor: colorCodes['total'],
      pointRadius: 5,
      fill: false,
    },
    {
      data: projected_figures('ugrad', current_percentage, current_bed_type),
      label: 'Undergraduate Students Needing ' + current_bed_type + ' Beds',
      borderColor: colorCodes['ugrad'],
      pointRadius: 5,
      fill: false,
    },
    {
      data: projected_figures('grad', current_percentage, current_bed_type),
      label: 'Graduate Students Needing ' + current_bed_type + ' Beds',
      borderColor: colorCodes['grad'],
      pointRadius: 5,
      fill: false,
    },
    {
      data: Array(timeLabels.length).fill(
        availableBeds[current_bed_type].total
      ),
      label: current_bed_type + ' Beds',
      borderColor: colorCodes['tot_hos'],
      borderDash: borderDash,
      pointRadius: 0,
      fill: false,
    },
  ];

  lineChart.update();
}

// Make charts responsive
var x = window.matchMedia('(max-width: 480px)');
make_responsive(x);

function make_responsive(x) {
  if (x.matches) {
    Chart.defaults.global.responsive = false;
    Chart.defaults.global.maintainAspectRatio = false;
    lineChart.canvas.parentNode.style.width = '340px';
    lineChart.options.legend = {
      display: false,
      position: 'top',
    };
    (lineChart.options.scales = {
      xAxes: [
        {
          type: 'category',
          labels: timeLabels,
          scaleLabel: {
            display: false,
          },
          display: true,
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          ticks: {
            min: 0,
            max: 600,
          },
        },
      ],
    }),
      lineChart.update();
  }

  update_legend(false);
}

function update_legend(bed_type) {
  if (x.matches) {
    if (bed_type != null)
      bed_type ? (current_bed_type = 'ICU') : (current_bed_type = 'Hospital');

    document.getElementById('total').innerHTML =
      'Total Students Needing ' + current_bed_type + ' Beds';
    document.getElementById('ugrad').innerHTML =
      'Undergrad Students Needing ' + current_bed_type + ' Beds';
    document.getElementById('grad').innerHTML =
      'Graduate Students Needing ' + current_bed_type + ' Beds';
    document.getElementById('tot').innerHTML = current_bed_type + ' Beds';

    document.getElementById('m-total').style.borderColor = colorCodes['total'];
    document.getElementById('m-ugrad').style.borderColor = colorCodes['ugrad'];
    document.getElementById('m-grad').style.borderColor = colorCodes['grad'];
    document.getElementById('m-tot').style.borderColor = colorCodes['tot_hos'];
    document.getElementById('m-tot').style.borderStyle = 'dashed';
  }
}
