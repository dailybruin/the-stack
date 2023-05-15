const office_labels = [
  'Academic Affairs commissioner',
  'Campus Events commissioner',
  'Community Service commissioner',
  'Cultural Affairs commissioner',
  'External Vice President',
  'Facilities commissioner',
  'Financial Supports commissioner',
  'General representative',
  'Internal Vice President',
  'International Student representative',
  'President',
  'Student Wellness commissioner',
  'Transfer student representative',
];
const office_data = [
  [180.64, 30.540000000000003, 314.14, 97.99],
  [0.0, 0.0, 141.245, 41.06],
  [0.0, 0.0, 0.0, 28.48],
  [123.52, 50.0, 71.24, 75.56],
  [283.855, 11.83, 137.82, 205.92],
  [234.835, 25.545, 100.0, 149.27333333333334],
  [0.0, 0.545, 273.78499999999997, 139.76],
  [67.18111111111111, 14.179166666666669, 222.046, 167.41181818181818],
  [408.975, 25.545, 88.425, 350.23],
  [71.13333333333334, 1.09, 0.0, 0.0],
  [257.002, 35.7725, 231.37, 202.466],
  [0.0, 57.36333333333334, 73.24, 269.72],
  [48.903333333333336, 45.355000000000004, 0.0, 103.03000000000002],
];
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'pink',
  'cornflowerblue',
  'slateblue',
  'crimson',
  'darkseagreen',
  'darkorchid',
];

let office_datasets = [];
for (let i = 0; i < office_labels.length; ++i) {
  office = {
    label: office_labels[i],
    data: office_data[i],
    backgroundColor: colors[i],
    borderColor: colors[i],
    borderWidth: 1,
  };
  office_datasets.push(office);
}

const expenses_labels = [2020, 2021, 2022, 2023];
const expenses_data = {
  labels: expenses_labels,
  datasets: office_datasets,
};
const expenses_options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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
  },
};

const ctx_expenses = document.getElementById('expenses-chart');
const expensesChart = new Chart(ctx_expenses, {
  type: 'bar',
  data: expenses_data,
  options: expenses_options,
});
