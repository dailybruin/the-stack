let start_keys = {
  hedrick: 'Hedrick',
  rieber: 'Rieber',
  sproul: 'Sproul',
  deneve: 'De Neve',
};

let end_keys = {
  powell: 'Powell',
  anderson: 'Anderson',
  public: 'Public Affairs',
  court: 'Court of Sciences',
  yrl: 'Young Research Library',
  target: 'Target',
};

function loadCSVData() {
  return new Promise(resolve => {
    d3.csv('/datasets/walking-to-class/route_stats.csv', function(bubble) {
      bubble.forEach(function(d) {
        (d.label =
          start_keys[d.start] +
          ' to ' +
          end_keys[d.stop] +
          ', Route ' +
          d.route),
          (d.x = +d.distance),
          (d.y = +d.elevation_gain),
          (d.r = +d.number_stairs / 10 + 5);
      });
      resolve(bubble);
    });
  });
}

async function getData() {
  let b_data = await loadCSVData();
  let hedrick_data = b_data.slice(0, 12);
  let rieber_data = b_data.slice(12, 24);
  let sproul_data = b_data.slice(24, 36);
  let deneve_data = b_data.slice(36, 48);

  new Chart(document.getElementById('bubble-chart'), {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: ['Hedrick'],
          backgroundColor: 'rgba(255,221,50,0.2)',
          borderColor: 'rgba(255,221,50,1)',
          data: hedrick_data,
        },
        {
          label: ['Rieber'],
          backgroundColor: 'rgba(60,186,159,0.2)',
          borderColor: 'rgba(60,186,159,1)',
          data: rieber_data,
        },
        {
          label: ['Sproul'],
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderColor: '#000',
          data: sproul_data,
        },
        {
          label: ['De Neve'],
          backgroundColor: 'rgba(193,46,12,0.2)',
          borderColor: 'rgba(193,46,12,1)',
          data: deneve_data,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      title: {
        display: true,
        text: 'Distance, Elevation, and Stair Count Across Walking Routes',
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Total Elevation Gain (ft)',
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Total Distance (mi)',
            },
          },
        ],
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let l =
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                .label;
            let s =
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                .number_stairs;
            return l + ' | ' + s + ' stairs';
          },
        },
      },
    },
  });
}

getData();
