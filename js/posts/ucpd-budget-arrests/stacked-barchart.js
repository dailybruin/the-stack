//
//d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChart);
let StackedBar;
function makeChart(csvData) {
  //console.log(csvData);

  let data = {
    labels: [
      'FY 12-13',
      'FY 13-14',
      'FY 14-15',
      ' FY 15-16',
      'FY 16-17',
      'FY 17-18',
      'FY 18-19',
      'FY 19-20 (Approved but not actual)',
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

// if (window.matchMedia('(max-width: 480px)').matches) {
//   stacked_bar.canvas.style = 'min-height: 200px, max-height:400px,';
//   stacked_bar.options.maintainAspectRatio = false;
//   stacked_bar.update();
// }
// else{
//   stacked_bar.canvas.style = 'height: 500px, max-width: 55%';
//   stacked_bar.options.maintainAspectRatio = false;
//   stacked_bar.update();
// }
}