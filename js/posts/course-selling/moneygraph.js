Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';

Chart.defaults.font.family = 'Noto Serif, serif';
const labels = [
  'Fall 2022',
  'Winter 2023',
  'Spring 2023',
  'Fall 2023',
  'Winter 2024',
];
const acolors = ['#3D7E00', '#ABE8A1'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Mentions money',
      data: [80, 66.67, 71.19, 56.52, 69.17],
      backgroundColor: acolors[0],
      borderColor: acolors[0],
      borderWidth: 1,
    },
    {
      label: 'Does not mention money',
      data: [20, 33.33, 28.81, 43.48, 30.83],
      backgroundColor: acolors[1],
      borderColor: acolors[1],
      borderWidth: 1,
    },
  ],
};
const options = {
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Enrollment Period',
      },
      ticks: {
        font: {
          family: 'PT Sans', // Specify the font family here
        },
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Percentage of Posts',
      },
      ticks: {
        callback: function(value, index, values) {
          return value + '%'; // Append a percentage sign to the label
        },
        font: {
          family: 'PT Sans', // Specify the font family here
        },
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'How many Reddit Posts mention money?',
      font: {
        size: 22,
        weight: 'bold', // Add this line
      },
    },
  },
  maintainAspectRatio: false,
};
const moneyGraph = document.getElementById('moneyGraph');
const chart = new Chart(moneyGraph, {
  type: 'bar',
  data: data,
  options: options,
});

// if (window.matchMedia('(max-width: 480px)').matches) {
//   chart.canvas.style = 'max-height:450px';
//   chart.options.maintainAspectRatio = false;
//   chart.update();
// }

// if (window.matchMedia('(min-width: 480px)').matches) {
//   // chart.canvas.style = 'height:600px';
//   chart.canvas.style = 'max-height:600px';
//   chart.options.maintainAspectRatio = false;
//   chart.update();
// }
