Chart.defaults.font.family = 'PT Sans'  //FONT FOR CHART CHANGE IF NEEDED
const colors = ['#000000']
const data = {
  default: {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: colors[0],
      borderColor: colors[0],
      borderWidth: 1
    }]
  },
  agc: {
    labels: ['Chi Alpha Delta','Omega Sigma Tau','Theta Kappa Phi'],
    datasets: [{
      data: [3.50, 3.22, 3.38],
      backgroundColor: ['#dac3fc', '#b9e7e3', '#f0cfd8'],
      borderColor: colors[0],
      borderWidth: 1
    }],
  },
  ic: {
    labels: ['Alpha Epsilon Pi', 'Alpha Gamma Omega', 'Beta Theta Pi', 'Delta Sigma Pi', 'Delta Tau Delta',
             'Kappa Sigma', 'Lambda Chi Alpha', 'Phi Kappa Psi', 'Sigma Alpha Epsilon', 'Sigma Chi', 'Sigma Nu',
             'Sigma Phi Epsilon', 'Sigma Pi', 'Theta Chi', 'Theta Delta Chi', 'Theta Xi', 'Zeta Beta Tau'],
    datasets: [{
      data: [3.70, 3.58, 3.61, 3.37, 2.73, 3.52, 3.57, 3.65, 3.61, 3.57, 3.69, 3.71, 3.48, 3.69, 3.37, 3.59, 3.52],
      backgroundColor: ['#00329c', '#292c5e', '#002f69', '#2f0466', '#463072', '#275635', '#fdb939', '#a2232c',
                        '#674a8c', '#012b48', '#816a4b', '#572e4f', '#3e3a5d', '#a2221a', '#3d76b0', '#29577e', '#011421'],
      borderColor: colors[0],
      borderWidth: 1
    }]
  },
  lgc: {
    labels: ['Gamma Zeta Alpha Fraternity Inc.', 'Lambda Theta Alpha Sorority Inc.', 'Lambda Theta Nu Sorority Inc.',
             'Lambda Upsilon Lambda Fraternity Inc.', 'Nu Alpha Kappa Fraternity Inc.', 'Phi Lambda Rho Sorority Inc.',
             'Sigma Lambda Beta Fraternity Inc.', 'Sigma Lambda Gamma Sorority Inc.'],
    datasets: [{
      data: [3.07, 3.25, 3.36, 3.25, 3.21, 3.36, 3.10, 3.07],
      backgroundColor: ['#262a2b', '#630931', '#5f161f', '#482205', '#c11f2a', '#145a35', '#592d80', '#d42179'],
      borderColor: colors[0],
      borderWidth: 1
    }]
  },
  migc: {
    labels: ['Alpha Epsilon Omega - Armenian Fraternity', 'Alpha Gamma Alpha - Armenian Sorority',
             'Beta Delta Alpha - Arab-Interest Fraternity', 'Chi Delta Theta - Asian Interest Sorority',
             'Kappa Psi Epsilon - Multi-cultural Sorority', 'Sigma Alpha Zeta - Multi-cultural Sorority',
             'Sigma Delta Sigma - Multi-cultural Sorority', 'Sigma Pi Beta - Persian Fraternity',
             'Sigma Pi Sigma Psi - Persian Sorority', 'Zeta Phi Rho - Multi-cultural Fraternity'],
    datasets: [{
      data: [3.60, 3.73, 3.63, 3.56, 3.60, 3.07, 3.81, 3.55, 3.79, 3.10],
      backgroundColor: ['#00036c', '#f3d1db', '#165a38', '#979b9e', '#70211d', '#225c1e', '#9451a9', '#000000', '#fa8d8e', '#1f346f'],
      borderColor: colors[0],
      borderWidth: 1
    }]
  },
  nphc: {
    labels: ['Alpha Kappa Alpha Sorority Inc.', 'Alpha Phi Alpha Fraternity Inc.', 'Delta Sigma Theta Sorority Inc.',
             'Kappa Alpha Psi Fraternity Inc.', 'Phi Beta Sigma Fraternity Inc.', 'Sigma Gamma Rho Sorority Inc.',
             'Zeta Phi Beta Sorority Inc.'],
    datasets: [{
      data: [3.50, 3.37, 3.28, 2.80, 3.01, 3.21, 3.53],
      backgroundColor: ['#ec969d', '#c08d36', '#a5453f', '#780d00', '#1961a8', '#d0a331', '#15468a'],
      borderColor: colors[0],
      borderWidth: 1
    }]
  },
  pc: {
    labels: ['Alpha Chi Omega', 'Alpha Delta Pi', 'Alpha Phi', 'Chi Omega', 'Delta Gamma', 'Gamma Phi Beta',
             'Kappa Alpha Theta', 'Kappa Delta', 'Kappa Kappa Gamma', 'Phi Sigma Rho', 'Pi Beta Phi'],
    datasets: [{
      data: [3.53, 3.66, 3.73, 3.70, 3.74, 3.71, 3.75, 3.62, 3.73, 3.58, 3.70],
      backgroundColor: ['#d34847', '#68b1e5', '#7a223d', '#cc2d2e', '#ab8856', '#f5b3ab', '#000000', '#929d65',
                        '#2798d2', '#8d2b44', '#a7bcd5'],
      borderColor: colors[0],
      borderWidth: 1
    }]
  }
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 4.0,
      title:{
        display: true,
        text: 'End of Year Cumulative GPA'
    }
    }
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}

const ctxBAR = document.getElementById('gpa-bars');

const chart = new Chart(ctxBAR, {
    type: 'bar',
    data: data.default,
    options: options
  });

function updateChart(datasetName) {
    const newDataset = data[datasetName];
    chart.data.labels = newDataset.labels;
    chart.data.datasets[0] = newDataset.datasets[0];
    chart.update();
}

document.getElementById('datasetSelect').addEventListener('change', function(event) {
    updateChart(event.target.value);  // Call updateChart with selected dataset
});