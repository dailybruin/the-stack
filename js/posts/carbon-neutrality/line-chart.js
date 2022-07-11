const startYear = 2006;
const predictionStartYear = 2019;
const endYear = 2070;

let totalPredictions = [];
const totalRegressionSlope = 3547.861942;
const totalRegressionIntercept = -6824366.955;

for (let i = startYear; i < predictionStartYear; i++) {
  totalPredictions.push(null);
}
for (let i = predictionStartYear; i < endYear; i++) {
  totalPredictions.push(i * totalRegressionSlope + totalRegressionIntercept);
}

let netTotalPredictions = [];
const netTotalRegressionSlope = -5286.173772;
const netTotalRegressionIntercept = 10928282.62;

for (let i = startYear; i < predictionStartYear; i++) {
  netTotalPredictions.push(null);
}
for (let i = predictionStartYear; i < endYear; i++) {
  netTotalPredictions.push(
    i * netTotalRegressionSlope + netTotalRegressionIntercept
  );
}

let years = [];
for (let i = startYear; i < endYear; i++) {
  years.push(i);
}

new Chart(document.getElementById('line-chart'), {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: [
          265145,
          289394,
          null,
          303966,
          287885,
          311057,
          310481,
          305350,
          310868,
          353804,
          327017,
          335901,
          336728,
          327191.0448,
        ],
        label: 'Total Emissions (Scopes 1 and 2)',
        borderColor: '#3e95cd',
        backgroundColor: '#3e95cd',
        lineTension: 0,
        pointRadius: 0,
        fill: false,
        spanGaps: true,
      },
      // {
      //   data: [
      //     '172442',
      //     '180939',
      //     'NA',
      //     '234096',
      //     '230210',
      //     '231337',
      //     '244235',
      //     '226171',
      //     '237885',
      //     '236051',
      //     '241727',
      //     '245912',
      //     '246783',
      //     '248825',
      //   ],
      //   label: 'Scope 1 Total Direct Emissions',
      //   borderColor: '#3e95cd',
      //   lineTension: 0,
      //   fill: false,
      //   spanGaps: true,
      // },
      {
        data: [
          265145,
          289394,
          null,
          303966,
          287885,
          311057,
          310481,
          305350,
          253249,
          289268,
          268203,
          263919,
          258631,
          260874.0448,
        ],
        label: 'Net Total Emissions (Scopes 1 and 2)',
        borderColor: '#3cba9f',
        backgroundColor: '#3cba9f',
        lineTension: 0,
        pointRadius: 0,
        fill: false,
        spanGaps: true,
      },
      // {
      //   data: [
      //     '172442',
      //     '180939',
      //     'NA',
      //     '234096',
      //     '230210',
      //     '231337',
      //     '244235',
      //     '226171',
      //     '180266',
      //     '171515',
      //     '182913',
      //     '173930',
      //     '168686',
      //     '182508',
      //   ],
      //   label: 'Scope 1 Net Total Direct Emissions',
      //   borderColor: '#3cba9f',
      //   lineTension: 0,
      //   fill: false,
      //   spanGaps: true,
      // },
      // {
      //   data: [
      //     '92703',
      //     '108455',
      //     'NA',
      //     '69870',
      //     '57675',
      //     '79720',
      //     '66246',
      //     '79179',
      //     '72983',
      //     '117753',
      //     '85290',
      //     '89989',
      //     '89945',
      //     '78366.044793',
      //   ],
      //   label: 'Scope 2 Indirect Emissions',
      //   borderColor: '#c45850',
      //   lineTension: 0,
      //   fill: false,
      //   spanGaps: true,
      // },
      {
        data: netTotalPredictions,
        label: 'Net Total Emissions Projection',
        borderColor: '#3cba9f',
        borderDash: [10, 5],
        pointRadius: 0,
        lineTension: 0,
        fill: false,
        spanGaps: true,
      },
      {
        data: totalPredictions,
        label: 'Total Emissions Projection',
        borderColor: '#3e95cd',
        borderDash: [10, 5],
        pointRadius: 0,
        lineTension: 0,
        fill: false,
        spanGaps: true,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'UCLA CO2e Emissions',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'CO2e Emissions (metric tons)',
          },
          ticks: {
            beginAtZero: true,
            userCallback: function(value, index, values) {
              return value.toLocaleString();
            },
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        },
      ],
    },
    tooltips: {
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          value = data.datasets[tooltipItem.datasetIndex].data[
            tooltipItem.index
          ].toLocaleString('en-US', {
            maximumFractionDigits: 0,
          });
          return value + ' CO2e metric tons';
        },
      },
    },
  },
});
