Chart.defaults.font.size = 15;
Chart.defaults.font.family = 'PT Sans';

const ctxt = document.getElementById('yearGraph');
const yearGraph = new Chart(ctxt, {
  type: 'bar',
  data: {
    labels: ['Class of 25', 'Class of 26', 'Class of 27'],
    datasets: [
      {
        label: 'Number of Posts Made',
        data: [64, 162, 159],
        backgroundColor: ['#AED6F1', '#AED6F1', '#AED6F1', '#AED6F1'],
        borderColor: ['#AED6F1', '#AED6F1', '#AED6F1', '#AED6F1'],
        borderWidth: 1.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Posts',
        },
        legend: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        onClick: null,
        title: {
          display: true,
          text: 'How many posts were made in each Snapchat class group?',
          font: {
            size: 22,
            weight: 'bold', // Add this line
          },
        },
        legend: {
          display: false,
        },
      },
    },
  },
});

// if (window.matchMedia('(max-width: 480px)').matches) {
//   yearGraph.canvas.style = 'max-height:450px';
//   yearGraph.options.maintainAspectRatio = false;
//   yearGraph.update();
// }

// if (window.matchMedia('(min-width: 480px)').matches) {
//   // yearGraph.canvas.style = 'height:600px';
//   yearGraph.canvas.style = 'max-height:600px';
//   yearGraph.options.maintainAspectRatio = false;
//   yearGraph.update();
// }
