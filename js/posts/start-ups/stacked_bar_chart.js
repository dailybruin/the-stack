//Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.font.family = 'PT Sans';
Chart.defaults.color = '#000';

const totals = ['20', '19', '11', '6', '2', '3', '6'];
const ctxStacked = document.getElementById('stacked-chart');
const dataStacked = {
  labels: [
    '<1',
    '1',
    '2',
    '3',
    '4',
    '5',
    '>5',
  ],
  datasets: [
    {
      label: '0-50K funding',
      backgroundColor: '#4B8BD0',
      data: [6, 14, 6, null, null, 1, null],
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
const config = {
    type: 'bar',
    data: dataStacked,
    options: {
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: '# of Start-Ups'
                }
            },
            x: { 
                stacked: true,
                beginAtZero: true,
                title: {
                    display: true, 
                    text: 'Start-Up Duration (years)'
                }
            }
        },
        responsive: true, 
        maintainAspectRatio: false,
    }
};
const myChart = new Chart(ctxStacked, config);

if (window.matchMedia('(max-width: 480px)').matches) {
  myChart.canvas.style = 'max-height:450px';
  myChart.options.maintainAspectRatio = false;
  myChart.update();
}
