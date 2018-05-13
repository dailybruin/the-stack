const fun = document.getElementById("fun").getContext('2d');
const mike = document.getElementById("mike").getContext('2d');
const dustin = document.getElementById("dustin").getContext('2d');
const ashley = document.getElementById("ashley").getContext('2d');

new Chart(ashley, {
  type: 'bar',
  data: {
    labels: ['Number of times I expect "online first" to be said next year'],
    datasets: [{
      label: 'Number of times I expect "online first" to be said next year',
      data: [10000000000],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new Chart(fun, {
  type: 'bar',
  data: {
    labels: ["Fun"],
    datasets: [{
      label: 'Amount of online fun we had this year',
      data: [1],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Amount of online fun we\'ll have next year',
      data: [5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    },
  ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new Chart(mike, {
  type: 'bar',
  data: {
    labels: [""],
    datasets: [{
      label: '# of Mike Zhangs that applied to be Main Site Director',
      data: [1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
      ],
      borderWidth: 1
  }]
},
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

new Chart(dustin, {
  type: 'doughnut',
  data: {
    labels: ["# of Internal Tools that will be renamed to animal sounds next year"],
    datasets: [{
      label: '# of Internal Tools that will be renamed to animal sounds next year',
      data: [1],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    tooltips: {
      callbacks: {
        label (tooltipItem, data) {
          // get the concerned dataset
          const dataset = data.datasets[tooltipItem.datasetIndex];
          // calculate the total of this data set
          const total = dataset.data.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue);
          // get the current items value
          const currentValue = dataset.data[tooltipItem.index];
          // calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
          const precentage = Math.floor(((currentValue / total) * 100) + 0.5);

          return `${precentage  }%`;
        }
      }
    }
  }
});
