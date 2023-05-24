const expenses_labels = [2020, 2021, 2022, 2023];

///OFFICERS
const officer_options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      max: 450,
      step: 100,
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          let val = value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          });
          return val;
        },
      },
      title: {
        display: true,
        text: 'Campaign spending',
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          let val = tooltipItem.raw.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
          return tooltipItem.dataset.label + ': ' + val;
        },
      },
    },
    title: {
      display: true,
      text: 'Average spending per campaign for officer positions',
    },
  },
};

const officer_labels = [
  'External vice president',
  'General representative',
  'Internal vice president',
  'International student representative',
  'President',
  'Transfer student representative',
];
const officer_data = [
  [283.855, 11.83, 137.82, 205.92],
  [67.18111111111111, 14.179166666666669, 222.046, 167.41181818181818],
  [408.975, 25.545, 88.425, 350.23],
  [71.13333333333334, 1.09, 0.0, 0.0],
  [257.002, 35.7725, 231.37, 202.466],
  [48.903333333333336, 45.355000000000004, 0.0, 255.67],
];

const officer_colors = [
  '#FFD200',
  '#C69214',
  '#f29813',
  '#734909',
  '#F5E691',
  '#F56F11',
];

let officer_datasets = [];
for (let i = 0; i < officer_labels.length; ++i) {
  office = {
    label: officer_labels[i],
    data: officer_data[i],
    backgroundColor: officer_colors[i],
    borderColor: officer_colors[i],
    borderWidth: 2,
  };
  officer_datasets.push(office);
}

const officers_data = {
  labels: expenses_labels,
  datasets: officer_datasets,
};

const ctx_officers = document.getElementById('officers-chart');
const officersChart = new Chart(ctx_officers, {
  type: 'line',
  data: officers_data,
  options: officer_options,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  officersChart.canvas.style = 'max-height:500px';
  officersChart.options.maintainAspectRatio = false;
  officersChart.update();
}

//// Commissioners
const commissioner_options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      max: 450,
      step: 100,
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          let val = value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          });
          return val;
        },
      },
      title: {
        display: true,
        text: 'Campaign spending',
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          let val = tooltipItem.raw.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
          return tooltipItem.dataset.label + ': ' + val;
        },
      },
    },
    title: {
      display: true,
      text: 'Average spending per campaign for commissioner positions',
    },
  },
};

const commissioner_labels = [
  'Academic affairs commissioner',
  'Campus events commissioner',
  'Community service commissioner',
  'Cultural affairs commissioner',
  'Facilities commissioner',
  'Financial supports commissioner',
  'Student wellness commissioner',
];
const commissioner_data = [
  [180.64, 30.540000000000003, 314.14, 97.99],
  [0.0, 0.0, 141.245, 41.06],
  [0.0, 0.0, 0.0, 28.48],
  [123.52, 50.0, 71.24, 75.56],
  [234.835, 25.545, 100.0, 149.27333333333334],
  [0.0, 0.545, 273.78499999999997, 139.76],
  [0.0, 57.36333333333334, 73.24, 269.72],
];

const commissioner_colors = [
  '#2774AE',
  '#AED6F1',
  '#1B517A',
  '#85BAFF',
  '#37A5FA',
  '#7ce8ff',
  '#0D223D',
];

let commissioner_datasets = [];
for (let i = 0; i < commissioner_labels.length; ++i) {
  office = {
    label: commissioner_labels[i],
    data: commissioner_data[i],
    backgroundColor: commissioner_colors[i],
    borderColor: commissioner_colors[i],
    borderWidth: 2,
  };
  commissioner_datasets.push(office);
}

const commissioners_data = {
  labels: expenses_labels,
  datasets: commissioner_datasets,
};

const ctx_commissioners = document.getElementById('commissioners-chart');
const commissionersChart = new Chart(ctx_commissioners, {
  type: 'line',
  data: commissioners_data,
  options: commissioner_options,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  commissionersChart.canvas.style = 'max-height:500px';
  commissionersChart.options.maintainAspectRatio = false;
  commissionersChart.update();
}
