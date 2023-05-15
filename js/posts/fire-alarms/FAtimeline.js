const ctz = document.getElementById('FAtimeline');
const FAtimeline = new Chart(ctz, {
  type: 'bar',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: '# of Fire Alarms',
        data: [531, 494, 478, 439, 575],
        backgroundColor: [
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
        ],
        borderColor: [
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
          'rgba(255, 188, 53, 0.8)',
        ],
        borderWidth: 1.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        onClick: null,
      },
    },
  },
});
