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
    '#374c80',
    '#7a5195',
    '#bc5090',
    '#ef5675',
    '#ff764a',
    '#ffa600',
    'green',
    'blue',
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
        },
      ],
    },
  };

  let ctxBudgetBar = document.getElementById('stacked_bar');
  StackedBar = new Chart(ctxBudgetBar, {
    type: 'bar',
    data: data,
    options: options,
  });

  if (window.matchMedia('(max-width: 480px)').matches) {
    StackedBar.canvas.style = 'min-height:400px';
    StackedBar.options.maintainAspectRatio = false;
    StackedBar.update();
  }
}

