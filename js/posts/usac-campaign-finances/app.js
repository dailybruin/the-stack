const ctx = document.getElementById('chart');

ctx.height = 300;


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

const barOptions = {

  tooltips: {
    enabled: true,
    mode: 'index',
    callbacks: {
      label(tooltipItem, data) {
        if (tooltipItem.xLabel) {
          return `${
            data.datasets[tooltipItem.datasetIndex].label
            }: $${tooltipItem.xLabel.toFixed(2)}`;
        }
        return '';
      },
      afterBody(tooltipItems, data) {
        const total = tooltipItems.reduce((accumulator, { xLabel }) => {
          if (xLabel) {
            return accumulator + xLabel
          }
          return accumulator
        }, 0)

        return `Total: $${total.toFixed(2)}`;
      }
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          callback: (value) =>`$${value}`,

        },
        stacked: true,
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        stacked: true,
      },
    ],
  },
};

function createData(candidates) {
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

  return {
    labels: candidates.map(candidate => candidate.name),
    datasets,
  };
}

const chart = new Chart(ctx, {
  type: 'horizontalBar',
  data: createData(candidates.filter(candidate => candidate.totalSpent !== 0)),
  // data: createData(candidates),
  options: barOptions,
});

const positions = document.getElementById('positions');
const slates = document.getElementById('slates');
const showAll = document.getElementById('show-all-candidates');

function filterCandidates() {

  let filteredCandidates = candidates;

  if (positions.value !== 'All') {
    filteredCandidates = filteredCandidates.filter(
      candidate => candidate.position === positions.value
    );
  }
  if (slates.value !== 'All') {
    filteredCandidates = filteredCandidates.filter(
      candidate => candidate.slate === slates.value
    );
  }
  if (!showAll.checked) {
    filteredCandidates = filteredCandidates.filter(
      candidate => candidate.totalSpent !== 0
    );
  }

  return filteredCandidates;
}

function onChange() {
  let filteredCandidates = filterCandidates();

  if (filteredCandidates.length === 0) {
    filteredCandidates = filterCandidates();
  }

  chart.data = createData(filteredCandidates);
  chart.update();
}

positions.addEventListener('change', onChange);
slates.addEventListener('change', onChange);
showAll.addEventListener('change', onChange);
