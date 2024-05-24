// document.addEventListener('DOMContentLoaded', function() {
// Data
Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';
// Chart.defaults.color = '#000';
const data_enrollment = {
  labels: ['11P', '11R', '14P', '14R', '19P', '19R'],
  datasets: [
    {
      data: [1530, 371, 5814, 938, 4199, 1584],
      backgroundColor: '#4B8BD0',
      borderColor: '#4B8BD0',
      borderWidth: 1,
    },
  ],
};

// Options
const options_enrollment = {
  indexAxis: 'y', // This will flip the chart to horizontal
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of students enrolled',
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
      text: '2023-2024 Meal plan enrollment',
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

// Chart initialization
const ctxBAR_a = document.getElementById('ENROLLMENT');
const chart_enrollment = new Chart(ctxBAR_a, {
  type: 'bar',
  data: data_enrollment,
  options: options_enrollment,
});

// Responsive adjustments
// if (window.matchMedia('(max-width: 480px)').matches) {
//     chart_enrollment.canvas.style = 'max-height:450px';
//     chart_enrollment.options.maintainAspectRatio = false;
//     chart_enrollment.update();
// }

// if (window.matchMedia('(min-width: 481px)').matches) {
//     chart_enrollment.canvas.style = 'min-height:600px';
//     chart_enrollment.canvas.style = 'max-height:600px';
//     chart_enrollment.options.maintainAspectRatio = false;
//     chart_enrollment.update();
// }
// });
