// simple pie chart code imported from chart js
let ctxPie = document.getElementById('SwipesPieChart')
const pieData = {
  labels: [
  'The Study',
  'Rendezvous',
  'Bruin Cafe',
  'Bruin Bowl',
  'The Drey',
  'De Neve',
  'Epicuria',
  'B-Plate'],
  datasets: [
    {
      label: 'Swipes',
      backgroundColor: [
      'rgb(149, 163, 179)',
      'rgb(130, 9, 51)',
      'rgb(132, 90, 109)',
      'rgb(28, 93, 153)',
      'rgb(113, 124, 137)',
      'rgb(232, 141, 103)',
      'rgb(198, 174, 130)',
      'rgb(152, 149, 114)',
          ],
      data: [117463, 104091, 34326, 14579, 11108, 119835, 91102, 111026],
    },
  ],
};

const pieOptions = {
  plugins:{
    title: {
      display: true,
      text: '21-22 Meal Swipes',
      fontSize: 19,
    },
    tooltip:{
      callbacks: {
        label: function (tooltipItem, data) {
          let value = tooltipItem.label.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
          let label = pieData.datasets[tooltipItem.datasetIndex].label;
          return ' ' + value;
        },
      }
    }
  }
}
  
  // tooltips: {
  //   callbacks: {
  //     label: function (tooltipItem, data) {
  //       let label = data.labels[tooltipItem.index];
  //       let count =
  //         data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
  //       return (
  //         label +
  //         ': ' +
  //         count.toLocaleString('en-US', {
  //           maximumFractionDigits: 2,
  //         })
  //       );
  //     },
  //   },
  // },
  // plugins: {
  //   datalabels: {
  //     formatter: function (value, context) {
  //       val = value / (117463 + 104091 + 34326 + 14579 + 11108 + 119835 + 91102 + 111026);
  //       return val.toLocaleString('en-US', {
  //         style: 'percent',
  //         maximumFractionDigits: 2,
  //       });
  //     },
  //     font: {
  //       size: 16,
  //     },
  //     anchor: 'end',
  //     clamp: true,
  //     align: 'start',
  //   },
  // },

let pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: pieData,
  options: pieOptions
});


