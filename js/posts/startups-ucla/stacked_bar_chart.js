//Chart.register(ChartDataLabels);
Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';
Chart.defaults.color = '#000';

const totals = ['21', '19', '10', '6', '2', '3', '6'];
const dataStacked = {
  labels: ['<1', '1', '2', '3', '4', '5', '>5'],
  datasets: [
    {
      label: '0-50K funding',
      backgroundColor: '#4B8BD0',
      data: [7, 14, 5, null, null, 1, null],
    },
    {
      label: '50K-1M funding',
      backgroundColor: '#94D8FB',
      data: [7, 2, 5, 2, null, null, 2],
    },
    {
      label: '1M+ funding',
      backgroundColor: '#ACDE7E',
      data: [7, 3, null, 4, 2, 2, 4],
    },
  ],
};
const config1 = {
  type: 'bar',
  data: dataStacked,
  options: {
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Startups',
        },
      },
      x: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Startup Duration (years)',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};
const ctxStacked = document.getElementById('stacked-chart');

const myChart = new Chart(ctxStacked, config1);

if (window.matchMedia('(max-width: 480px)').matches) {
  myChart.canvas.style = 'max-height:450px';
  myChart.options.maintainAspectRatio = false;
  myChart.update();
}

if (window.matchMedia('(min-width: 481px)').matches) {
  myChart.canvas.style = 'min-height:600px';
  myChart.canvas.style = 'max-height:600px';
  myChart.options.maintainAspectRatio = false;
  myChart.update();
}
