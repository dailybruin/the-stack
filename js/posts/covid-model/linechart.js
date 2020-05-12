const numWeeks = 12;
const numUndergrads = 32347;

function loadCSVData(r) {
  return new Promise(resolve => {
    d3.csv('/datasets/covid-model/curve_data.csv').then(function(csv) {
      resolve(csv);
    });
  });
}

async function initChart() {
  let r0_vals = [1, 2, 3, 4, 5.7];
  let colors = ['#444e86', '#955196', '#dd5182', '#ff6e54', '#ffa600'];
  let csv = await loadCSVData();

  let data = {
    labels: [],
    datasets: [],
  };

  for (let i = 0; i < numWeeks - 1; i++) {
    data.labels.push(i);
  }
  data.labels.push('Finals');

  //total ucla undergrads
  let benchmark = {
    label: 'Total Undergrads',
    data: [],
    fill: false,
    backgroundColor: 'gray',
    borderColor: 'gray',
  };
  for (let i = 0; i < numWeeks; i++) {
    benchmark.data.push(numUndergrads);
  }

  data.datasets.push(benchmark);

  for (let i = 0; i < r0_vals.length; i++) {
    let ds = [];
    for (let j = i * numWeeks; j < numWeeks * (i + 1); j++) {
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
          if (tooltipItem[0].xLabel === 'Finals') {
            return 'Finals Week';
          } else {
            return 'Week ' + tooltipItem[0].xLabel;
          }
        },
        label: function(tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label;
          if (label === 'Total Undergrads') {
            label += ' - ' + tooltipItem.yLabel.toLocaleString('en-US');
          } else {
            label +=
              ' - ' +
              tooltipItem.yLabel.toLocaleString('en-US') +
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
                minimumFractionDigits: 0,
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
  };

  let ctx = document.getElementById('linechart');
  var linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
}

initChart();
