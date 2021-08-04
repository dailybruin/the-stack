new Chart(document.getElementById('before-covid-pie-chart'), {
  type: 'pie',
  data: {
    labels: ['Letter Grades', 'Pass/No Pass'],
    datasets: [
      {
        label: 'Before',
        backgroundColor: ['#77b1d2', '#CFCFC4'],
        data: [153028, 7781],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'During On-Campus Learning',
      fontSize: 19,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          let count =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return (
            label +
            ': ' +
            count.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })
          );
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          val = value / (153028 + 7781);
          return val.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
        },
        font: {
          size: 16,
        },
        anchor: 'end',
        clamp: true,
        align: 'start',
      },
    },
  },
});

new Chart(document.getElementById('after-covid-pie-chart'), {
  type: 'pie',
  data: {
    labels: ['Letter Grades', 'Pass/No Pass'],
    datasets: [
      {
        label: 'After',
        backgroundColor: ['#77b1d2', '#CFCFC4'],
        data: [156343, 12780],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'During Online Learning',
      fontSize: 19,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          let count =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return (
            label +
            ': ' +
            count.toLocaleString('en-US', {
              maximumFractionDigits: 2,
            })
          );
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          val = value / (156343 + 12780);
          return val.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
        },
        font: {
          size: 16,
        },
        anchor: 'end',
        clamp: true,
        align: 'start',
      },
    },
  },
});
