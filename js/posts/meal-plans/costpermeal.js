Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';
const ctxt = document.getElementById('costGraph');
const costGraph = new Chart(ctxt, {
  type: 'bar',
  data: {
    labels: ['11R', '11P', '14R', '14P', '19R', '19P'],
    datasets: [
      {
        label: 'Cost per meal',
        data: [13.32, 14.32, 11.71, 12.72, 8.89, 9.89],
        backgroundColor: ['#AED6F1'],
      },
      {
        label: 'Adjusted cost per meal',
        data: [13.77, 16.11, 12.24, 13.73, 9.3, 10.89],
        backgroundColor: ['#4B8BD0'],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cost per meal',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        onClick: null,
        title: {
          display: false,
          text: 'Costs per meal',
        },
      },
    },
  },
});
