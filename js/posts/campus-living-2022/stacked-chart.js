//Chart.register(ChartDataLabels);
Chart.defaults.font.size = 14;
Chart.defaults.font.family = 'PT Sans';
Chart.defaults.color = '#000';

const totals = ['$19,565', '$14,341', '$14,426'];
const ctxStacked = document.getElementById('stacked-chart');
const dataStacked = {
  labels: [
    'On-campus dorms',
    'University apartments',
    'Non-university apartments',
  ],
  datasets: [
    {
      label: 'Room/rent',
      backgroundColor: '#94D8FB',
      data: [13080, 10472, 9594],
    },
    {
      label: 'Food',
      backgroundColor: '#4B8BD0',
      data: [5850, 2789, 2789],
    },
    {
      label: 'Transportation',
      backgroundColor: '#ACDE7E',
      data: [635, 1080, 1080],
    },
    {
      label: 'Utilities',
      backgroundColor: '#FFDF16',
      data: [null, null, 963],
    },
  ],
};
const config = {
  type: 'bar',
  data: dataStacked,
  options: {
    //All of your options should be between this bracket and...
    plugins: {
      title: {
        display: true,
        text: 'Total estimated yearly living costs',
        font: {
          size: 27,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem, data) {
            return `${tooltipItem.dataset.label}: $${
              tooltipItem.formattedValue
            }`;
          },
          beforeBody: function(tooltipItem) {
            index = tooltipItem[0].parsed.x;
            return 'Total: ' + totals[index];
          },
          //   footer: (tooltipItems, data) => {
          //     let total = tooltipItems.reduce(
          //       (a, e) => a + parseInt(e.yLabel),
          //       0
          //     );
          //     return 'Total: ' + total;
          //   },
        },
      },
      // datalabels: {
      //   display: true,
      //   align: 'top',
      //   anchor: 'end',
      //   formatter: (value, context) => {
      //     const datasetArray = [];
      //     context.chart.data.datasets.forEach(dataset => {
      //       //console.log(dataset.data[context.dataIndex]);
      //       if (dataset.data[context.dataIndex] != undefined) {
      //         datasetArray.push(dataset.data[context.dataIndex]);
      //       }
      //     });

      //     function totalSum(total, datapoint) {
      //       return total + datapoint;
      //     }

      //     let sum = datasetArray.reduce(totalSum, 0);

      //     if (context.datasetIndex === datasetArray.length - 1) {
      //       return '$' + sum;
      //     } else {
      //       return '';
      //     }
      //   },
      // },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: function(value, index, ticks) {
            return '$' + value;
          },
        },
      },
    }, //this bracket
    responsive: true,
    maintainAspectRatio: false,
  },
};
// render init block
const myChart = new Chart(ctxStacked, config);

if (window.matchMedia('(max-width: 480px)').matches) {
  myChart.canvas.style = 'max-height:450px';
  myChart.options.maintainAspectRatio = false;
  myChart.update();
}
