d3.csv('/datasets/ucpd-budget-arrests/ucla-pd-budget.csv').then(makeChart);

function makeChart(csvData) {
  console.log(csvData);

  let data = {
    labels: [
      'FY 12-13',
      'FY 13-14',
      'FY 14-15',
      'FY 15-16',
      'FY 16-17',
      'FY 17-18',
      'FY 18-19',
      'FY 19-20 (Approved but not actual)',
    ],
    datasets: [],
  };

  let colors = [
    'green',
    'peachpuff',
    'pink',
    'lightcoral',
    'lavender',
    'gold',
    'thistle',
    'orchid',
  ];

  for (let i = 0; i < 3; i++) {
    data.datasets.push({
      label: csvData[i].Category,
      data: Object.values(csvData[i]).slice(1),
      backgroundColor: colors[i + 3],
      borderColor: colors[i + 3],
    });
  }

  let options = {
    title: {
      display: true,
      text: 'UCPD Revenue',
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

  let ctx = document.getElementById('barchart-revenue');
  let stackedBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
}
