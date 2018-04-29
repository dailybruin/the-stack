let ctx = document.getElementById('chart');

const purchaseCategories = [
  'T-Shirts',
  'Flyers',
  'Signboard',
  'Credit Card Holders',
  'Website',
  'Bottle Openers',
  'Stickers',
  'Water Bottles',
  'Single Use Coffee Cups',
  'Candidate Clothing',
  'Mood Cups',
];

const colors = [
  '#a6cee3',
  '#1f78b4',
  '#b2df8a',
  '#33a02c',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#ffff99',
];

const datasets = [];

let i = 0;
for (category of purchaseCategories) {
  const datum = {
    label: category,
    data: candidates.map(candidate => {
      const x = candidate.allocation.find(
        purchase => purchase.description === category
      );
      if (x) {
        return x.amount;
      }
    }),
    backgroundColor: colors[i++],
  };
  datasets.push(datum);
}

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: candidates.map(candidate => candidate.name),
    datasets,
  },
  options: {
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label (tooltipItem, data) {
          return `${
            data.datasets[tooltipItem.datasetIndex].label
            }: $${tooltipItem.yLabel.toFixed(2)}`;
        },
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: {
            autoSkip: false,
          },
        },
      ],
      yAxes: [{ stacked: true }],
    },
  },
});
