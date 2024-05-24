// document.addEventListener('DOMContentLoaded', function() {
// Chart.defaults.font.family = 'Noto Serif, serif'; // FONT FOR CHART CHANGE IF NEEDED
Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';
// Chart.defaults.color = '#000';

const data_wasted = {
  labels: ['19P', '19R', '14P', '14R', '11P', '11R'],
  datasets: [
    {
      data: [569.57, 242.87, 429.81, 230.8, 588.55, 162.9],
      backgroundColor: '#4B8BD0',
      borderColor: '#4B8BD0',
      borderWidth: 1,
    },
  ],
};

const options_wasted = {
  indexAxis: 'y', // Switches chart orientation to horizontal
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Average dollars wasted per person',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Meal plan',
      },
    },
  },
  plugins: {
    title: {
      display: false,
      text: 'How much money is wasted from uneaten meals?',
      font: {
        size: 22,
      },
    },
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const ctxBAR_wasted = document.getElementById('MONEY-WASTED');
const chart_wasted = new Chart(ctxBAR_wasted, {
  type: 'bar',
  data: data_wasted,
  options: options_wasted,
});

// if (window.matchMedia('(max-width: 480px)').matches) {
//   chart_wasted.canvas.style = 'max-height:450px';
//   chart_wasted.options.maintainAspectRatio = false;
//   chart_wasted.update();
// }

// if (window.matchMedia('(min-width: 481px)').matches) {
//   chart_wasted.canvas.style = 'min-height:600px';
//   chart_wasted.canvas.style = 'max-height:600px';
//   chart_wasted.options.maintainAspectRatio = false;
//   chart_wasted.update();
// }
// });
