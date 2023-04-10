const ctx = document.getElementById('privvspubbar');

const labels = ['2021', '2020', '2019', '2018', '2017'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'State educational appropriations',
      data: [454, 536, 493, 448, 511],
      backgroundColor: 'rgba(50, 132, 191, 0.9)',
      stack: 'Stack 0',
    },
    {
      label: 'Government grants & contracts',
      data: [893, 803, 773, 743, 707],
      backgroundColor: 'rgba(50, 132, 191, 0.55)',
      stack: 'Stack 0',
    },
    {
      label: 'Private gifts',
      data: [405, 365, 367, 379, 308],
      backgroundColor: 'rgba(255, 210, 0, 0.9)',
      stack: 'Stack 1',
    },
    {
      label: 'Private industry grants & contracts',
      data: [295, 277, 276, 273, 241],
      backgroundColor: 'rgba(255, 210, 0, 0.4)',
      stack: 'Stack 1',
    },
  ],
};
const pubTotals = [1347, 1339, 1266, 1191, 1218];
const privTotals = [700, 642, 643, 652, 549];
const privvspubbar = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Private and public revenue (2017-2021)',
      },
      tooltip: {
        callbacks: {
          title: function(context) {
            return `Year: ${context[0].label}`;
          },
          label: function(context) {
            return `${context.parsed.x.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })} million`;
          },
          afterBody: function(context) {
            var array = [
              `Public Total: ${pubTotals[context[0].dataIndex].toLocaleString(
                'en-US',
                {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                }
              )} million`,
              `Private Total: ${privTotals[context[0].dataIndex].toLocaleString(
                'en-US',
                {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                }
              )} million`,
            ];
            return array;
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function(value, index, ticks) {
            return value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            });
          },
        },
        stacked: true,
        title: {
          display: true,
          text: 'Revenue in millions of dollars',
          padding: 20,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Year',
          padding: 20,
        },
        beginAtZero: true,
        stacked: true,
      },
    },
    layout: {
      padding: 0,
    },
    maintainAspectRatio: false,
    indexAxis: 'y',
  },
});
