//
//d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChart);
let StackedBar;
function makeChart(csvData) {
  //console.log(csvData);

  let data = {
    labels: [
      '12-13',
      '13-14',
      '14-15',
      '15-16',
      '16-17',
      '17-18',
      '18-19',
      '19-20*',
    ],
    datasets: [],
  };

  let colors = [
    '#FF8311',
    '#2A3C6A',
    '#A1C7F3',
    '#FFBA35',
    '#835FA8',
    '#EB548C',
    '#4B13B1',
    '#3FBBFF',
  ];

  for (let i = 4; i < 12; i++) {
    data.datasets.push({
      label: csvData[i].Category,
      data: Object.values(csvData[i]).slice(1),
      backgroundColor: colors[i - 4],
      borderColor: colors[i - 4],
    });
  }

  let options = {
    title: {
      display: true,
      text: 'UCPD Budget',
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            callback: function(value) {
                return value.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                }); // convert value to dollar format
            },
            // min: 0,
            // max: 700,
            // stepSize: 100,
        },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          let value = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
          let label = data.datasets[tooltipItem.datasetIndex].label;
          return label + ': ' + value;
        },
      },
    },
  };

  let ctxBudgetBar = document.getElementById('stacked_bar');
  StackedBar = new Chart(ctxBudgetBar, {
    type: 'bar',
    data: data,
    options: options,
  });

  if (window.matchMedia('(max-width: 480px)').matches) {
    StackedBar.canvas.style = 'max-height:500px';
    StackedBar.options.maintainAspectRatio = false;
    StackedBar.update();
  }
}

