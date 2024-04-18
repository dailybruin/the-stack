Chart.defaults.font.family = 'PT Sans';
const ctxt = document.getElementById('sportGraph3');
const pointImage = new Image(25, 25);
pointImage.src = 'icons8-star-48.png';
const costGraph = new Chart(ctxt, {
  type: 'line',
  data: {
    labels: [
      'Fresno State Invite',
      'Washington State Dual Meet',
      'UC Santa Barbara Dual Meet',
      'Illinois Dual Meet',
      'Arizona State Dual Meet',
      'Arizona Dual Meet',
      'Art Adamson Invitational',
      'UC San Diego-Wisconsin Tri-Meet',
      'Utah Dual Meet',
      'Stanford Dual Meet',
      'California Dual Meet',
      'USC Dual Meet',
      'Pac-12 Championship Preliminary Round',
      'Pac-12 Championship Finals',
      'NCAA Preliminary Round',
    ],
    datasets: [
      {
        label: 'Rosie Murphy',
        data: [
          121.36,
          119.66,
          120.2,
          null,
          116.19,
          117.03,
          115.78,
          null,
          117.93,
          null,
          117.92,
          113.25,
          113.45,
          113.13,
          113.83,
          null,
        ],
        backgroundColor: ['#00b4d8'],
        borderColor: ['#00b4d8'],
        spanGaps: true,
        pointStyle: [
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          'circle',
          pointImage,
          'circle',
          pointImage,
          'circle',
        ],
      },
      {
        label: 'School Record-Breaking Times',
        backgroundColor: ['#939033'],
        borderColor: ['#939033'],
      },
    ],
  },
  options: {
    categoryPercentage: 0.7,
    barPercentage: 1,

    scales: {
      x: {
        ticks: {},
      },
      y: {
        min: 112,
        title: {
          display: true,
          text: 'Time in Seconds',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        title: {
          display: true,
          text: ['UCLA Swimmers', 'Backstroke'],
          padding: 20,
          font: {
            size: 20,
          },
        },
      },
    },
  },
});
