const numUndergrads = 32347;

function loadCSVData() {
  return new Promise(resolve => {
    d3.csv('/datasets/covid-model/curve_data.csv').then(function(csv) {
      resolve(csv);
    });
  });
}

async function initChart() {
  let r0_vals = [1, 2, 2.5, 3, 4, 5.7];
  let colors = [
    '#374c80',
    '#7a5195',
    '#bc5090',
    '#ef5675',
    '#ff764a',
    '#ffa600',
  ];
  let csv = await loadCSVData();

  let data = {
    labels: [],
    datasets: [],
  };

  for (let i = 0; i < SIMULATION_WEEKS; i++) {
    data.labels.push(i);
  }

  //total ucla undergrads
  let benchmark = {
    label: 'Total Undergrads',
    data: [],
    fill: false,
    backgroundColor: 'gray',
    borderColor: 'gray',
  };
  for (let i = 0; i < SIMULATION_WEEKS; i++) {
    benchmark.data.push(numUndergrads);
  }

  data.datasets.push(benchmark);

  for (let i = 0; i < r0_vals.length; i++) {
    let ds = [];
    for (let j = i * SIMULATION_WEEKS; j < SIMULATION_WEEKS * (i + 1); j++) {
      ds.push(csv[j].total_cases);
    }
    data.datasets.push({
      label: 'R0 = ' + r0_vals[i],
      data: ds,
      fill: false,
      backgroundColor: colors[i],
      borderColor: colors[i],
    });
  }

  let options = {
    title: {
      display: true,
      text: 'Total Projected COVID-19 Cases Over Fall Quarter',
    },
    tooltips: {
      // mode: 'index',
      // intersect: false,
      callbacks: {
        title: function(tooltipItem) {
          if (tooltipItem[0].xLabel === '11') {
            return 'Finals Week';
          } else {
            return 'Week ' + tooltipItem[0].xLabel;
          }
        },
        label: function(tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label;
          if (label === 'Total Undergrads') {
            label += '   ' + tooltipItem.yLabel.toLocaleString('en-US');
          } else {
            label +=
              '   ' +
              tooltipItem.yLabel.toLocaleString('en-US', {
                maximumFractionDigits: 0,
              }) +
              ' total cases';
          }

          return label;
        },
      },
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Week of Fall Quarter',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value.toLocaleString('en-US', {
                maximumFractionDigits: 0,
              });
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Total COVID-19 Cases',
          },
        },
      ],
    },
    legend: {
      display: true,
      position: 'left',
    },
  };

  let ctx = document.getElementById('linechart');
  var linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });

  Chart.defaults.global.defaultFontFamily = 'Roboto';
  Chart.defaults.global.defaultFontSize = 15;
  Chart.defaults.global.defaultFontColor = '#777';

  let x = window.matchMedia('(max-width: 480px)');
  if (x.matches) {
    linechart.canvas.parentNode.style.width = '340px';
    linechart.options.legend = {
      display: false,
    };
    linechart.options.scales.yAxes = [
      {
        scaleLabel: {
          display: false,
        },
      },
    ];

    color_codes = {
      '1': '#374C80',
      '2': '#7A5195',
      '2.5': '#BC5090',
      '3': '#EF5675',
      '4': '#FF764A',
      '5.7': '#FFA600',
      'total': 'gray'
    }

    Object.keys(color_codes).forEach(function(key) {
      document.getElementById(key).style.borderColor = color_codes[key];
  });
  } else {
    linechart.canvas.parentNode.style.width = '1000px';
    document.getElementById('custom-legend').style.display = 'none';
    document.getElementsByClassName('legend-marker').style.display = 'none';
    document.getElementsByClassName('legend-label').style.display = 'none';
  }
}

initChart();
