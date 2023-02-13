Chart.defaults.font.family = 'Noto Serif, serif';
let barChart;

/**
 * Data Source:
 * https://docs.google.com/spreadsheets/d/1F5gAAKrjUhZ4xBHa5ULHore9t-Y57q5jnRuvYkRnhRg/edit#gid=261540986
 * Frontiers in Sustainable Food Systems, 31 August 2020 Sec.
 * Sustainable Food Processing Volume 4 - 2020
 */

const types = [
  'Cell-based meat',
  'Insect meat',
  'Tuna (wild)',
  'Plant-based meat substitute',
];

function initializeChart() {
  let data = {
    labels: types,
    datasets: [
      {
        data: [45.1, 57.5, 1.19, 8.24],
        backgroundColor: [
          'rgba(192, 50, 33, 0.5)',
          'rgba(242, 208, 164, 0.5)',
          'rgba(84, 94, 117, 0.5)',
          'rgba(63, 130, 109, 0.5)',
        ],
        borderColor: [
          'rgba(192, 50, 33)',
          'rgba(242, 208, 164)',
          'rgba(84, 94, 117)',
          'rgba(63, 130, 109)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Weighted average footprints (per 100 grams of protein)',
        },
        max: 60,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text:
          'Weighted average footprints for meat and meat alternative products',
        font: {
          weight: 400,
        },
      },
      tooltip: {
        callbacks: {
          label: function(TooltipItem) {
            return [
              TooltipItem.formattedValue + ' weighted average footprints',
              '(per 100 grams of protein)',
            ];
          },
        },
      },
    },
    maintainAspectRatio: false,
    animation: false,
  };

  let ctx = document.getElementById('beyondmeat_chart');
  barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
}

initializeChart();
